const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true },
  phone: String,
  dateJoined: { type: Date, default: Date.now },
  versionKey: false  // disables __v field
});

module.exports = mongoose.model('Employee', EmployeeSchema);
