import { Router } from 'express';
const router = Router();

const {
  fetchTouristPlaces,
  addTouristPlace
} = require('../controllers/touristController');

router.get('/', fetchTouristPlaces);
router.post('/', addTouristPlace);

export default router;
