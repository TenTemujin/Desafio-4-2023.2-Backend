import express, { Router } from 'express';
import multa.routes from './routes/multa.routes';
import proprietario.routes from './routes/proprietario.routes';
import veiculo.routes from './routes/veiculo.routes';

const router: Router = express.Router();

router.use('/api/multa', multa.routes);
router.use('/api/proprietario', proprietario.routes);
router.use('/api/veiculo', veiculo.routes);

export default router;
