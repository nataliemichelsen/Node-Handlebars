// require express & router
const express = require("express");
const router = express.Router();
// connect to app.js
const burger = require("../models/app")

// define all routers (get, put, post - one each) >>>>

// get route -> index (all)
// no body, just data
// no need to define error status or reference api
router.get("/", function(req, res) {
    res.redirect("/burgers");
  });
  
  router.get("/burgers", function(req, res) {
    // express callback response by calling burger.selectAllBurger
    burger.all(function(burgerData) {
      // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
      res.render("index", { burger_name: burgerData });
    });
  });

// put route -> back to index (update)
// using body.id for 
// setting 404 or 200 statuses for potential user errors
router.put("/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
      // wrapper for orm.js that using MySQL update callback will return a log to console,
      // render back to index with handle
      console.log(result);
      // Send back response and let page reload from .then in Ajax
      res.sendStatus(200);
    });
  });

// post route -> back to index (add)
// using body.name for 
// no need to define error status
router.post("/burgers/create", function(req, res) {
    // takes the request object using it as input for burger.addBurger
    burger.create(req.body.burger_name, function(result) {
      // wrapper for orm.js that using MySQL insert callback will return a log to console,
      // render back to index with handle
      console.log(result);
      res.redirect("/");
    });
  });

module.exports = router;





