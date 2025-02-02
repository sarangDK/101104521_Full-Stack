require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const restaurantRoutes = require('./routes/restaurantRoutes');


const app = express();
app.use(express.json());

connectDB();

app.use('/restaurants',restaurantRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});