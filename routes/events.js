const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventsController');

router.get('/', eventController.getAllEvents);
router.post('/', eventController.createEvent);

module.exports = router;