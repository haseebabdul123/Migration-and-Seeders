"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Students.init(
    {
      collage_Id: DataTypes.STRING,
      student_id: DataTypes.STRING,
      student_name: DataTypes.STRING,
      student_add: DataTypes.STRING,
      student_mobile: DataTypes.STRING,
      class_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Students",
    }
  );
  return Students;
};
