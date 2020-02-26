const Router = require('express').Router();
const {
  fetchActingService,
  addActingService
} = require('../controllers/fetchActingServiceController');
Router.get('/', fetchActingService);
Router.post('/', addActingService);

module.exports = Router;
