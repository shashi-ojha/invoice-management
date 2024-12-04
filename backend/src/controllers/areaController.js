const areaService = require('../services/areaService');

const getAllAreas = async (req, res) => {
  try {
    const areas = await areaService.fetchAllAreas();
    res.status(200).json({ success: true, data: areas });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAreaById = async (req, res) => {
  try {
    const { id } = req.params;
    const area = await areaService.fetchAreaById(id);
    if (!area) {
      return res.status(404).json({ success: false, message: 'Area not found' });
    }
    res.status(200).json({ success: true, data: area });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createArea = async (req, res) => {
  try {
    const area = await areaService.addArea(req.body);
    res.status(201).json({ success: true, data: area });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateArea = async (req, res) => {
  try {
    const { id } = req.params;
    const area = await areaService.modifyArea(id, req.body);
    if (!area) {
      return res.status(404).json({ success: false, message: 'Area not found' });
    }
    res.status(200).json({ success: true, data: area });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteArea = async (req, res) => {
  try {
    const { id } = req.params;
    const area = await areaService.removeArea(id);
    if (!area) {
      return res.status(404).json({ success: false, message: 'Area not found' });
    }
    res.status(200).json({ success: true, data: area });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
    getAllAreas,
    getAreaById,
    createArea,
    updateArea,
    deleteArea,
};
