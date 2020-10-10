const router = require("express").Router();
const db = require("../../models");
const { Server } = require("http");


router.post("/api/saveworkout", (req, res) => {
    db.Saved.create({ savedRandom: req.body })
        .then(data => {
            res.json(data)
        })

})

module.exports = router
