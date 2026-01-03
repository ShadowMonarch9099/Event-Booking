const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  seatsBooked: { type: Number, required: true }
});

module.exports = mongoose.model('Booking', BookingSchema);