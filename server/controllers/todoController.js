const db = require('../db/database');

// CREATE DB

exports.createDB = (req, res) => {
  const query = 'CREATE DATABASE todolist';
  db.query(query, (error, db) => {
    if (error) return res.status(500).json({ error });
    return res.status(201).json('DB created');
  });
};

// create table
exports.createTable = (req, res) => {
  let q =
    'create table todos(id int auto_increment,first_name varchar(255),last_name varchar(255), primary key(id))';
  db.query(q, (error) => {
    if (error) return res.status(500).json({ error });
    return res.status(200).json('Table created');
  });
};

// create table
exports.createTodo = (req, res) => {
  const { firstName, lastName } = req.body;
  // truyen firstName, lastName thi nho cho vao dai '' chuyen kieu varchar trong mysql
  //   let q = `INSERT INTO todos (first_name, last_name)
  //             VALUES('${first_name}','${last_name}')`;

  const q = `INSERT INTO todos SET ?`;
  db.query(q, { first_name: firstName, last_name: lastName }, (error) => {
    if (error) return res.status(500).json({ error });
    return res.status(200).json('INSERT INTO successfully!');
  });
};

// show all todos

exports.showAllTodos = (req, res) => {
  const q = 'SELECT * FROM todos';
  db.query(q, (error, data) => {
    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  });
};

//get todo by id

exports.getById = (req, res) => {
  const q = `SELECT * FROM  todos WHERE id = ${req.params.id}`;
  db.query(q, (error, data) => {
    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  });
};

// update todos with
exports.updateTodo = (req, res) => {
  const { firstName, lastName } = req.body;
  const q = ` UPDATE todos
              SET first_name = '${firstName}', last_name = '${lastName}'
              WHERE id = ${req.params.id};
            `;
  db.query(q, (error, data) => {
    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  });
};

// delete todo by id
exports.deleteTodoById = (req, res) => {
  const { id } = req.params;
  const q = `DELETE FROM todos
  WHERE id = ${id};`;
  db.query(q, (error, data) => {
    if (error) return res.status(500).json({ error });
    return res.status(200).json({ ...data, message: 'deleted successfully' });
  });
};
