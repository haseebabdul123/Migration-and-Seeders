"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "courses",
      [
        {
          course_name: "Maths",
          course_id: "1",
          teacher_id: "1",
          student_id: "5870",
        },
        {
          course_name: "English",
          course_id: "2",
          teacher_id: "2",
          student_id: "5870",
        },
        {
          course_name: "Physics",
          course_id: "3",
          teacher_id: "3",
          student_id: "5860",
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
