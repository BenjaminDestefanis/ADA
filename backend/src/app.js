const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas básicas (las definiremos después)
app.get('/', (req, res) => {
  res.send('API de Udemy Clone');
});

module.exports = app;