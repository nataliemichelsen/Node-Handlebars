// require
const connection = require("../config/connection");

// set orm variable to convert data between languages
// set parameters for all options (select, insert, update, delete)
const orm = {
    
    // select
    selectAll: (config) => {
        const queryString = "SELECT * FROM burgers;";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            config(result);
        });
    },

    // insert
    insertOne: (input, config) => {
        const queryString = `INSERT INTO burgers (burger_name) VALUES (?);`;
        connection.query(queryString, input, (err, result) => {
            if (err) throw err;
            config(result);
        });
    },

    // update
    updateOne: (input, config) => {
        const queryString = `UPDATE burgers SET devoured = true WHERE id = ?;`;
        connection.query(queryString, input, (err, result) => {
            if (err) throw err;
            config(result);
        });
    },

    // delete
    deleteOne: (input, config) => {
        const queryString = `DELETE FROM burgers WHERE id = ?`;
        connection.query(queryString, input, (err, result) => {
            if (err) throw err;
            config(result);
        });
    }
};

// setting module.exports for orm
module.exports = orm;