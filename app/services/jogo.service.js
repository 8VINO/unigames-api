import { Op } from 'sequelize';
import db from '../config/sequelize.config.js';
import { supabase } from '../config/supabase.config.js';
const { Jogo, Desenvolvedora, Genero } = db;

export const cadastrarJogo = async (dados, file) => {

    const { nome, descricao, anoLancamento, preco, desenvolvedoraId, generos } = dados;

    const jogoCadastrado = await Jogo.findOne({ where: { nome } });

    if (jogoCadastrado) {
        throw new Error('CONFLITO_DADOS');
    };

    const desenvolvedora = await Desenvolvedora.findByPk(desenvolvedoraId);

    if (!desenvolvedora) {
        throw new Error('DESENVOLVEDORA_NAO_ENCONTRADA');
    };

    let generosArray = [];
    if (generos) {
        const parsedGeneros = typeof generos === 'string' ? JSON.parse(generos) : generos;
        generosArray = Array.isArray(parsedGeneros) ? parsedGeneros.map(Number) : [Number(parsedGeneros)];

        if (generosArray.length > 0) {
            const generosEncontrados = await Genero.findAll({
                where: { id: generosArray }
            });

            if (generosEncontrados.length !== generosArray.length) {
                throw new Error('GENERO_NAO_ENCONTRADO');
            };
        }
    };

    let imagemUrl = null;

    if (file) {
        const extensao = file.originalname.split('.').pop();
        const nomeArquivo = `jogo_${Date.now()}.${extensao}`;
        const filePath = `capas_jogos/${nomeArquivo}`;

        const { error: uploadError } = await supabase.storage
            .from('jogos')
            .upload(filePath, file.buffer, {
                contentType: file.mimetype,
                upsert: false
            });

        if (uploadError) {
            throw new Error('ERRO_UPLOAD_SUPABASE');
        }

        const { data: publicUrlData } = supabase.storage
            .from('jogos')
            .getPublicUrl(filePath);

        imagemUrl = publicUrlData.publicUrl;
    }

    const novoJogo = await Jogo.create({
        nome,
        descricao,
        ano_lancamento: anoLancamento,
        preco,
        imagem: imagemUrl,
        desenvolvedora_id: desenvolvedoraId
    });

    if (generosArray.length > 0) {
        await novoJogo.setGeneros(generosArray);
    };

    return await listarJogoId(novoJogo.id);
};

export const atualizarJogo = async (id, dados, file) => {
    const { nome, descricao, anoLancamento, preco, desenvolvedoraId, generos } = dados;

    const jogo = await Jogo.findByPk(id);

    if (!jogo) {
        throw new Error('JOGO_NAO_ENCONTRADO');
    };

    if (nome) {
        const jogoCadastrado = await Jogo.findOne({
            where: {
                nome,
                id: { [Op.ne]: id }
            }
        });

        if (jogoCadastrado) {
            throw new Error('CONFLITO_DADOS');
        };
    };

    if (desenvolvedoraId) {
        const desenvolvedora = await Desenvolvedora.findByPk(desenvolvedoraId);

        if (!desenvolvedora) {
            throw new Error('DESENVOLVEDORA_NAO_ENCONTRADA');
        };
    };

    let generosArray = undefined;
    if (generos) {
        const parsedGeneros = typeof generos === 'string' ? JSON.parse(generos) : generos;
        generosArray = Array.isArray(parsedGeneros) ? parsedGeneros.map(Number) : [Number(parsedGeneros)];

        const generosEncontrados = await Genero.findAll({
            where: { id: generosArray }
        });

        if (generosEncontrados.length !== generosArray.length) {
            throw new Error('GENERO_NAO_ENCONTRADO');
        };
    };

    let imagemUrl = jogo.imagem;

    if (file) {
        const extensao = file.originalname.split('.').pop();
        const nomeArquivo = `jogo_${id}_${Date.now()}.${extensao}`;
        const filePath = `capas_jogos/${nomeArquivo}`;

        const { error: uploadError } = await supabase.storage
            .from('jogos')
            .upload(filePath, file.buffer, {
                contentType: file.mimetype,
                upsert: false
            });

        if (uploadError) {
            throw new Error('ERRO_UPLOAD_SUPABASE');
        }

        const { data: publicUrlData } = supabase.storage
            .from('jogos')
            .getPublicUrl(filePath);

        imagemUrl = publicUrlData.publicUrl;
    }

    await jogo.update({
        ...(nome && { nome }),
        ...(descricao && { descricao }),
        ...(anoLancamento && { ano_lancamento: anoLancamento }),
        ...(preco !== undefined && { preco }),
        ...(imagemUrl && { imagem: imagemUrl }),
        ...(desenvolvedoraId && { desenvolvedora_id: desenvolvedoraId })
    });

    if (generosArray) {
        await jogo.setGeneros(generosArray);
    };

    return await listarJogoId(id);
};

export const listarJogos = async (filtros = {}) => {
    const { nome, anoLancamento, generoId, desenvolvedoraId } = filtros;

    const whereClause = {};

    if (nome) {
        whereClause.nome = { [Op.iLike]: `%${nome}%` };
    }

    if (anoLancamento) {
        whereClause.ano_lancamento = Number(anoLancamento);
    }

    if (desenvolvedoraId) {
        whereClause.desenvolvedora_id = Number(desenvolvedoraId);
    }

    const includeClause = [
        { model: Desenvolvedora, as: 'desenvolvedora' },
        { 
            model: Genero, 
            as: 'generos', 
            through: { attributes: [] },
            ...(generoId && { where: { id: Number(generoId) } })
        }
    ];

    return await Jogo.findAll({
        where: whereClause,
        include: includeClause
    });
};

export const listarJogoId = async (id) => {
    const jogo = await Jogo.findOne({
        where: { id },
        include: [
            { model: Desenvolvedora, as: 'desenvolvedora' },
            { model: Genero, as: 'generos', through: { attributes: [] } }
        ]
    });

    if (!jogo) {
        throw new Error('JOGO_NAO_ENCONTRADO');
    }

    return jogo;
};

export const deletarJogo = async (id) => {
    const jogo = await Jogo.findByPk(id);

    if (!jogo) {
        throw new Error('JOGO_NAO_ENCONTRADO');
    }

    await jogo.destroy();
};