const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

router.get('/', TaskController.getAll);         // Get all tasks
router.post('/', TaskController.create);        // Create a new task
router.put('/:id', TaskController.update);      // Update a task by ID
router.delete('/:id', TaskController.delete);   // Delete a task by ID

module.exports = router;
