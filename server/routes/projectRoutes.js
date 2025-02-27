const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/projectController');

router.get('/', ProjectController.getAll);      // Get all projects
router.post('/', ProjectController.create);     // Create a new project

module.exports = router;
