import express from 'express';
import desenvolvedoraRoutes from './desenvolvedora.route.js';
import generoRoutes from './genero.route.js';

const router = express.Router();

router.use('/desenvolvedoras', desenvolvedoraRoutes);
router.use('/generos', generoRoutes);

export default router;