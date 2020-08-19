const Router = require('express').Router();
const {
  fetchAllUsers,
  createUser,
  validateUser,
  deleteUser
} = require('../controllers/publicController');

Router.delete('/deleteAll', deleteUser);
Router.post('/signup', createUser);
Router.post('/login', validateUser);
Router.get('/', fetchAllUsers);

module.exports = Router;
