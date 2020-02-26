const Router = require('express').Router();
const {
  fetchTouristPlaces,
  addTouristPlace
} = require('../controllers/touristController');

Router.get('/', fetchTouristPlaces);
Router.post('/', addTouristPlace);

module.exports = Router;
