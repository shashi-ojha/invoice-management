const clientService = require('../services/clientService');

const getAllClients = async (req, res) => {
  try {
    const clients = await clientService.fetchAllClients();
    res.status(200).json({ success: true, data: clients });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await clientService.fetchClientById(id);
    if (!client) {
      return res.status(404).json({ success: false, message: 'Client not found' });
    }
    res.status(200).json({ success: true, data: client });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createClient = async (req, res) => {
  try {
    const client = await clientService.addClient(req.body);
    res.status(201).json({ success: true, data: client });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await clientService.modifyClient(id, req.body);
    if (!client) {
      return res.status(404).json({ success: false, message: 'Client not found' });
    }
    res.status(200).json({ success: true, data: client });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await clientService.removeClient(id);
    if (!client) {
      return res.status(404).json({ success: false, message: 'Client not found' });
    }
    res.status(200).json({ success: true, data: client });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
