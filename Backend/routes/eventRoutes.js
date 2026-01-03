const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// GET all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// POST a new event
router.post('/', async (req, res) => {
  try {
    const { name, location, date, totalSeats } = req.body;
    const newEvent = new Event({
      name,
      location,
      date,
      totalSeats,
      availableSeats: totalSeats // Logic: Set availability to total
    });
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE an event (New Route)
router.delete('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event successfully deleted" });
  } catch (err) {
    res.status(500).json({ message: "Backend error: Could not delete" });
  }
});

module.exports = router;