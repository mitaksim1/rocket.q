// Imports
const express = require('express');
const route = require('./routes');
const path = require ('path');

// Iniciando o express
const server = express();

// Set o view engine que vamos utilisar
server.set('view engine', 'ejs');

// Set o caminho da pasta onde estao nossos templates para que o esj os encontre
server.set('views', path.join(__dirname, 'views'));

// pedimos pro express usar o arquivo de rotas
server.use(route);

// Pedimos pro servidor escutar na porta 3000
server.listen(3000, () => console.log("rodando"));