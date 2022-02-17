const express = require('express');
const fruits = require('./models/fruits');
const vegetables = require('./models/vegetables')
const app = express();


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use((req, res, next) => {
    console.log(req.body)
    next()
})

//INDEX - w10d3
app.get('/fruits', (req, res) => {
    res.render('fruits/Index', {fruits});
});

app.get('/vegetables', (req, res) => {
    res.render('vegetables/Index', {vegetables});
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


//CREATE - w11d01
app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.redirect('/fruits')
});

app.post('/vegetables', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    vegetables.push(req.body)
    res.redirect('/vegetables')
})

//EDIT


//SHOW - w10d03
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render('fruits/Show', {
        fruit: fruits[req.params.indexOfFruitsArray]
    });
});

app.get('/vegetables/:indexOfVegetablesArray', (req, res) => {
    res.render('vegetables/Show', {
        vegetable: vegetables[req.params.indexOfVegetablesArray]
    });
});


//Route for all of the previous code to show up on localhost:3000
app.listen(3000,() => {
    console.log('Wynncraft is Great!');
});