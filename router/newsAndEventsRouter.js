const Router = require('express').Router();
const {
  fetchNewsAndEvents,
  addNewsAndEvents
} = require('../controllers/newsAndEventsController');

Router.get('/', fetchNewsAndEvents);
Router.post('/', addNewsAndEvents);

module.exports = Router;
