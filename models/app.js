// require orm.js to pull file data
const orm = require("../config/orm");

// same functions as defined on orm.js`
// setting orm variables (select, insert, update, delete)
// taking orm functions & adding callback paramter to render id data
const burger = {
  // select
    selectAll: function(cb) {
      orm.selectAll(data => {
        cb(res);
      });
    },

  // insert
    insertOne: function() {

    },
  
  // create
    createOne: function(name, cb) {
      orm.create("burgers", [
        "burger_name", "devoured"
      ], [
        name, false
      ], cb);
    },

  // update
    updateOne: function(id, cb) {
      var condition = "id=" + id;
      orm.update("burgers", {
        devoured: true
      }, condition, cb);
    },

  // delete
    deleteOne: function() {
      
    }
  };

// exporting burger variable as defined above
module.exports = burger;
