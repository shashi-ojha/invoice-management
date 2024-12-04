const areaModel = require('../models/areaModel');

const fetchAllAreas = async () => {
  return await areaModel.getAllAreas();
};

const fetchAreaById = async (id) => {
  return await areaModel.getAreaById(id);
};

const addArea = async (data) => {
  return await areaModel.createArea(data);
};

const modifyArea = async (id, data) => {
  return await areaModel.updateArea(id, data);
};

const removeArea = async (id) => {
  return await areaModel.deleteArea(id);
};

module.exports = {
    fetchAllAreas,
    fetchAreaById,
    addArea,
    modifyArea,
    removeArea,
};