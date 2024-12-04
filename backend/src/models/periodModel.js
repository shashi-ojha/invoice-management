const pool = require('../config/database');

const getAllPeroids = async () => {
  const query = `SELECT p.id AS period_id, p.title, p.months FROM periods p WHERE p.is_active = TRUE`;
  const result = await pool.query(query);
  return result.rows;
};

const getPeriodById = async (id) => {
  const query = `SELECT p.id AS period_id, p.title, p.months FROM periods p WHERE p.id = $1 AND p.is_active = TRUE`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const createPeriod = async (data) => {
  const query = `INSERT INTO periods (title, months ) VALUES ($1, $2) RETURNING *;`;
  const values = [data.title, data.months];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const updatePeriod = async (id, data) => {
  const query = `
    UPDATE periods SET 
      title = $1, months = $2, updated_date = CURRENT_TIMESTAMP
    WHERE id = $3 AND is_active = TRUE RETURNING *;
  `;
  const values = [data.title, data.months, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Soft delete a periods
const deletePeriod = async (id) => {
  const query = `
    UPDATE periods SET is_active = FALSE, updated_date = CURRENT_TIMESTAMP 
    WHERE id = $1 RETURNING *;
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};


module.exports = {
    getAllPeroids,
    getPeriodById,
    createPeriod,
    updatePeriod,
    deletePeriod,
};
