var express = require('express');
const { showAllTodos } = require('../controllers/todoController');
var router = express.Router();

/* GET users listing. */
router.get('/', showAllTodos);

module.exports = router;
