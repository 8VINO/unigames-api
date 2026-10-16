import * as jogoService from '../services/jogo.service.js';
import { validarId } from '../utils/validacao.utils.js';

export const cadastrarJogo = async (req, res) => {
    try {
        const novoJogo = await jogoService.cadastrarJogo(req.body, req.file);

        return res.status(201).json(novoJogo);

    } catch (error) {
        if (error.message === 'DESENVOLVEDORA_NAO_ENCONTRADA') {
            return res.status(404).json({ erro: "Desenvolvedora não encontrada." });
        };
        if (error.message === 'GENERO_NAO_ENCONTRADO') {
            return res.status(404).json({ erro: "Um ou mais gêneros selecionados não foram encontrados." });
        };
        if (error.message === 'CONFLITO_DADOS') {
            return res.status(409).json({ erro: "Dados já cadastrados." });
        };
        if (error.message === 'ERRO_UPLOAD_SUPABASE') {
            console.error(error);
            return res.status(500).json({ erro: "Erro ao fazer upload da imagem no storage." });
        }
        console.error(error);
        return res.status(500).json({ erro: "Erro interno ao cadastrar jogo." });
    }
};

export const atualizarJogo = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!validarId(id)) {
            return res.status(400).json({ erro: "ID inválido." });
        };

        const jogoAtualizado = await jogoService.atualizarJogo(id, req.body, req.file);

        return res.status(200).json(jogoAtualizado);

    } catch (error) {
        if (error.message === 'JOGO_NAO_ENCONTRADO') {
            return res.status(404).json({ erro: "Jogo não encontrado." });
        };
        if (error.message === 'DESENVOLVEDORA_NAO_ENCONTRADA') {
            return res.status(404).json({ erro: "Desenvolvedora não encontrada." });
        };
        if (error.message === 'GENERO_NAO_ENCONTRADO') {
            return res.status(404).json({ erro: "Um ou mais gêneros selecionados não foram encontrados." });
        };
        if (error.message === 'CONFLITO_DADOS') {
            return res.status(409).json({ erro: "Dados já cadastrados." });
        };
        if (error.message === 'ERRO_UPLOAD_SUPABASE') {
            return res.status(500).json({ erro: "Erro ao fazer upload da imagem no storage." });
        }

        return res.status(500).json({ erro: "Erro interno ao atualizar jogo." });
    }
};

export const listarJogos = async (req, res) => {
    try {
        const jogos = await jogoService.listarJogos(req.query);
        return res.status(200).json(jogos);
    } catch (error) {
        return res.status(500).json({ erro: "Erro ao listar jogos." });
    }
};

export const listarJogoId = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!validarId(id)) {
            return res.status(400).json({ erro: "ID inválido." });
        }

        const jogo = await jogoService.listarJogoId(id);
        return res.status(200).json(jogo);

    } catch (error) {
        if (error.message === 'JOGO_NAO_ENCONTRADO') {
            return res.status(404).json({ erro: "Jogo não encontrado." });
        }
        return res.status(500).json({ erro: "Erro ao listar jogo por ID." });
    }
};

export const deletarJogo = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!validarId(id)) {
            return res.status(400).json({ erro: "ID inválido." });
        }

        await jogoService.deletarJogo(id);

        return res.status(204).send();

    } catch (error) {
        if (error.message === 'JOGO_NAO_ENCONTRADO') {
            return res.status(404).json({ erro: "Jogo não encontrado." });
        };
        return res.status(500).json({ erro: "Erro ao deletar jogo." });
    }
};