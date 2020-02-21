const Router = require('express').Router();
const {
  createContactCategory,
  fetchContactCategory,
  deleteContactCategory,
  createContact,
  fetchContacts
} = require('../controllers/contactController');

Router.post('/category', createContactCategory);
Router.delete('/category', deleteContactCategory);

Router.get('/category', fetchContactCategory);
Router.get('/', fetchContacts);
Router.post('/', createContact);

module.exports = Router;
