const liftTypeModel = require('../models/liftTypeModel');

const fetchAllLiftType = async () => {
  return await liftTypeModel.getAllLiftType();
};

const fetchLiftTypeById = async (id) => {
  return await liftTypeModel.getLiftTypeById(id);
};

const addLiftType = async (data) => {
  return await liftTypeModel.createLiftType(data);
};

const modifyLiftType = async (id, data) => {
  return await liftTypeModel.updateLiftType(id, data);
};

const removeLiftType = async (id) => {
  return await liftTypeModel.deleteLiftType(id);
};

module.exports = {
    fetchAllLiftType,
    fetchLiftTypeById,
    addLiftType,
    modifyLiftType,
    removeLiftType,
};