// require general
const express = require("express");
const expressHandlebars = require("express-handlebars");

// PORT definition
let PORT = process.env.PORT || 8080;

// express middleware functionality >>>>
var app = express();

// USE for our express routes
server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// RUN our handlebars & variable defined above
// sets default view to our main.handlebars file
server.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));

// SET for use of handlebars and our view engine
server.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/controller");

// calling our use of routes variable
server.use(routes);

// LISTEN for PORT & run function
server.listen(PORT, function() {
    console.log("app listening on port 8080")
});