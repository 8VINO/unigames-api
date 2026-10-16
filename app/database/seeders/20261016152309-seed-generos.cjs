'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('generos', [
      {
        nome: 'Ação',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Aventura',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Indie',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Multijogador',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'RPG',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Simulação',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('generos', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });

  }
};
