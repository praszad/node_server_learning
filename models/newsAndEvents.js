const mongoose = require('mongoose');

const newsAndEventsSchema = mongoose.Schema({
  topic: {
    type: String,
    required: true
  },
  media_type: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  }
});
const NewsAndEvents = mongoose.model('newsAndEvents', newsAndEventsSchema);

module.exports = NewsAndEvents;
