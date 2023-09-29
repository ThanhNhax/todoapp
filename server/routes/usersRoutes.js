const express = require('express');
const UserController = require('../controllers/usersController')
const router = express.Router();

/* GET users listing. */
router.get('/', UserController.createUser);
router.post('/', UserController.createUser);

module.exports = router;
