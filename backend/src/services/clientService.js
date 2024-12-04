const clientModel = require('../models/clientModel');

const fetchAllClients = async () => {
  return await clientModel.getAllClients();
};

const fetchClientById = async (id) => {
  return await clientModel.getClientById(id);
};

const addClient = async (data) => {
  return await clientModel.createClient(data);
};

const modifyClient = async (id, data) => {
  return await clientModel.updateClient(id, data);
};

const removeClient = async (id) => {
  return await clientModel.deleteClient(id);
};

module.exports = {
  fetchAllClients,
  fetchClientById,
  addClient,
  modifyClient,
  removeClient,
};