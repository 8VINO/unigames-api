import express from 'express';
import * as generoController from '../controllers/genero.controller.js';

const router = express.Router();

router.post("/", generoController.cadastrarGenero);

router.put("/:id", generoController.atualizarGenero);

router.get("/", generoController.listarGeneros);

router.get("/:id", generoController.listarGeneroId);

router.delete("/:id", generoController.deletarGenero);

export default router;