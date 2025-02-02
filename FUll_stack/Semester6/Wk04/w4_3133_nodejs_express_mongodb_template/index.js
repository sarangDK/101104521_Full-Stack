const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json


const SERVER_PORT = process.env.PORT || 8081;
const DB_NAME = "db_comp3133_employee";
const DB_USER_NAME = "da980302";
const DB_PASSWORD = 'qk1eo1ru12';
const CLUSTER_ID = '5jnp0';
const DB_CONNECTION = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@comp3104cluster.${CLUSTER_ID}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=comp3104Cluster`;

// Set strictQuery to true to suppress the warning
mongoose.set('strictQuery', true);

// Replace the connection string here
mongoose.connect(DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection');
}).catch(err => {
  console.log('Error Mongodb connection', err);
});

app.use(employeeRouter);

app.listen(8081, () => { console.log('Server is running...') });