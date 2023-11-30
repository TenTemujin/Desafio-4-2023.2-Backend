import express from 'express';
import proprietario.controller from '../proprietario.controller';

const router = express.Router();

router.post('/', proprietarioController.cadastrarProprietario);
router.get('/', proprietarioController.consultarProprietarios);

export default router;
