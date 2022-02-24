require('dotenv').config()
console.log(process.env.MONGO_URI)
const express = require('express');
const mongoose = require('mongoose')
const methodOverride = require('method-override')
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
app.use(methodOverride('_method'))


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


//DELETE - w12d02
app.delete('/fruits/:id', (req, res) => {
    Fruit.findByIdAndDelete(req.params.id, (err, deletedFruit) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.redirect('/fruits')
        }
    })
})

app.delete('/vegetables/:id', (req, res) => {
    Vegetable.findByIdAndDelete(req.params.id, (err, deletedVegetable) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.redirect('/vegetables')
        }
    })
})


//UPDATE - w12d02
app.put('/fruits/:id', (req,res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }

    Fruit.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedFruit) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.redirect(`/fruits/${req.params.id}`)
        }
    })
})

app.put('/vegetables/:id', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    Vegetable.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedVegetable) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.redirect(`/vegetables/${req.params.id}`)
        }
    })
})


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
    
    Vegetable.create(req.body, (err, createdVegetable) => {
        if(err) {
            res.status(403).send(err)
        } else {
            res.redirect('vegetables')
        }
    })
});


//EDIT - w12d02
app.get('/fruits/:id/edit', (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.render('fruits/Edit', {
                fruit: foundFruit
            })
        }
    })
})

app.get('/vegetables/:id/edit', (req, res) => {
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.render('vegetables/Edit', {
                vegetable: foundVegetable
            })
        }
    })
})


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