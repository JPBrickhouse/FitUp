module.exports = function (sequelize, DataTypes) {
    const Saved = sequelize.define("savedworkout", {

        savedRandom: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Saved;
};