const NewsAndEvents = require('../models/newsAndEvents');

async function fetchNewsAndEvents(req, res) {
  try {
    const query = req.body;
    const response = await NewsAndEvents.find({});
    res.send(response);
  } catch (error) {
    res.send(error);
  }
}
async function addNewsAndEvents(req, res) {
  try {
    const query = req.body;
    const response = await NewsAndEvents.create(query);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
}

module.exports = { fetchNewsAndEvents, addNewsAndEvents };
