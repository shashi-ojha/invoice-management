const stateService = require('../services/stateService');

const getAllStates = async (req, res) => {
  try {
    const states = await stateService.fetchAllStates();
    res.status(200).json({ success: true, data: states });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getStateById = async (req, res) => {
  try {
    const { id } = req.params;
    const state = await stateService.fetchStateById(id);
    if (!state) {
      return res.status(404).json({ success: false, message: 'State not found' });
    }
    res.status(200).json({ success: true, data: state });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createState = async (req, res) => {
  try {
    const { name } = req.body;
    const state = await stateService.addState(name);
    res.status(201).json({ success: true, data: state });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateState = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const state = await stateService.modifyState(id, name);
    if (!state) {
      return res.status(404).json({ success: false, message: 'State not found' });
    }
    res.status(200).json({ success: true, data: state });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteState = async (req, res) => {
  try {
    const { id } = req.params;
    const state = await stateService.removeState(id);
    if (!state) {
      return res.status(404).json({ success: false, message: 'State not found' });
    }
    res.status(200).json({ success: true, data: state });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllStates,
  getStateById,
  createState,
  updateState,
  deleteState,
};
