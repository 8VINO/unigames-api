import { DataTypes } from "sequelize";

const desenvolvedora = (sequelize) => {
    return sequelize.define('Desenvolvedora', {
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
        tableName: 'desenvolvedoras',
        timestamps: true,
        underscored: true
    });
};

export default desenvolvedora;