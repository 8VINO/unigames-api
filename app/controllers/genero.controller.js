import * as generoService from '../services/genero.service.js';
import { validarId } from '../utils/validacao.utils.js';

export const cadastrarGenero = async (req, res) => {
    try {

        const novoGenero = await generoService.cadastrarGenero(req.body);

        return res.status(201).json(novoGenero);

    } catch (error) {

        if (error.message === 'CONFLITO_DADOS') {
            return res.status(409).json({ erro: "Gênero já cadastrado." });
        };

        return res.status(500).json({ erro: "Erro interno ao cadastrar gênero." });

    }
};

export const atualizarGenero = async (req, res) => {
    try {

        const id = Number(req.params.id);

        if (!validarId(id)) {
            return res.status(400).json({ erro: "ID inválido." });
        };

        const generoAtualizado = await generoService.atualizarGenero(id, req.body);

        return res.status(200).json(generoAtualizado);

    } catch (error) {

        if (error.message === 'GENERO_NAO_ENCONTRADO') {
            return res.status(404).json({ erro: "Gênero não encontrado." });
        };
        if (error.message === 'CONFLITO_DADOS') {
            return res.status(409).json({ erro: "Gênero já cadastrado." });
        };

        return res.status(500).json({ erro: "Erro interno ao atualizar gênero." });
    }
};

export const listarGeneros = async (req, res) => {
    try {

        const generos = await generoService.listarGeneros();
        return res.status(200).json(generos);

    } catch (error) {
        return res.status(500).json({ erro: "Erro ao listar gêneros." });
    }
};

export const listarGeneroId = async (req, res) => {
    try {

        const id = Number(req.params.id);

        if (!validarId(id)) {
            return res.status(400).json({ erro: "ID inválido." });
        }

        const genero = await generoService.listarGeneroId(id);
        return res.status(200).json(genero);

    } catch (error) {
        if (error.message === 'GENERO_NAO_ENCONTRADO') {
            return res.status(404).json({ erro: "Gênero não encontrado." });
        }
        return res.status(500).json({ erro: "Erro ao listar gênero por ID." });
    }
};

export const deletarGenero = async (req, res) => {
    try {

        const id = Number(req.params.id);

        if (!validarId(id)) {
            return res.status(400).json({ erro: "ID inválido." });
        }

        await generoService.deletarGenero(id);

        return res.status(204).send();

    } catch (error) {
        if (error.message === 'GENERO_NAO_ENCONTRADO') {
            return res.status(404).json({ erro: "Gênero não encontrado." });
        };
        return res.status(500).json({ erro: "Erro ao deletar gênero." });
    }
};