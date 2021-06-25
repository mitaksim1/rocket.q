// Import d'express
const express = require('express');
// Import dos controllers
const questionController = require('./controllers/QuestionController.js');

// Chamamos o método Router do express
const routes = express.Router();

// Definimos nossa rota
routes.get('/', (req, res) => res.render("index", {page: 'enter-room'}));
routes.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}));
routes.get('/room', (req, res) => res.render("room"));
// Formato esperado pelo formulario da modal
routes.post('/room/:room/:question/:action', questionController.index);

// Exportamos o arquivo pra que as rotas sejam acessiveis
module.exports = routes;