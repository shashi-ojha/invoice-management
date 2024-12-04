const liftTypeService = require("../services/liftTypeService");

const getAllLiftTypes = async (req, res) => {
    try {
      const liftTypes = await liftTypeService.fetchAllLiftType();
      res.status(200).json({ success: true, data: liftTypes });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  const getLiftTypeById = async (req, res) => {
    try {
      const { id } = req.params;
      const liftType = await liftTypeService.fetchLiftTypeById(id);
      if(!liftType) {
        return res.status(404).json({ success: false, message: "Lift type not founds" });
      }
      res.status(200).json({ success: true, data: liftType });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

const createLiftType = async (req, res) => {
    try {
        const liftType = await liftTypeService.addLiftType(req.body);
        res.status(201).json({ success: true, data: liftType})
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const updateLiftType = async (req, res) => {
    try {
      const { id } = req.params;
      const liftType = await liftTypeService.modifyLiftType(id, req.body);
      if (!liftType) {
        return res.status(404).json({ success: false, message: 'Lift Type not found' });
      }
      res.status(200).json({ success: true, data: liftType });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
};
  
  const deleteLiftType = async (req, res) => {
    try {
      const { id } = req.params;
      const liftType = await liftTypeService.removeLiftType(id);
      if (!liftType) {
        return res.status(404).json({ success: false, message: 'Period not found' });
      }
      res.status(200).json({ success: true, data: liftType });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  module.exports = {
    getAllLiftTypes,
    getLiftTypeById,
    createLiftType,
    updateLiftType,
    deleteLiftType,
  }; 