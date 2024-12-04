const pool = require('../config/database');

const getAllAreas = async () => {
  const query = `SELECT a.id AS area_id, a.area_name, c.name AS city_name, s.name AS state_name FROM area a 
  JOIN city c ON a.city_id = c.id 
  JOIN state s ON a.state_id = s.id WHERE a.is_active = TRUE ORDER BY a.created_date DESC`;
  const result = await pool.query(query);
  return result.rows;
};

const getAreaById = async (id) => {
  const query = `SELECT a.id AS area_id, a.area_name, c.name AS city_name, s.name AS state_name FROM area a 
  JOIN city c ON a.city_id = c.id 
  JOIN state s ON a.state_id = s.id WHERE a.id = $1 AND a.is_active = TRUE`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const createArea = async (data) => {
  const query = `INSERT INTO area (area_name, city_id, state_id) VALUES ($1, $2, $3) RETURNING *;`;
  const values = [data.area_name, data.city_id, data.state_id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const updateArea = async (id, data) => {
  const query = `UPDATE area SET area_name = $1, city_id = $2, state_id = $3, updated_date = CURRENT_TIMESTAMP
    WHERE id = $4 AND is_active = TRUE RETURNING *;`;
  const values = [data.area_name, data.city_id, data.state_id, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Soft delete a city
const deleteArea = async (id) => {
  const query = `
    UPDATE area SET is_active = FALSE, updated_date = CURRENT_TIMESTAMP 
    WHERE id = $1 RETURNING *;
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};


module.exports = {
    getAllAreas,
    getAreaById,
    createArea,
    updateArea,
    deleteArea,
};
