'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('desenvolvedoras', [
      {
        nome: 'Studio Wildcard',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'SCS Software',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Avalanche Software',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'FromSoftware Inc.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Santa Monica Studio',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Rockstar North',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Team Cherry',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('desenvolvedoras', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });

  }
};
