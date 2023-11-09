"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "classes",
      [
        {
          class_id: "7",
          student_id: "5860",
          teacher_id: "1",
        },
        {
          class_id: "10",
          student_id: "5870",
          teacher_id: "2",
        },
        {
          class_id: "6",
          student_id: "5840",
          teacher_id: "3",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
