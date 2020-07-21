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
  insertOne: function (burgers, nameValue, cb) {
    orm.insertOne(burgers, nameValue, function (res) {
      cb(res);
    });
  },

  // update
  updateOne: function (val, id, cb) {
    let eaten = val.eaten;
    orm.updateOne(eaten, id, function (results) {
      cb(results);
    });
  },

  // delete
  deleteOne: function (id, cb) {
    orm.deleteOne(id, (confirm) => {
      cb(confirm);
    });
  },
};

// exporting burger variable as defined above
module.exports = burger;
