const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Product } = require('./models/product');
var { User } = require('./models/user');
var { LogIn } = require('./models/login');

var app = express();

//configuration middleware(le retour de l'appel de cette fonction)
// est un middleware que l'on donne à express
app.use(bodyParser.json());

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
   })

//configuration de la route
app.post('/products', (req, res) => {
    var product = new Product({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        photo: req.body.photo
    });

    product.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});

app.get('/product-details/:id', (req, res) => {
    Product.findOne({id:req.params.id}, function(err, prod) {
        if (err) throw err;
        console.log("youppiiiiiiiiiiiii");
        // we have the updated user returned to us
        res.json({id:req.params.name});
      });
});

app.get('/products', (req, res) => {
    Product.find().then((products) => {
        res.send({ products })
    }, (e) => {
        res.status(400).send(e);
    });
});


app.put('/product-details/:id', (req, res) => {
    //res.json({"toto":req.params.id, "rates": req.body.rates});
//, upsert: true
    Product.findOneAndUpdate({"id":req.params.id}, {$push: {"rates": req.body.rates}}, {safe: true} , function(err, prod) {
        if (err) throw err;
        // we have the updated user returned to us
        console.log(prod);
        console.log("youppiiiiiiiiiiiii");
      });
})

app.post('/users', (req, res) => {
    var user = new User({
        // id: req.body.id,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    user.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});

app.get('/users', (req, res) => {
    User.find().then((users) => {
        res.send({ users })
    }, (e) => {
        res.status(400).send(e);
    });
});

app.post('/login', (req, res) => {
    var login = new LogIn({
        // id: req.body.id,
        username: req.body.username,
        password: req.body.password
    });

    login.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});

app.get('/login', (req, res) => {
    LogIn.find().then((logins) => {
        res.send({ logins })
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/login/:username/:password', (req, res) => {
    User.find({username : req.params.username, password : req.params.password}).then((login) => {
        res.send({ login })
    }, (e) => {
        res.status(400).send(e);
    });
});
 
// () => {}

app.listen(3000, () => {
    console.log('Started on port 3000');
});

//permet de récupérer une instance du serveur coté test
module.exports = { app };