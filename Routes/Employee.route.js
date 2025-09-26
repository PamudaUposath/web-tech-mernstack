const express = require('express');
const router = express.Router();

// Import your Employee model (make sure you have this defined)
const EmployeeModel = require('../Model/Employee.model');

// Route to get list of employees
router.get('/', async (req, res) => {
  try {
    const employees = await EmployeeModel.find();
    res.json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// You can add more routes here (POST, PUT, DELETE) for employees

module.exports = router;
