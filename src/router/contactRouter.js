import { Router } from 'express';
const router = Router();

const {
  createContactCategory,
  fetchContactCategory,
  deleteContactCategory,
  createContact,
  fetchContacts
} = require('../controllers/contactController');

router.post('/category', createContactCategory);
router.delete('/category', deleteContactCategory);

router.get('/category', fetchContactCategory);
router.get('/', fetchContacts);
router.post('/', createContact);
export default router;
