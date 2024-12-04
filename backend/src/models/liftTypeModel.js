const pool = require('../config/database');

const getAllLiftType = async () => {
  const query = `SELECT lt.id, lt.title, lt.price FROM lifttype lt WHERE lt.is_active = TRUE`;
  const result = await pool.query(query);
  return result.rows;
};

const getLiftTypeById = async (id) => {
  const query = `SELECT lt.id, lt.title, lt.price FROM lifttype lt WHERE lt.id = $1 AND lt.is_active = TRUE`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const createLiftType = async (data) => {
  const query = `INSERT INTO lifttype (title, price ) VALUES ($1, $2) RETURNING *;`;
  const values = [data.title, data.price];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const updateLiftType = async (id, data) => {
  const query = `
    UPDATE lifttype SET 
      title = $1, price = $2, updated_date = CURRENT_TIMESTAMP
    WHERE id = $3 AND is_active = TRUE RETURNING *;
  `;
  const values = [data.title, data.price, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Soft delete a lifttype
const deleteLiftType = async (id) => {
  const query = `
    UPDATE lifttype SET is_active = FALSE, updated_date = CURRENT_TIMESTAMP 
    WHERE id = $1 RETURNING *;
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};


module.exports = {
    getAllLiftType,
    getLiftTypeById,
    createLiftType,
    updateLiftType,
    deleteLiftType,
};
