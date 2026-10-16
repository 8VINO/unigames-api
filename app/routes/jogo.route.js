import { Router } from 'express';
import multer from 'multer';
import * as jogoController from '../controllers/jogo.controller.js';

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limite
});

const router = Router();

router.post('/', upload.single('imagem'), jogoController.cadastrarJogo);
router.put('/:id', upload.single('imagem'), jogoController.atualizarJogo);
router.get('/', jogoController.listarJogos);
router.get('/:id', jogoController.listarJogoId);
router.delete('/:id', jogoController.deletarJogo);

export default router;