module.exports = function (sequelize, DataTypes) {
  const Exercise = sequelize.define("Exercise",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      location: {
        type: DataTypes.STRING
      },
      category: {
        type: DataTypes.STRING
      },
      exercise: {
        type: DataTypes.STRING
      },
    },
    { timestamps: false } // This ensures that createdAt and updatedAt aren't used
  );
  return Exercise;
};