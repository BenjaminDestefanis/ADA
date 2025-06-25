-- Tabla 'users'
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(100),
  role VARCHAR(20) DEFAULT 'student'
);

-- Tabla 'courses'
CREATE TABLE IF NOT EXISTS courses (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200),
  description TEXT,
  instructor_id INTEGER REFERENCES users(id),
  price DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT NOW()
);