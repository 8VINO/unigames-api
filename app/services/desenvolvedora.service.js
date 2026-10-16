import { Op } from 'sequelize';
import db from '../config/sequelize.config.js';
const { Desenvolvedora } = db;

export const cadastrarDesenvolvedora = async (dados) => {

    const { nome } = dados;

    const desenvolvedoraCadastrada = await Desenvolvedora.findOne({ where: { nome } });

    if (desenvolvedoraCadastrada) {
        throw new Error('CONFLITO_DADOS');
    };

    const novaDesenvolvedora = await Desenvolvedora.create({ nome });

    return novaDesenvolvedora;
};

export const atualizarDesenvolvedora = async (id, dados) => {
    const { nome } = dados;

    const desenvolvedora = await Desenvolvedora.findByPk(id);

    if (!desenvolvedora) {
        throw new Error('DESENVOLVEDORA_NAO_ENCONTRADA');
    };

    const desenvolvedoraCadastrada = await Desenvolvedora.findOne({
        where: {
            nome,
            id: { [Op.ne]: id }
        }
    });

    if (desenvolvedoraCadastrada) {
        throw new Error('CONFLITO_DADOS');
    };

    await desenvolvedora.update({
        ...(nome && { nome })
    });

    return desenvolvedora;
};

export const listarDesenvolvedoras = async () => {
    return await Desenvolvedora.findAll();
};

export const listarDesenvolvedoraId = async (id) => {
    const desenvolvedora = await Desenvolvedora.findOne({
        where: { id }
    });

    if (!desenvolvedora) {
        throw new Error('DESENVOLVEDORA_NAO_ENCONTRADA');
    }

    return desenvolvedora;
};

export const deletarDesenvolvedora = async (id) => {
    const desenvolvedora = await Desenvolvedora.findByPk(id);

    if (!desenvolvedora) {
        throw new Error('DESENVOLVEDORA_NAO_ENCONTRADA');
    }

    await desenvolvedora.destroy();

};