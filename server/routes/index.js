const express = require('express');
const router = express.Router();
const { showAllTodos } = require('../controllers/todoController');

/* GET home page. */
router.get('', showAllTodos);


module.exports = router;
