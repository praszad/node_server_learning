const mongoose = require('mongoose');
const ContactScheme = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category_id: { type: String, required: true },
  number: {
    type: String,
    required: true
  },
  avatar: String
});
const Contacts = mongoose.model('contacts', ContactScheme);
module.exports = Contacts;
