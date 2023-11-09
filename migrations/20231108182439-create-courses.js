"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Courses", {
      student_Id: {
        type: Sequelize.STRING,
      },
      course_id: {
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      teacher_id: {
        type: Sequelize.STRING,
      },
      course_name: {
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
    await queryInterface.dropTable("Courses");
  },
};
