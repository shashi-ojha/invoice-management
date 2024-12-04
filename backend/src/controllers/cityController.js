const cityService = require('../services/cityService');

const getAllCities = async (req, res) => {
  try {
    const cities = await cityService.fetchAllCities();
    res.status(200).json({ success: true, data: cities });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getCityById = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await cityService.fetchCityById(id);
    if (!city) {
      return res.status(404).json({ success: false, message: 'City not found' });
    }
    res.status(200).json({ success: true, data: city });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createCity = async (req, res) => {
  try {
    const city = await cityService.addCity(req.body);
    res.status(201).json({ success: true, data: city });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await cityService.modifyCity(id, req.body);
    if (!city) {
      return res.status(404).json({ success: false, message: 'Client not found' });
    }
    res.status(200).json({ success: true, data: city });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await cityService.removeCity(id);
    if (!city) {
      return res.status(404).json({ success: false, message: 'City not found' });
    }
    res.status(200).json({ success: true, data: city });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllCities,
  getCityById,
  createCity,
  updateCity,
  deleteCity,
};
