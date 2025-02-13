require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./api/routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDb

connectDB();

// routes

app.use('/api', userRoutes);

// Server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});