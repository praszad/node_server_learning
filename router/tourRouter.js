const Router = require('express').Router();
const { fetchTouristPlaces } = require('../controllers/touristController');
Router.get('/', fetchTouristPlaces);

module.exports = Router;
