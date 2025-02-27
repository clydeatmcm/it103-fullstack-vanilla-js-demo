const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', UserController.getAll);         // Get all users
router.post('/', UserController.create);        // Create a new user

module.exports = router;
