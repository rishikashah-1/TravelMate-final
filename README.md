# Travelmate 🧳

A responsive multi-page travel booking website that lets users explore destinations, calculate trip pricing dynamically, and submit bookings that are stored in a real-time cloud database.

## 🚀 Features

- **Multi-page travel site** — Home, Destinations (including dedicated pages like Ladakh), Booking, Confirmation, and Payment flow
- **Dynamic price calculator** — Auto-calculates total price based on destination, package type (Standard/Deluxe/Luxury), and number of travelers
- **Cloud database integration** — Booking submissions are saved to **Firebase Firestore** in real time
- **Client-side form validation** — Ensures valid input before submission
- **Clean, responsive UI** — Works across screen sizes

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend/Database:** Firebase (Firestore)
- **Hosting:** [Add once deployed — e.g. Firebase Hosting / Netlify]

## 📂 Project Structure

TravelMate-Final/
├── hello.html # Home page
├── booknow.html # Booking page
├── book.js # Booking logic + Firestore integration
├── confirm.html / confirm.js # Booking confirmation
├── payment.html / payment.js # Payment page
├── ladakh.html / ladakh.js # Destination detail page
├── firebase-config.js # Firebase SDK setup
└── assets/ # Images, videos
