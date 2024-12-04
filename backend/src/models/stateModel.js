const pool = require('../config/database');

const getAllStates = async () => {
  const query = 'SELECT * FROM state WHERE is_active = TRUE';
  const result = await pool.query(query);
  return result.rows;
};

const getStateById = async (id) => {
  const query = 'SELECT * FROM state WHERE id = $1 AND is_active = TRUE';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const createState = async (name) => {
  const query = 'INSERT INTO state (name) VALUES ($1) RETURNING *';
  const result = await pool.query(query, [name]);
  return result.rows[0];
};

const updateState = async (id, name) => {
  const query = `
    UPDATE state 
    SET name = $1, updated_date = CURRENT_TIMESTAMP 
    WHERE id = $2 AND is_active = TRUE 
    RETURNING *`;
  const result = await pool.query(query, [name, id]);
  return result.rows[0];
};

const deleteState = async (id) => {
  const query = `
    UPDATE state 
    SET is_active = FALSE, updated_date = CURRENT_TIMESTAMP 
    WHERE id = $1 
    RETURNING *`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

module.exports = {
  getAllStates,
  getStateById,
  createState,
  updateState,
  deleteState,
};
