const express = require('express');
const liftTypeController = require('../controllers/liftTypeController');

const router = express.Router();

router.get('/', liftTypeController.getAllLiftTypes);
router.get('/:id', liftTypeController.getLiftTypeById);
router.post('/', liftTypeController.createLiftType);
router.put('/:id', liftTypeController.updateLiftType);
router.delete('/:id', liftTypeController.deleteLiftType);

module.exports = router;
