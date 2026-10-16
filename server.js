import express from 'express';
import db from './app/config/sequelize.config.js';
import routes from './app/routes/route.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
    await db.sequelize.authenticate();
    console.log('Banco conectado');
} catch (error) {
    console.error('Erro ao conectar no banco:', error);
}

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando`);
});