// require express & router
const express = require("express");
const router = express.Router();
// connect to app.js
const burger = require("../models/app")

// define all routers (get, put, post - one each) >>>>

// get (get all)
router.get("/burgers", function (req, res) {
  burger.selectAll(function (data) {
    // set new variable for table data
    let x = {
      burgers: data
    };
    // render index & new variable
    res.render('index', x)
  });
});

// post (add)
router.post("/burgers/create", function (req, res) {
  // calling string data from table
  burger.insertOne(
    [
      'burger_name',
    ],
    [
      req.body.burger_name(),
    ],
    // operating function
    function (data) {
      // return status
      res.sendStatus(200);
    });
});

// put (update)
router.put("/burgers/:id", function (req, res) {
  // setting params for new variable
  let x = req.params.id;
  burger.updateOne(
    // set UpdateOne status
    {
      eaten: true
    },
    // calling data in new function for variable x
    x, function (data) {
      // return status
      res.sendStatus(200);
    }
  );
});

// delete (delete selected)
router.delete('/burgers/:id', function (req, res) {
  // setting params for new variable
  let x = req.params.id;
  // calling data in new function for variable x
  burger.deleteOne(id, function (data) {
    // return status
    res.sendStatus(200);
  })
});

module.exports = router;





