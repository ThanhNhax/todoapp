const express = require('express');
const UserController = require('../controllers/usersController')
const router = express.Router();

/* GET users listing. */
router.post('/register', UserController.register);
router.post('/login', UserController.login);

module.exports = router;
