const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const Booking = require('../models/Booking');

/**
 * @route   POST /api/bookings
 * @desc    Book seats for an event
 * Logic: Validate date, check availability, and reduce seat count
 */
router.post('/', async (req, res) => {
  try {
    const { userName, eventId, seatsBooked } = req.body;

    // 1. Basic Validation 
    if (!userName || !eventId || !seatsBooked) {
      return res.status(400).json({ message: "Please provide user name, event ID, and number of seats." });
    }

    // 2. Find the Event [cite: 25]
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found." });
    }

    // 3. Logic: Block booking for past events 
    const currentDate = new Date();
    const eventDate = new Date(event.date);
    if (eventDate < currentDate) {
      return res.status(400).json({ message: "Booking is blocked for past events." });
    }

    // 4. Logic: Ensure seats booked do not exceed available seats 
    if (seatsBooked > event.availableSeats) {
      return res.status(400).json({ message: `Not enough seats. Only ${event.availableSeats} seats remaining.` });
    }

    // 5. Create the Booking [cite: 22]
    const newBooking = new Booking({
      userName,
      eventId,
      seatsBooked
    });

    // 6. Logic: Reduce available seats after successful booking 
    event.availableSeats -= seatsBooked;

    // Save both the booking and the updated event count
    await newBooking.save();
    await event.save();

    res.status(201).json({
      message: "Booking successful!",
      booking: newBooking
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;