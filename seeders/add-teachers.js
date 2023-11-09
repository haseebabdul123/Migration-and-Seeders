"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "teachers",
      [
        {
          class_id: "6",
          teacher_id: "1",
          course_id: "1",
          teacher_name: "Ahmad",
        },
        {
          class_id: "10",
          teacher_id: "2",
          course_id: "2",
          teacher_name: "Alam Zeb",
        },
        {
          class_id: "7",
          teacher_id: "3",
          course_id: "3",
          teacher_name: "Nasir",
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
