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
- **Hosting:** Add once deployed — e.g. Firebase Hosting / Netlify

## 📂 Project Structure

- `hello.html` — Home page
- `booknow.html` — Booking page
- `book.js` — Booking logic + Firestore integration
- `confirm.html`, `confirm.js` — Booking confirmation
- `payment.html`, `payment.js` — Payment page
- `ladakh.html`, `ladakh.js` — Destination detail page
- `firebase-config.js` — Firebase SDK setup
- `/videos`, images — Media assets

## ⚙️ How It Works

1. User browses destinations and selects a package on the booking page
2. Price is calculated live based on destination, package, and number of travelers
3. On submission, booking details are saved to Firebase Firestore (`bookings` collection)
4. User is redirected to the confirmation/payment flow

## 🔧 Setup / Run Locally

1. Clone the repository:
   `git clone https://github.com/rishikashah-1/travelmate.git`
2. Open the folder in VS Code
3. Install the **Live Server** extension (if not already installed)
4. Right-click `hello.html` → **"Open with Live Server"**

> Note: This project uses a personal Firebase project for the database. To run it with your own backend, create a Firebase project and replace the config in `firebase-config.js`.

## 🔮 Future Enhancements

- User authentication (Login/Signup)
- Admin dashboard to manage bookings
- Email confirmation on booking

## 👤 Author

**Rishika Shah**
- GitHub: [@rishikashah-1](https://github.com/rishikashah-1)
- LinkedIn: [rishika-shah001](https://www.linkedin.com/in/rishika-shah001)
