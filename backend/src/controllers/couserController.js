const pool = require('../models/db');

const getCourses = async (req, res) => {
  try {
    // 1. Obtener todos los cursos con información del instructor
    const courses = await pool.query(
      `SELECT c.*, u.name AS instructor_name 
       FROM courses c
       JOIN users u ON c.instructor_id = u.id`
    );

    res.status(200).json(courses.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener cursos' });
  }
};

module.exports = { getCourses };