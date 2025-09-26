 // Importing important packages
 const express = require('express');
 
 // Using express and routes
 const app = express();
 const employeeRoute = express.Router();
 
 // Employee module which is required and imported
 let employeeModel = require('../Model/Employee');
 
 // To Get List Of Employees
employeeRoute.route('/').get(async function (req, res) {
    try {
        const employees = await employeeModel.find();
        res.json(employees);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});