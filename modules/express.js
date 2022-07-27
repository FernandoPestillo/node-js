const express = require("express");
const session = require('express-session');
const UserModel = require('../src/models/user.models');
var path = require('path');
const bodyParser = require('body-parser');


const app = express();


app.use(express.json());

app.use(session({secret: 'jksahfjoi34u923j43nrhejbr'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('./src/client'));
app.set('views', path.join(__dirname, '../src/client'));


app.get('/', async (req, res) => {
    const users = await UserModel.find({});

    if(req.session.firstName){

        res.render('logado');
    }else{
        res.render('login');
    }
});
app.get('/register', (req, res) => {
    res.render('register');
});
// CRIAR USUÁRIO (FUNCIONANDO)
app.post('/users', async (req, res) => {
    console.log(req.body);
    try {
        const user = UserModel.create(req.body);

        res.status(201).render('login');
    } catch (error) {
        res.status(500).send(error.message);
    }

});

// LOGAR
app.post('/user', async (req,res) => {
    const { firstName, password } = req.body;

    const userExists = await UserModel.findOne({ firstName: firstName, password: password});

    if (!userExists) {
        return res.status(422).json('Usuário não existe!');
    } else {
        res.render('user', {userExists});
    }
});


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

app.delete('/users/:password', async (req,res) => {
    try {
        const password = req.params.password;

        const user = await UserModel.findOneAndDelete({ password: '11111111' });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


const port = 2222;

app.listen(port, '192.168.1.164', () => console.log(`Rodando com express na porta ${port}!`));