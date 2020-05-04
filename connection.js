const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'smarkio'
});

connection.connect((err) => {
  if (!err) {
    console.log('connection success!!!');
  } else {
    console.log('failed to connect!!!',err);
  }
});
module.exports = connection;
