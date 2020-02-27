import { Router } from 'express';
const router = Router();

const {
  fetchNewsAndEvents,
  addNewsAndEvents
} = require('../controllers/newsAndEventsController');

router.get('/', fetchNewsAndEvents);
router.post('/', addNewsAndEvents);

export default router;
