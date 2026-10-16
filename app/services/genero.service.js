import { Op } from 'sequelize';
import db from '../config/sequelize.config.js';
const { Genero } = db;

export const cadastrarGenero = async (dados) => {

    const { nome } = dados;

    const generoCadastrado = await Genero.findOne({ where: { nome } });

    if (generoCadastrado) {
        throw new Error('CONFLITO_DADOS');
    };

    const novoGenero = await Genero.create({ nome });

    return novoGenero;
};

export const atualizarGenero = async (id, dados) => {
    const { nome } = dados;

    const genero = await Genero.findByPk(id);

    if (!genero) {
        throw new Error('GENERO_NAO_ENCONTRADO');
    };

    const generoCadastrado = await Genero.findOne({
        where: {
            nome,
            id: { [Op.ne]: id }
        }
    });

    if (generoCadastrado) {
        throw new Error('CONFLITO_DADOS');
    };

    await genero.update({
        ...(nome && { nome })
    });

    return genero;
};

export const listarGeneros = async () => {
    return await Genero.findAll();
};

export const listarGeneroId = async (id) => {
    const genero = await Genero.findOne({
        where: { id }
    });

    if (!genero) {
        throw new Error('GENERO_NAO_ENCONTRADO');
    }

    return genero;
};

export const deletarGenero = async (id) => {
    const genero = await Genero.findByPk(id);

    if (!genero) {
        throw new Error('GENERO_NAO_ENCONTRADO');
    }

    await genero.destroy();

};