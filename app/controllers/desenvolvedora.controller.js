import * as desenvolvedoraService from '../services/desenvolvedora.service.js';
import { validarId } from '../utils/validacao.utils.js';

export const cadastrarDesenvolvedora = async (req, res) => {
    try {

        const novaDesenvolvedora = await desenvolvedoraService.cadastrarDesenvolvedora(req.body);

        return res.status(201).json(novaDesenvolvedora);

    } catch (error) {

        if (error.message === 'CONFLITO_DADOS') {
            return res.status(409).json({ erro: "Dados já cadastrados." });
        };

        return res.status(500).json({ erro: "Erro interno ao cadastrar desenvolvedora." });

    }
};

export const atualizarDesenvolvedora = async (req, res) => {
    try {

        const id = Number(req.params.id);

        if (!validarId(id)) {
            return res.status(400).json({ erro: "ID inválido." });
        };

        const desenvolvedoraAtualizada = await desenvolvedoraService.atualizarDesenvolvedora(id, req.body);

        return res.status(200).json(desenvolvedoraAtualizada);

    } catch (error) {

        if (error.message === 'DESENVOLVEDORA_NAO_ENCONTRADA') {
            return res.status(404).json({ erro: "Desenvolvedora não encontrada." });
        };
        if (error.message === 'CONFLITO_DADOS') {
            return res.status(409).json({ erro: "Dados já cadastrados." });
        };

        return res.status(500).json({ erro: "Erro interno ao atualizar desenvolvedora." });
    }
};

export const listarDesenvolvedoras = async (req, res) => {
    try {

        const desenvolvedoras = await desenvolvedoraService.listarDesenvolvedoras();
        return res.status(200).json(desenvolvedoras);

    } catch (error) {
        return res.status(500).json({ erro: "Erro ao listar desenvolvedoras." });
    }
};

export const listarDesenvolvedoraId = async (req, res) => {
    try {

        const id = Number(req.params.id);

        if (!validarId(id)) {
            return res.status(400).json({ erro: "ID inválido." });
        }

        const desenvolvedora = await desenvolvedoraService.listarDesenvolvedoraId(id);
        return res.status(200).json(desenvolvedora);

    } catch (error) {
        if (error.message === 'DESENVOLVEDORA_NAO_ENCONTRADA') {
            return res.status(404).json({ erro: "Desenvolvedora não encontrada." });
        }
        return res.status(500).json({ erro: "Erro ao listar desenvolvedora por ID." });
    }
};

export const deletarDesenvolvedora = async (req, res) => {
    try {

        const id = Number(req.params.id);

        if (!validarId(id)) {
            return res.status(400).json({ erro: "ID inválido." });
        }

        await desenvolvedoraService.deletarDesenvolvedora(id);

        return res.status(204).send();

    } catch (error) {
        if (error.message === 'DESENVOLVEDORA_NAO_ENCONTRADA') {
            return res.status(404).json({ erro: "Desenvolvedora não encontrada." });
        };
        return res.status(500).json({ erro: "Erro ao deletar desenvolvedora." });
    }
};