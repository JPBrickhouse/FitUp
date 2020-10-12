module.exports = function (sequelize, DataTypes) {
  const Storedworkout = sequelize.define("Storedworkout",
    {
      workoutid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userid: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      workout: {
        type: DataTypes.JSON,
        allowNull: false
      },
    }
  );
  return Storedworkout;
};