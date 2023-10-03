const db = require('../db/database');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const secretKey = 'thanhnhaxngulam';

class AuthController {
  register(req, res) {
    const { email, password, name } = req.body;
    //  hash: bam cai password ra
    bcrypt.hash(password, saltRounds, (err, hash) => {
      // Store hash in your password DB.
      if (err) return res.status(500).json({ error: err });
      // query : db để tạo users
      const q = `insert into users(email, password,name) values('${email}','${hash}','${name}')`;
      db.query(q, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        return res
          .status(200)
          .json({ result, message: 'Created successfully!' });
      });
    });
  }

  login(req, res) {
    const { email, password } = req.body;
    //hash password

    //query db
    const q = `select * from users
    where email = '${email}'`;
    db.query(q, (err, result) => {
      if (err) return res.status(404).json({ error: err });
      // console.log(result[0].password)
      // check password
      if (result[0] === undefined)
        return res.status(400).json({ error: ' Acount not found! ' });
      bcrypt.compare(password, result[0].password, (err, data) => {
        if (err) return res.status(500).json({ error: err });
        if (data) {
          //tao ra ma jwt
          const payload = 'thanhnha';
          const token = jwt.sign(payload, secretKey);
          return res.status(200).json({ token, email: result[0].email });
        }
      });
    });
  }
}

module.exports = new AuthController();
