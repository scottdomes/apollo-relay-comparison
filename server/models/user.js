const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);

User.findOne({ username: 'scotty' }, function(err, user) {
  console.log(user);
  if (!user) {
    User.create({ username: 'scotty', email: 'scotty@test.com' });
  }
});

module.exports = User;
