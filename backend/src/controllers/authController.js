const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../models/db');

const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // 1. Verificar si el usuario ya existe
    const userExists = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }

    // 2. Hash de la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Guardar usuario en la DB
    const newUser = await pool.query(
      'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, hashedPassword, role || 'student']
    );

    // 4. Generar token JWT (opcional, para login automático después del registro)
    const token = jwt.sign(
      { id: newUser.rows[0].id, role: newUser.rows[0].role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({ user: newUser.rows[0], token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = { register };