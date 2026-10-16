import { DataTypes } from "sequelize";

const jogo = (sequelize) => {
    return sequelize.define('Jogo', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },

        descricao: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        ano_lancamento: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        preco: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },

        imagem: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'jogos',
        timestamps: true,
        underscored: true
    });
};

export default jogo;