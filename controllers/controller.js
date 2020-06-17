// require express & router
const express = require("express");
var router = express.Router();
// connect to app.js
const burger = require("../models/app")

// define all routers (get, put, post, delete - one each) >>>>

// get (all)
// no body, just data
// no need to define error status or reference api
router.get("/", (req, res) => {
    burger.all(data => res.render("index", { burgers: data }));
});

// put (update)
// using body.id for 
// setting 404 or 200 statuses for potential user errors
router.put("/api/", (req, res) => {
    burger.update(req.body.id, result => result.changedRows === 0 ? res.status(404).end() : res.status(200).end());
});

// post (add)
// using body.name for 
// no need to define error status
router.post("/api/", (req, res) => {
    burger.add(req.body.name, result => res.json({ id: result.insertId }));
});

// delete
// using body.id for 
// setting 404 or 200 statuses for potential user errors
router.delete("/api/", (req, res) => {
    burger.delete(req.body.id, result => result.affectedRows === 0 ? res.status(404).end() : res.status(200).end());
});

module.exports = router;