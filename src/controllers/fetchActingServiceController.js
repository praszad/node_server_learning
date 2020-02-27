const ActingService = require('../models/actingService');

async function fetchActingService(req, res) {
  try {
    const response = await ActingService.find({});
    res.send(response);
  } catch (error) {
    res.send(error);
  }
}
async function addActingService(req, res) {
  try {
    const query = req.body;
    const response = await ActingService.create(query);
    res.status(200).send(response);
  } catch (error) {
    res.send(error);
  }
}

module.exports = { fetchActingService, addActingService };
