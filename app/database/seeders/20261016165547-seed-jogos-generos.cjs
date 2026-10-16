'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('jogos_generos', [
      {
        jogo_id: 1,
        genero_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        jogo_id: 1,
        genero_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        jogo_id: 1,
        genero_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        jogo_id: 1,
        genero_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        jogo_id: 2,
        genero_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        jogo_id: 2,
        genero_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        jogo_id: 3,
        genero_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        jogo_id: 3,
        genero_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        jogo_id: 3,
        genero_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jogos_generos', null, {});
  }
};