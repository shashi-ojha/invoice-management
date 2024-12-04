const pool = require('../config/database');

const getAllCities = async () => {
  const query = `SELECT c.id AS city_id, c.name AS city_name, s.name AS state_name FROM city c JOIN state s ON c.state_id = s.id WHERE c.is_active = TRUE ORDER BY c.created_date DESC`;
  const result = await pool.query(query);
  return result.rows;
};

const getCityById = async (id) => {
  const query = `SELECT c.id AS city_id, c.name AS city_name, s.name AS state_name FROM city c JOIN state s ON c.state_id = s.id WHERE c.id = $1 AND c.is_active = TRUE`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const createCity = async (data) => {
  const query = `INSERT INTO city (name, state_id) VALUES ($1, $2) RETURNING *;`;
  const values = [data.name, data.state_id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const updateCity = async (id, data) => {
  const query = `UPDATE city SET name = $1, state_id = $2, updated_date = CURRENT_TIMESTAMP
    WHERE id = $3 AND is_active = TRUE RETURNING *;`;
  const values = [data.name, data.state_id, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Soft delete a city
const deleteCity = async (id) => {
  const query = `
    UPDATE city SET is_active = FALSE, updated_date = CURRENT_TIMESTAMP 
    WHERE id = $1 RETURNING *;
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};


module.exports = {
  getAllCities,
  getCityById,
  createCity,
  updateCity,
  deleteCity,
};
