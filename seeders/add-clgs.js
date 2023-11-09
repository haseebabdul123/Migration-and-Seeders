"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "collages",
      [
        {
          collage_name: "Peace",
          collage_id: "1",
          collage_branch: "Mardan",
        },
        {
          collage_name: "Peace",
          collage_id: "2",
          collage_branch: "Nowshera",
        },
        {
          collage_name: "Peace",
          collage_id: "3",
          collage_branch: "Hakimabad",
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
