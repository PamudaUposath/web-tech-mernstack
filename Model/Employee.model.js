const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: String,
  department: String,
  salary: Number,
  dateJoined: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
