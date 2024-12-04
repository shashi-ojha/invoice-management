const stateModel = require('../models/stateModel');

const fetchAllStates = async () => {
  return await stateModel.getAllStates();
};

const fetchStateById = async (id) => {
  return await stateModel.getStateById(id);
};

const addState = async (name) => {
  return await stateModel.createState(name);
};

const modifyState = async (id, name) => {
  return await stateModel.updateState(id, name);
};

const removeState = async (id) => {
  return await stateModel.deleteState(id);
};

module.exports = {
  fetchAllStates,
  fetchStateById,
  addState,
  modifyState,
  removeState,
};
