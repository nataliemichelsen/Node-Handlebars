// require connection.js
const connection = require("./connection");

// 
const orm = {
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // insert
  insertOne: function () {
    let querySearch = "INSERT INTO burgers"
    connection.query(
      querySearch,
      function(err, data) {
        if (err) throw err;
        cb(data)
      }
    )
  },

// update
updateOne: function () {
    let querySearch = "UPDATE burgers"
    connection.query(
      querySearch,
      function(err, data) {
        if (err) throw err;
        cb(data)
      }
    )
  },

// delete
deleteOne: function () {
    let querySearch = "DELETE FROM burgers"
    connection.query(
      querySearch,
      function(err, data) {
        if (err) throw err;
        cb(data)
      }
    )
  },

// exporting orm variable as defined above
module.exports = orm;
