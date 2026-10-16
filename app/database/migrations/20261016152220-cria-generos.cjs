'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('generos',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },

        nome: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },

        created_at: {
          allowNull: false,
          type: Sequelize.DATE
        },

        updated_at: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('generos');

  }
};
