require('dotenv').config()
console.log(process.env.MONGO_URI)
const express = require('express');
const mongoose = require('mongoose')
const Fruit = require('./models/fruits');
const Vegetable = require('./models/vegetables')
const app = express();


//MVC SETUP
//views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//models
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use((req, res, next) => {
    console.log(req.body)
    next()
})

//INDEX - w10d3 updated on w11d02
app.get('/fruits', (req, res) => {
    Fruit.find({}, (err, foundFruits) => {
        if(err) {
            res.status(400).send(err)
        } else {
            res.render('fruits/Index', {
                fruits: foundFruits
            })
        }
    })
});

app.get('/vegetables', (req, res) => {
    Vegetable.find({}, (err, foundVegetables) => {
        if(err) {
            res.status(400).send(err)
        } else {
            res.render('vegetables/Index', {
                vegetables: foundVegetables
            })
        }
    })
});

//NEW - w11d01
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New');
});

app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New')
});

//DELETE


//UPDATE


//CREATE - w11d01 updated w11d02
app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    
    Fruit.create(req.body, (err, createdFruit) => {
        if(err) {
            res.status(403).send(err)
        } else {
            res.redirect('/fruits')
        }
    })
});

app.post('/vegetables', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    
    Vegetable.create(req.body, (err, createdFruit) => {
        if(err) {
            res.status(403).send(err)
        } else {
            res.redirect('vegetables')
        }
    })
});

//EDIT


//SHOW - w10d03 updated w11d02
app.get('/fruits/:id', (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if(err) {
            res.status(400).send(err)
        } else {
            res.render('fruits/Show', {
                fruit: foundFruit
            })
        }
    })
});

app.get('/vegetables/:id', (req, res) => {
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        if(err) {
            res.status(400).send(err)
        } else {
            res.render('vegetables/Show', {
                vegetable: foundVegetable
            })
        }
    })
});


//Route for all of the previous code to show up on localhost:3000
app.listen(3000);