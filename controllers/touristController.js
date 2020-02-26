const Tour = require('../models/Tour');

async function fetchTouristPlaces(req, res) {
  try {
    const response = await Tour.find({});
    res.status(200).send(response);
  } catch (error) {
    res.send(error);
  }
}

async function addTouristPlace(req, res) {
  try {
    const query = req.body;
    const response = await Tour.create(query);
    res.status(200).send(response);
  } catch (error) {
    res.send(error);
  }
}

module.exports = { fetchTouristPlaces, addTouristPlace };
