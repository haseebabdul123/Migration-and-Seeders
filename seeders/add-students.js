"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "students",
      [
        {
          collage_id: "1",
          student_id: "5870",
          student_name: "HAseeb",
          student_add: "Risalpur",
          student_mobile: "031456774",
          student_class: "10",
        },
        {
          collage_id: "3",
          student_id: "5860",
          student_name: "hassan",
          student_add: "Mardan",
          student_mobile: "031456774",
          class_id: "7",
        },
        {
          collage_id: "1",
          student_id: "5850",
          student_name: "Khan",
          student_add: "Nowshera",
          student_mobile: "031456774",
          class_id: "10",
        },
        {
          collage_id: "2",
          student_id: "5840",
          student_name: "Ahsan",
          student_add: "Risalpur",
          student_mobile: "031456743",
          class_id: "6",
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
