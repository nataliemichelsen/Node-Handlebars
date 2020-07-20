// connection.mysql connect
const mysql = require("mysql");

// connection to JAWSDB on heroku
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: "password",
        database: 'burger_db'
    });
}

// connect to the mysql server and sql database
// arrow function used for better functionality
connection.connect(err => {
    if (err) throw err;
});

// setting module.exports connection
module.exports = connection;