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

// Find employee by ID
router.get('/employee/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const employee = await EmployeeModel.findById(id);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.json(employee);
    } catch (error) {
      console.error('Error finding employee:', error);
      res.status(500).json({ message: 'Server error' });
    }
});

// Update employee by ID
router.put('/updateEmployee/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const updatedEmployee = await EmployeeModel.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,           // Return the updated document
          runValidators: true  // Validate update against schema
        }
      );
  
      if (!updatedEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      res.json(updatedEmployee);
    } catch (error) {
      console.error('Error updating employee:', error);
      res.status(500).json({ message: 'Server error' });
    }
});
  
// Delete employee by ID
router.delete('/employee/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedEmployee = await EmployeeModel.findByIdAndDelete(id);
  
      if (!deletedEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
      console.error('Error deleting employee:', error);
      res.status(500).json({ message: 'Server error' });
    }
});
  
  

module.exports = router;
