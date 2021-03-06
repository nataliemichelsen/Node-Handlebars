// require connection.js
const connection = require("./connection");

// 
const orm = {
  selectAll: function (cb) {
    let queryString = "SELECT * FROM burgers";
    connection.query(
      querySearch,
      function (err, data) {
        if (err) throw err;
        cb(data);
      }
    );
  },

  // insert
  insertOne: function (col, val, cb) {
    let querySearch = `INSERT INTO burgers (${col}) VALUES (?)`;
    connection.query(
      querySearch,
      val,
      function (err, data) {
        if (err) throw err;
        cb(data);
      }
    );
  },

  // update
  updateOne: function (val, id, cb) {
    let querySearch = `UPDATE burgers SET devoured=${val} WHERE id = ${id}`;
    connection.query(
      querySearch,
      function (err, data) {
        if (err) throw err;
        cb(data);
      }
    );
  },

  // delete
  deleteOne: function (id, cb) {
    let querySearch = `DELETE FROM burgers WHERE id=${id}`;
    connection.query(
      querySearch,
      function (err, data) {
        if (err) throw err;
        cb(data);
      }
    );
  }
}

// exporting orm variable as defined above
module.exports = orm;
