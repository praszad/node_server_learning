import { Router } from 'express';
const router = Router();

const {
  fetchAllUsers,
  createUser,
  validateUser,
  deleteUser,
  verifyToken
} = require('../controllers/publicController');

router.post('/verifyToken', verifyToken);
router.delete('/deleteAll', deleteUser);
router.post('/signup', createUser);
router.post('/login', validateUser);
router.get('/', fetchAllUsers);

export default router;
