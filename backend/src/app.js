const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use(express.json());

// Rutas básicas (las definiremos después)
app.get('/', (req, res) => {
  res.send('API de Udemy Clone');
});

module.exports = app;