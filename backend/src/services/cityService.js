const cityModel = require('../models/cityModel');

const fetchAllCities = async () => {
  return await cityModel.getAllCities();
};

const fetchCityById = async (id) => {
  return await cityModel.getCityById(id);
};

const addCity = async (data) => {
  return await cityModel.createCity(data);
};

const modifyCity = async (id, data) => {
  return await cityModel.updateCity(id, data);
};

const removeCity = async (id) => {
  return await cityModel.deleteCity(id);
};

module.exports = {
    fetchAllCities,
    fetchCityById,
    addCity,
    modifyCity,
    removeCity,
};