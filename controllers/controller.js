// require express & router
const express = require("express");
const router = express.Router();
// connect to app.js
const burger = require("../models/app")

// define all routers (get, put, post - one each) >>>>

// get (get all)
router.get("/burgers", function(req, res) {
  burger.selectAll(function(data) {
    
    });
  });

// put (update)
router.put("/burgers/:id", function(req, res) {
  // setting params for new variable
    let x = req.params.id;
    burger.updateOne(
      // set UpdateOne status
      {
        eaten: true
      },
      // calling data in new function for variable x
      x, function(data) {
        // return status
        res.sendStatus(200);
      }
    );
  });

// post (add)
router.post("/burgers/create", function(req, res) {

  });

// delete (delete selected)
router.delete()
module.exports = router;





