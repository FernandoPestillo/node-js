const express = require("express");
const session = require('express-session');
const UserModel = require('../src/models/user.models');
var path = require('path');
const bodyParser = require('body-parser');
const { find } = require("../src/models/user.models");
//const inputs = require("../src/client/script-login");

const app = express();

var firstName = 'Fernando';
var password = '12345678';

app.use(express.json());

app.use(session({secret: 'jksahfjoi34u923j43nrhejbr'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('./src/client'));
app.set('views', path.join(__dirname, '../src/client'));


app.get('/', (req, res) => {
    if(req.session.firstName){
        res.render('logado');
    }else{
        res.render('login');
    }
});
// FAZER LOGIN
app.post('/', (req, res) => {
    
    if(req.body.firstName == firstName && req.body.password == password){
        req.session.firstName = firstName;

        res.render('logado');
    }else{
        res.render('login');
    }
});

// CRIAR USUARIO
/* app.post('/', (req, res) => {
    console.log(req.body);
    res.render('login');
    try {
        const user = UserModel.create(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
}); */


app.get('/users', async (req,res) => {
    try {
        const users = await UserModel.find({});

        res.status(200).json(users);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

app.get('/users/:id', async (req,res) => {
    try {
        const id = req.params.id;

        const user = await UserModel.findById(id);

        res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

/* app.post('/users', async (req,res) =>{
    try {
        const user = await UserModel.create(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
}); */

app.patch('/users/:id', async (req,res) => {
    try {
        const id = req.params.id;

        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.delete('/users/:id', async (req,res) => {
    try {
        const id = req.params.id;

        const user = await UserModel.findByIdAndRemove(id);

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


const port = 2222;

app.listen(port, () => console.log(`Rodando com express na porta ${port}!`));