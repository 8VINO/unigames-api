import express from 'express';
import * as desenvolvedoraController from '../controllers/desenvolvedora.controller.js';

const router = express.Router();

router.post("/", desenvolvedoraController.cadastrarDesenvolvedora);

router.put("/:id", desenvolvedoraController.atualizarDesenvolvedora);

router.get("/", desenvolvedoraController.listarDesenvolvedoras);

router.get("/:id", desenvolvedoraController.listarDesenvolvedoraId);

router.delete("/:id", desenvolvedoraController.deletarDesenvolvedora);

export default router;