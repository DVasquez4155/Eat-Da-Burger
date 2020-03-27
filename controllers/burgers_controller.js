var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    res.render("index");
});
burger.all(result => {
    console.log(result)
})
// Export routes for server.js to use.
module.exports = router;