const express = require('express');
const bodyParser = require('body-parser');
const rotas = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(rotas)

app.listen(2707, ()=>{
    console.log('Chamando app.listen()')
    console.log('O servidor esta online.');
});