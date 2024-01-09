const express = require('express');
const app = express();
const path = require('path');

// Serve the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'landing.html'));
  });
  

// Serve the home.html file
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// Serve the dashboard.html file
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});
