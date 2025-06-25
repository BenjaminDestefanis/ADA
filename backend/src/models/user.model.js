const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const pool = require('../config/database');

class User {
  /**
   * Crea un nuevo usuario
   * @param {string} username 
   * @param {string} email 
   * @param {string} password 
   * @returns {Promise<Object>} Usuario creado
   */
  static async create(username, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = {
      text: 'INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING id, username, email, created_at',
      values: [username, email, hashedPassword]
    };
    
    const result = await pool.query(query);
    return result.rows[0];
  }

  /**
   * Busca usuario por email
   * @param {string} email 
   * @returns {Promise<Object|null>} Usuario encontrado o null
   */
  static async findByEmail(email) {
    const query = {
      text: 'SELECT * FROM users WHERE email = $1',
      values: [email]
    };
    
    const result = await pool.query(query);
    return result.rows[0] || null;
  }

  /**
   * Verifica contraseña
   * @param {string} candidatePassword 
   * @param {string} hashedPassword 
   * @returns {Promise<boolean>} Coincide o no
   */
  static async comparePasswords(candidatePassword, hashedPassword) {
    return await bcrypt.compare(candidatePassword, hashedPassword);
  }

  /**
   * Actualiza información de usuario
   * @param {number} id 
   * @param {Object} updates 
   * @returns {Promise<Object>} Usuario actualizado
   */
  static async update(id, { username, email }) {
    const query = {
      text: 'UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING id, username, email',
      values: [username, email, id]
    };
    
    const result = await pool.query(query);
    return result.rows[0];
  }
}

module.exports = User;