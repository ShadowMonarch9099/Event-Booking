

# 🎬 **Watch Next**

### Cinematic Theatre Booking Platform

**Watch Next** is a **high-performance MERN stack web application** designed with a **premium streaming-service aesthetic** inspired by platforms like Netflix and Crunchyroll.
It enables users to **browse live theatre shows**, **view real-time seat availability**, and **securely book tickets** with robust validation and protection logic.

---

## ✨ Key Highlights

* 🎭 Live theatre show listings
* 🎟️ Real-time seat availability & booking
* 🚫 Intelligent overbooking prevention
* 📅 Automatic handling of expired events
* 🎨 Cinematic UI with dynamic styling

---

## ⚙️ Core Features & Mandatory Logic

### 🔄 Real-Time Seat Updates

* Seat availability updates instantly across the UI after each booking.

### 🛑 Overbooking Protection

* Backend validation ensures users **cannot book more seats than available**.

### ⏳ Date Validation

* Events with past dates are:

  * Clearly marked as **EVENT OVER**
  * Fully blocked from new bookings

### 🎨 Dynamic UI Enhancements

* Each show card includes:

  * A **unique font style**
  * A **randomized high-resolution theatre poster**
  * A modern, cinematic design theme

---

## 🚀 Bonus Features Implemented

### 📄 Frontend Pagination

* Displays **6 shows per page** for smooth navigation through large datasets.

### 🔍 Advanced Filtering

* Real-time search functionality to filter shows by:

  * **Show Name**
  * **Location**

### 🫙 Empty & No-Result States

* Custom, themed messages when:

  * No events exist
  * Search results return empty

### 🎥 Themed Modals

* Replaced default browser alerts with:

  * Centered
  * Dark-themed
  * Cinematic confirmation and notification modals

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ React.js
* 🎨 CSS3 (Flexbox & Grid)
* ⭐ Font Awesome 6

### Backend

* 🟢 Node.js
* 🚏 Express.js

### Database

* 🍃 MongoDB Atlas

---

## ⚡ Setup Instructions

### ✅ Prerequisites

* Node.js installed on your system
* A valid MongoDB Atlas connection string

---

## 🔧 Backend Setup

1. Navigate to the **backend** directory
2. Create a `.env` file and add your MongoDB URI:

   ```
   MONGO_URI=your_mongodb_connection_string
   ```
3. Install dependencies and start the server:

   ```
   npm install
   npm start
   ```

---

## 🎨 Frontend Setup

1. Navigate to the **frontend** directory
2. Install dependencies and start the React app:

   ```
   npm install
   npm start
   ```

---

## 📡 API Documentation

### 🔹 Fetch All Events

```
GET /events
```

### 🔹 Create a New Event

```
POST /events
```

**Payload:**

* Name
* Location
* Date
* Total Seats

### 🔹 Book Seats for an Event

```
POST /bookings
```

* Automatically updates available seats
* Prevents overbooking

### 🔹 Delete an Event

```
DELETE /events/:id
```

* Permanently removes the event from the database

---

## 🎯 Project Objective

This project demonstrates:

* Full-stack MERN development skills
* Real-time data handling
* Strong backend validation
* Clean UI/UX design principles
* Scalable and maintainable code architecture


