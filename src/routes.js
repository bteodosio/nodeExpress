const express = require('express');
const rotas = express.Router();

rotas.get('/', (req, res) => {
    return res.json({ Ola: 'Mundo!' });
});

module.exports = rotas  ;