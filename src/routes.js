// Import d'express
const express = require('express');
// Import dos controllers
const QuestionController = require('./controllers/QuestionController.js');
const RoomController = require('./controllers/RoomController.js');

// Chamamos o método Router do express
const routes = express.Router();

// Definimos nossa rota
routes.get('/', (req, res) => res.render("index", {page: 'enter-room'}));
routes.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}));

routes.post('/create-room', RoomController.create);
routes.get('/room/:id', RoomController.open);
routes.post('/enter-room', RoomController.enter);

routes.post('/question/create/:room', QuestionController.create);
// Formato esperado pelo formulario da modal
routes.post('/question/:room/:question/:action', QuestionController.index);

// Exportamos o arquivo pra que as rotas sejam acessiveis
module.exports = routes;