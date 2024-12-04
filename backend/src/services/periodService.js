const periodModel = require('../models/periodModel');

const fetchAllPeriods = async () => {
  return await periodModel.getAllPeroids();
};

const fetchPeriodById = async (id) => {
  return await periodModel.getPeriodById(id);
};

const addPeriod = async (data) => {
  return await periodModel.createPeriod(data);
};

const modifyPeriod = async (id, data) => {
  return await periodModel.updatePeriod(id, data);
};

const removePeriod = async (id) => {
  return await periodModel.deletePeriod(id);
};

module.exports = {
    fetchAllPeriods,
    fetchPeriodById,
    addPeriod,
    modifyPeriod,
    removePeriod,
};