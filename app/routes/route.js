import express from 'express';
import desenvolvedoraRoutes from './desenvolvedora.route.js';
import generoRoutes from './genero.route.js';
import jogoRoutes from './jogo.route.js';

const router = express.Router();

router.use('/desenvolvedoras', desenvolvedoraRoutes);
router.use('/generos', generoRoutes);
router.use('/jogos', jogoRoutes);

export default router;