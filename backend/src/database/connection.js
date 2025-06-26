const { Pool } = require('pg');
require('dotenv').config({ path: __dirname + '/../../.env'});
//console.log('Contraseña cargada:', process.env.DB_PASSWORD)

// Creacion de conexion con la base de datos
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

//Verificacion de conexcion
pool.query('SELECT NOW()')
  .then(() => console.log("✅ Conexion exitosa con la base de datos : " + process.env.DB_NAME))
  .catch(err => console.error('❌ Error de conexión:', err));

// se exporta para poder ser utilizado por otros archivos
module.exports = pool;