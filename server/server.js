 // Import required packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

// MongoDB connection string
const mongoDatabase = 'mongodb+srv://pamudauposath:123@todoappcluster.hamne3r.mongodb.net/employeeDetails?retryWrites=true&w=majority'; // Replace this with your actual MongoDB URI

// Connect to MongoDB database
mongoose.connect(mongoDatabase, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database is connected'))
  .catch(err => console.log('There is a problem connecting to the database: ' + err));

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Import employee routes
const employeeRoutes = require('../Routes/Employee.route');

// Setup routes prefix
app.use('/employees', employeeRoutes);

// Setup server port
const port = process.env.PORT || 4000;

// Start server
app.listen(port, () => {
  console.log('Server listening on port: ' + port);
});
