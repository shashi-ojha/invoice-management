const pool = require('../config/database');

const createUser = async (name, email) => {
  const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
  const values = [name, email];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const result = await pool.query(query, [email]);
  return result.rows[0];
};

const getAllUsers = async () => {
    const query = 'SELECT * FROM clients';
    const result = await pool.query(query);
    return result.rows;
  };

module.exports = {
  createUser,
  getUserByEmail,
  getAllUsers,
};
