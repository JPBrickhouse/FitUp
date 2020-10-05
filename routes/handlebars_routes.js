const { Router } = require("express");
// *********************************************************************************
// handelbars_routes.js - this file offers a set of routes
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express")
var router = express.Router();

// Routes
// =============================================================
router.get("/", function(req, res) {
  res.render("index");
});

module.exports = router;
