// require orm.js to pull file data
const orm = require("../config/orm");

// same functions as defined on orm.js`
// setting orm variables (select, insert, update, delete)
// taking orm functions & adding callback paramter to render id data
const burger = {
  // select
  selectAll: function (cb) {
    orm.selectAll(data => {
      cb(res);
    });
  },

  // insert
  insertOne: function () {
    orm.insertOne(burgers, nameVal, function (res) {
      cb(res);
    });
  },

  // update
  updateOne: function (id, cb) {
    let eaten = val.eaten;
    orm.updateOne(eaten, id, function (results) {
      cb(results);
    });
  },

  // delete
  deleteOne: function () {
    orm.deleteOne(id, (confirm) => {
      cb(confirm);
    });
  },
};

// exporting burger variable as defined above
module.exports = burger;
