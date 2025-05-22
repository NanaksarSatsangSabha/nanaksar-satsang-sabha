const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phoneIdentifier: { type: String, unique: true, sparse: true },
  email: { type: String, unique: true, sparse: true },
  firstName: { type: String },
  lastName: { type: String },
  phoneType: { type: String },
  nextCloudUsername: { type: String },
  nextCloudToken: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);