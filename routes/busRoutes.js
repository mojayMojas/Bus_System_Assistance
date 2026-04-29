const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController');

// Get all bus schedules
router.get('/schedules', busController.getAllSchedules);

// Get schedule by bus number
router.get('/schedules/:busNumber', busController.getScheduleByBusNumber);

// Add new bus schedule
router.post('/schedules', busController.addBusSchedule);

// Update seats after reservation
router.patch('/schedules/:busNumber/seats', busController.updateSeats);

module.exports = router;
