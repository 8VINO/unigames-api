'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jogos',
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

        descricao: {
          type: Sequelize.TEXT,
          allowNull: false,
        },

        ano_lancamento: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },

        preco: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
        },

        imagem: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        desenvolvedora_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'desenvolvedoras', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
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

    await queryInterface.dropTable('jogos');

  }
};
