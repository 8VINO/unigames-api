import express from 'express';
import desenvolvedoraRoutes from './desenvolvedora.route.js';

const router = express.Router();

router.use('/desenvolvedoras', desenvolvedoraRoutes);

export default router;