const express = require('express');
require('dotenv').config();
const cors = require('cors');

// Initialize Express app
const app = express();
app.use(express.json());
app.use(cors());

// Connects to the db
require('./config/db');

// Importing routes
const homeRoutes = require('./routes/home');
const dashboardRoutes = require('./routes/dashboard');
const authRoutes = require('./routes/auth');

// Use routes
app.use('/', homeRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});