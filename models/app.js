// require orm.js to pull file data
const orm = require("../config/orm.js");

// same functions as defined on orm.js
// setting orm variables (select, insert, update, delete)
// taking orm functions & adding callback paramter to render id data
const burger = {

    // get
    all: cb => {
        orm.selectAll(res => cb(res));
    },

    // post
    add: (name, cb) => {
        orm.insertOne([name], res => cb(res));
    },

    // put
    update: (id, cb) => {
        orm.updateOne([id], res => cb(res));    
    },

    // delete
    delete: (id, cb) => {
        orm.deleteOne([id], res => cb(res));
    }

};

// exporting burger variable as defined above
module.exports = burger;