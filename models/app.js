// require orm.js to pull file data
const orm = require("../config/orm");

// same functions as defined on orm.js`
// setting orm variables (select, insert, update, delete)
// taking orm functions & adding callback paramter to render id data
var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    create: function(name, cb) {
      orm.create("burgers", [
        "burger_name", "devoured"
      ], [
        name, false
      ], cb);
    },
    update: function(id, cb) {
      var condition = "id=" + id;
      orm.update("burgers", {
        devoured: true
      }, condition, cb);
    }
  };

// exporting burger variable as defined above
module.exports = burger;
