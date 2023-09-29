const db = require('../db/database');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class usersController {
  createUser(req, res) {
    const { username, password } = req.body;
    //  hash: bam cai password ra
    bcrypt.hash(password, saltRounds, (err, hash) => {
      // Store hash in your password DB.
      if (err) return res.status(500).json({ error: err });
    // query : db để tạo users 
      const q = `insert into users(userName, password) values('${username}','${hash}')`;
      db.query(q, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        return res.status(200).json({ result,message:"Created successfully!" });
      });
    });
  }
}

module.exports = new usersController();
