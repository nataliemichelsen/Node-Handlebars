// require general
const path = require("path");
const express = require("express");
// connect express handlebars for easy use of partials
const expressHandlebars = require("express-handlebars");

// PORT definition
let PORT = process.env.PORT || 8080;

// express middleware functionality >>>>
let app = express();

// USE for our express routes
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// RUN our handlebars & variable defined above
// sets default view to our main.handlebars file
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));

// SET for use of handlebars and our view engine
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/controller.js");

// calling our use of routes variable
app.use(routes);

// LISTEN for PORT & run function
app.listen(PORT, function() {
    console.log("app listening on port 8080")
});