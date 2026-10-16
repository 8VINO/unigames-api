import { DataTypes } from "sequelize";

const genero = (sequelize) => {
    return sequelize.define('Genero', {
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
        }
    }, {
        tableName: 'generos',
        timestamps: true,
        underscored: true
    });
};

export default genero;