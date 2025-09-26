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

// Route to add new employee
router.post('/addEmployee', async (req, res) => {
    console.log('Received body:', req.body); // log request body
    try {
      const employee = new EmployeeModel(req.body);
      const savedEmployee = await employee.save();
      res.status(201).json(savedEmployee);
    } catch (err) {
      console.error(err);
      res.status(400).send('Error saving employee');
    }
});

router.get('/editEmployee/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const employee = await EmployeeModel.findById(id);
  
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      return res.json(employee);
    } catch (error) {
      console.error('Error fetching employee:', error);
      return res.status(500).json({ message: 'Server error' });
    }
});
  

module.exports = router;
