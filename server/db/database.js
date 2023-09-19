const mysql = require('mysql2');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"123456",
    database:'todolist'
});

// open the mysql connection
db.connect((err) => {
  if (err) console.log('Ket noi CSDL khong thanh cong');
  else console.log('Connected');
});

module.exports = db;
