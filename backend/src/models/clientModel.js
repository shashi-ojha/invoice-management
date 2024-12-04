const pool = require('../config/database');

const getAllClients = async () => {
  const query = `SELECT c.id AS client_id, c.building_name, c.address, c.chairperson_name, c.phonenumber, c.from_date, c.to_date, c.maintenance_charge, c.status, c.is_active, a.area_name, lt.title AS lift_type, p.title AS contract_period FROM clients c JOIN area a ON c.area_id = a.id JOIN liftType lt ON c.lift_type_id = lt.id JOIN periods p ON c.contract_period_id = p.id WHERE c.is_active = TRUE ORDER BY c.created_date DESC`;
  const result = await pool.query(query);
  return result.rows;
};

const getClientById = async (id) => {
  const query = `SELECT c.id AS client_id, c.building_name, c.address, c.chairperson_name, c.phonenumber, c.email, c.from_date, c.to_date, c.maintenance_charge, c.status, c.created_date, c.updated_date, c.is_active, a.area_name, ci.name AS city_name, s.name AS state_name, lt.title AS lift_type, lt.price AS lift_price, p.title AS contract_period, p.months AS period_months FROM clients c JOIN area a ON c.area_id = a.id JOIN  city ci ON c.city_id = ci.id JOIN state s ON c.state_id = s.id JOIN liftType lt ON c.lift_type_id = lt.id JOIN periods p ON c.contract_period_id = p.id WHERE c.id = $1 AND c.is_active = TRUE`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const createClient = async (data) => {
  const query = `
    INSERT INTO clients (
      building_name, area_id, address, city_id, state_id, chairperson_name, 
      lift_type_id, contract_period_id, from_date, to_date, maintenance_charge, status
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *;
  `;
  const values = [
    data.building_name, data.area_id, data.address, data.city_id, data.state_id,
    data.chairperson_name, data.lift_type_id, data.contract_period_id,
    data.from_date, data.to_date, data.maintenance_charge, data.status
  ];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const updateClient = async (id, data) => {
  const query = `
    UPDATE clients SET 
      building_name = $1, area_id = $2, address = $3, city_id = $4, 
      state_id = $5, chairperson_name = $6, lift_type_id = $7, 
      contract_period_id = $8, from_date = $9, to_date = $10, 
      maintenance_charge = $11, status = $12, updated_date = CURRENT_TIMESTAMP
    WHERE id = $13 AND is_active = TRUE RETURNING *;
  `;
  const values = [
    data.building_name, data.area_id, data.address, data.city_id, data.state_id,
    data.chairperson_name, data.lift_type_id, data.contract_period_id,
    data.from_date, data.to_date, data.maintenance_charge, data.status, id
  ];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Soft delete a client
const deleteClient = async (id) => {
  const query = `
    UPDATE clients SET is_active = FALSE, updated_date = CURRENT_TIMESTAMP 
    WHERE id = $1 RETURNING *;
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};


module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
