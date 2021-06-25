// Import d'express
const express = require('express');

// Chamamos o método Router do express
const routes = express.Router();

// Definimos nossa rota
routes.get('/', (req, res) => res.render("index"));
routes.get('/room', (req, res) => res.render("room"));
routes.get('/create-pass', (req, res) => res.render("create-pass"));
routes.get('/room/:room/:question/:action', (req, res) => res.render("exemplo", {req}));

// Exportamos o arquivo pra que as rotas sejam acessiveis
module.exports = routes;