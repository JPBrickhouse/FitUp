// *********************************************************************************
// handelbars_routes.js - this file offers a set of routes
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express")
var router = express.Router();

// Requiring the models
var db = require("../models");

// Routes
// =============================================================
router.get("/", async function (req, res) {
  var gettingBurgers = await db.sequelize.query("SELECT * FROM burgers");
  // console.log(gettingBurgers);

  finalArray = []
  for (var i = 0; i < gettingBurgers.length; i++) {
    finalArray.push(gettingBurgers[0][i])
  }

  console.log(finalArray)

  res.render("index",{burgers:finalArray});
});

module.exports = router;
