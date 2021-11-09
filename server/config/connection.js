const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/halfsies'
);

module.exports = mongoose.connection;
