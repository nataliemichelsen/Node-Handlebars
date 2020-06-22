// connection.mysql connect
const mysql = require("mysql");

// create connection with root info
// use process.env instead of "regular" way bc we are using a local port
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
});

// connection to JAWSDB on heroku
// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     host: "localhost"
//         port: 3306
//             user: "root"
//                 password: "1234"
//                     database: "burger_db"
// }

// var del = connection._protocol._delegateError;
// connection._protocol._delegateError = function(err, sequence){
//   if (err.fatal) {
//     console.trace('fatal error: ' + err.message);
//   }
//   return del.call(this, err, sequence);
// };

// connect to the mysql server and sql database
// arrow function used for better functionality
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

// setting module.exports connection
module.exports = connection;