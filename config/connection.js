// connection.mysql connect
const mysql = require("mysql");

// create connection with root info
// use process.env instead of "regular" way bc we are using a local port
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "burgers_db"
}

// connect to the mysql server and sql database
// arrow function used for better functionality
connection.connect((err) => {
    if (err) {
        return
    }
  });

// setting module.exports connection
  module.exports = connection;