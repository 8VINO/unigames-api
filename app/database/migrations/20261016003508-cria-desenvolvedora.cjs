'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('desenvolvedoras',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },

        nome: {
          type: Sequelize.STRING,
          allowNull: false
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

    await queryInterface.dropTable('desenvolvedoras');

  }
};
