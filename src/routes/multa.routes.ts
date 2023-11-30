import express from 'express';
import multa.controller from '../multa.controller';

const router = express.Router();

router.post('/', multaController.cadastrarMulta);
router.get('/', multaController.consultarMultas);

export default router;
