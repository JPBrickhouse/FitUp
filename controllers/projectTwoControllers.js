const { Op } = require("sequelize");

const db = require("../models");

module.exports = function (app) {
    // ---------------------------------------------------------------------------
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
    // ---------------------------------------------------------------------------
    // Get all the grouped exercises (as one workout) based on ID
    app.get("/api/workoutList", function (req, res) {
        // Using sequelize
        db.Exercise.findAll({
            where: {
                id: req.query.id
            }
        }).then(function (exercise) {
            res.send(exercise)
        })
    })
    // ---------------------------------------------------------------------------
    // Store all the grouped exercises as one workout
    app.post("/api/saveworkout", function (req, res) {
        // Using sequelize
        db.Storedworkout.create({
            userid: req.body.userid,
            email: req.body.email,
            workout: req.body.workout
        }).then(() => {
            res.status(200)
        }).catch(err => {
            res.status(401).json(err);
        });
    })
    // ---------------------------------------------------------------------------
    // Get all of the users saved workouts
    app.get("/api/getfullworkouts", function (req, res) {
        // Using sequelize
        db.Storedworkout.findAll({
            where: {
                userid: req.query.userid
            }
        }).then(function (workouts) {
            res.send(workouts)
        });
    })
    // ---------------------------------------------------------------------------
}