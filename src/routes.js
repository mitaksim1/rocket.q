// Import d'express
const express = require('express');

// Chamamos o método Router do express
const routes = express.Router();

// Definimos nossa rota
routes.get('/', (req, res) => res.render("index"));

// Exportamos o arquivo pra que as rotas sejam acessiveis
module.exports = routes;