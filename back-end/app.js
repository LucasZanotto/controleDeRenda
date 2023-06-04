const express = require('express');
const movelRouter = require('./src/routers/tabelaRouter');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (request, response) => {
  response.send('HELLOWWWWWW')
});

app.use('/tabela', movelRouter);

module.exports = app;