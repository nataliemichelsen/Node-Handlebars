// require connection.js
const connection = require("./connection");

// 
const orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

// insert
insertOne: function() {
  let querySearch
}

// update
updateOne: function() {

}

// delete
deleteOne: function() {

}

// exporting orm variable as defined above
module.exports = orm;
