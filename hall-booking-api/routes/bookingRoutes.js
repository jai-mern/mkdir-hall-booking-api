// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();

// Sample in-memory data store
let bookings = [];

// Get all bookings
router.get('/', (req, res) => {
  res.json(bookings);
});

// Create a new booking
router.post('/', (req, res) => {
  const { hallName, date, startTime, endTime, customerName } = req.body;
  const newBooking = { hallName, date, startTime, endTime, customerName };
  bookings.push(newBooking);
  res.json(newBooking);
});

// Other CRUD operations can be added here

module.exports = router;
