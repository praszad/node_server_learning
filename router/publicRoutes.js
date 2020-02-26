const Router = require('express').Router();
const {
  fetchAllUsers,
  createUser,
  validateUser,
  deleteUser,
  verifyToken
} = require('../controllers/publicController');

Router.post('/verifyToken', verifyToken);
Router.delete('/deleteAll', deleteUser);
Router.post('/signup', createUser);
Router.post('/login', validateUser);
Router.get('/', fetchAllUsers);

module.exports = Router;
