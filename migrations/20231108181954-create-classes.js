"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Classes", {
      class_Id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      student_id: {
        type: Sequelize.STRING,
      },
      teacher_id: {
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
    await queryInterface.dropTable("Classes");
  },
};
