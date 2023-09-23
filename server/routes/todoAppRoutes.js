const express = require('express');
const { showAllTodos, createTodo, deleteTodoById } = require('../controllers/todoAppController');

const router = express.Router();

//routes

router.get('/', showAllTodos);
router.post('/create', createTodo);
router.delete('/:id', deleteTodoById);
// router.get('/todo/:id', getById);
// router.put('/todo/:id', updateTodo);
module.exports = router;
