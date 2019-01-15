const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
