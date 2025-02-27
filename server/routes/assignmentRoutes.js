const express = require('express');
const router = express.Router();
const AssignmentController = require('../controllers/assignmentController');

router.get('/', AssignmentController.getAll);
router.post('/', AssignmentController.assignTask);  // Assign a task to a user

module.exports = router;
