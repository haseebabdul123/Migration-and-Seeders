"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Students", {
      collage_Id: {
        type: Sequelize.STRING,
      },
      student_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      student_name: {
        type: Sequelize.STRING,
      },
      student_add: {
        type: Sequelize.STRING,
      },
      student_mobile: {
        type: Sequelize.STRING,
      },
      class_id: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Students");
  },
};
