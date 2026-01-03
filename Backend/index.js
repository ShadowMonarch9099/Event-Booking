const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables [cite: 53]
dotenv.config();

// Connect to Database [cite: 50]
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows parsing of JSON request bodies [cite: 55]

// Root Route for testing
app.get('/', (req, res) => {
  res.send('Event Booking API is running...');
});

// API Routes (We will create these next)
app.use('/api/events', require('./routes/eventRoutes')); 
app.use('/api/bookings', require('./routes/bookingRoutes')); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});