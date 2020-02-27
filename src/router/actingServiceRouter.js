import { Router } from 'express';
const router = Router();

const {
  fetchActingService,
  addActingService
} = require('../controllers/fetchActingServiceController');
router.get('/', fetchActingService);
router.post('/', addActingService);

export default router;
