const express = require('express');
const { createDB, createTable, createTodo, showAllTodos, getById, updateTodo, deleteTodoById  } = require('../controllers/todoController');
const router = express.Router();

//routes
router.get('/create/database', createDB);
router.get('/create/table', createTable);
router.post('/create/todo', createTodo);
router.get('/show/todos', showAllTodos);
router.get('/todo/:id', getById);
router.put('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodoById);
module.exports = router;
