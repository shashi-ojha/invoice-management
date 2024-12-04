const periodService = require("../services/periodService");

const getAllPeroids = async (req, res) => {
    try {
      const periods = await periodService.fetchAllPeriods();
      res.status(200).json({ success: true, data: periods });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  const getPeriodById = async (req, res) => {
    try {
      const { id } = req.params;
      const period = await periodService.fetchPeriodById(id);
      if(!period) {
        return res.status(404).json({ success: false, message: "Period not founds" });
      }
      res.status(200).json({ success: true, data: period });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

const createPeriod = async (req, res) => {
    try {
        const period = await periodService.addPeriod(req.body);
        res.status(201).json({ success: true, data: period})
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const updatePeriod = async (req, res) => {
    try {
      const { id } = req.params;
      const period = await periodService.modifyPeriod(id, req.body);
      if (!period) {
        return res.status(404).json({ success: false, message: 'Period not found' });
      }
      res.status(200).json({ success: true, data: period });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  const deletePeriod = async (req, res) => {
    try {
      const { id } = req.params;
      const period = await periodService.removePeriod(id);
      if (!period) {
        return res.status(404).json({ success: false, message: 'Period not found' });
      }
      res.status(200).json({ success: true, data: period });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  module.exports = {
    getAllPeroids,
    getPeriodById,
    createPeriod,
    updatePeriod,
    deletePeriod,
  }; 