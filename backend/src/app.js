const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./database/connection')
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');


// Solo verifica conexión, NO crea tablas
pool.query('SELECT NOW()')
  .then(() => {
    console.log('✅ DB conectada')
      if ( process.env.NODE_ENV === 'development') {
        require('./database/migrations/run-migrations')
      }
  })

  .catch(err => {
    console.error('❌ Error de conexión:', err);
    process.exit(1); // Detiene la app si no hay DB
  });

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


app.listen(3000, () => {
  console.log('APP lista en http://localhost:3000')
})

module.exports = app;