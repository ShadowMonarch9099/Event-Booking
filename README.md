
Watch Next - Cinematic Theatre Booking Platform

A high-performance MERN stack application designed with a premium streaming service aesthetic (Netflix/Crunchyroll style). This platform allows users to browse live theatre shows, check real-time seat availability, and book tickets.

Standard Features and Mandatory Logic

* Real-time Seat Updates: Booking seats automatically reduces availability across the UI.
* Overbooking Protection: Logic prevents booking more seats than are available.
* Date Validation: Past events are automatically badged with EVENT OVER and blocked for bookings.
* Dynamic UI: Every show card features a unique font style and a randomized high-resolution theatre poster.

Bonus Features Implemented

* Frontend Pagination: Smooth navigation for large datasets (6 shows per page).
* Advanced Filtering: Real-time search bar to filter shows by Name or Location.
* Empty and No-Result States: Custom themed messaging when no shows exist or search results are empty.
* Themed Modals: Replaced default browser alerts with centered, dark-themed cinematic notification and confirmation modals.

Tech Stack

* Frontend: React.js, CSS3 (Flexbox/Grid), Font Awesome 6.
* Backend: Node.js, Express.js.
* Database: MongoDB Atlas.

Setup Instructions

1. Prerequisites

* Node.js installed on your machine.
* A MongoDB Atlas connection string.

2. Backend Setup

* Navigate to the backend folder.
* Create a .env file and add your MongoDB URI: MONGO_URI=your_mongodb_connection_string
* Install dependencies and start the server:
   npm install
   npm start

3. Frontend Setup

* Navigate to the frontend folder.
* Install dependencies and start the React app:
   npm install
   npm start

API Documentation

* GET /events: Fetch all theatre shows.
* POST /events: Create a new show (Name, Location, Date,Total Seats).
* POST /bookings: Book seats (updates availableSeats on the event).
* DELETE /events/:id: Permanently remove a show from the database.

