const mysql = require('../../mysqlConnect');

function getRestaurant(req, res) {
  let query = 'SELECT * FROM RESTAURANT';
  mysql.query(query, (err, result) => {
    if (err) throw err;
    res.status(200).json({ message: 'Ok .', data: result });
  });
}

exports.getRestaurant = getRestaurant;
