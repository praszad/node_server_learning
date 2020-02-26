const mongoose = require('mongoose');

const actingServiceSchema = mongoose.Schema({
  provider_name: {
    type: String,
    required: true
  },
  service_category: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  location: {
    type: String,
    required: true
  }
});

const ActingService = mongoose.model('actingService', actingServiceSchema);

module.exports = ActingService;
