const { Op } = require("sequelize");

const db = require("../models");

module.exports = function (app) {

    // Get all of the exercises that match the location and category
    app.get("/api/exerciselist", function (req, res) {

        // Using sequelize
        db.Exercise.findAll({
            where: {
                [Op.or]: [
                    { location: req.query.location },
                    { location: "both" }
                ],
                category: req.query.category
            }
        }).then(function (exercises) {
            res.json(exercises)
        })
    })

}

