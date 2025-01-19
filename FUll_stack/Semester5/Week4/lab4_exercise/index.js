const express = require('express');
const app = express();
const port = 3000;

// Get /hello
app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});

// Get /user with query parameters

app.get('/user', (req, res) => {
  console.log(req.query);
  const firstname = req.query.firstname || "Pritesh";
  const lastname = req.query.lastname || "Patel"; 
  res.send(`Firstname: ${firstname} , Last Name: ${lastname}`);
});

// Post /user with path parameters
app.post('/user', (req, res) => {
  console.log(req.query);
  const firstname = req.query.firstname;
  const lastname = req.query.lastname; 
  res.send(`Firstname: ${firstname} , Last Name: ${lastname}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});