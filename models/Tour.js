const mongoose = require('mongoose');
const tourSchema = mongoose.Schema({
  place_name: {
    required: true,
    type: String
  },
  location: {
    require: true,
    type: String
  },
  category: {
    required: true,
    type: String
  }
});
const Tour = mongoose.model('tour', tourSchema);
module.exports = Tour;
