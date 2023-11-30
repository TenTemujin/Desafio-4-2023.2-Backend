import express from 'express';
import veiculo.controller from '../veiculo.controller';

const router = express.Router();

router.post('/', veiculoController.cadastrarVeiculo);
router.get('/', veiculoController.consultarVeiculos);

export default router;
