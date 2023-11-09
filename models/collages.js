"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Collages extends Model {
    static associate(models) {
      // define association here
    }
  }
  Collages.init(
    {
      collage_name: DataTypes.STRING,
      collage_id: DataTypes.STRING,
      collage_branch: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "collages",
    }
  );

  return Collages;
};
