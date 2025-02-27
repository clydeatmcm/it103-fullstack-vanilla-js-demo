const express = require('express');
const router = express.Router();
const StatusController = require('../controllers/statusController');

router.get('/', StatusController.getAll);       // Get all task statuses

module.exports = router;
