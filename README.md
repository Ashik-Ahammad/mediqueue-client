# 🌟 Mediqueue - Professional Tutor Booking & Scheduling Platform

# 🌐 Live Website

[![Client Side Live Preview](https://img.shields.io/badge/Live_Preview-Visit_Now-000000?style=for-the-badge&logo=vercel)](https://mediqueue-tutors.vercel.app/)

[![Server Side Live Preview](https://img.shields.io/badge/Server_Preview-Visit_Now-000000?style=for-the-badge&logo=vercel)](https://mediqueue-server-livid.vercel.app/)

[![image.png](https://i.postimg.cc/cC8YmG8M/image.png)](https://postimg.cc/dZwLsX6L)

MediQueue is a modern full-stack tutor booking platform where users can explore tutors, book sessions, manage bookings, and handle tutor schedules efficiently. The project is built with **Next.js 16**, **MongoDB**, **Express.js**, and secure **JWT Authentication** using Better Auth.

---

# 🚀 Features

- 🔐 Secure JWT Authentication & Protected Routes
- 👨‍🏫 Add, Update, and Delete Tutor Sessions
- 📅 Smart Booking System with Automatic Slot Management
- 🔍 Tutor Search & Date Filtering Functionality
- ❌ Booking Cancellation with Auto Slot Recovery
- 🌙 Fully Responsive Modern UI with Dark Mode Support
- ⚡ Smooth Animations using Framer Motion & Lottie
- 📱 Mobile, Tablet, and Desktop Optimized Experience
- 🧾 Personalized User Dashboard for Tutors & Bookings
- 🛡️ Secure MongoDB Database Integration

---

# 🛠️ Tech Stack

## Frontend

- Next.js 16
- React 19
- Tailwind CSS 4
- Framer Motion
- ShadCN UI
- Lottie React
- Sonner Toast
- Swiper.js
- Lenis

## Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Better Auth
- JOSE Runtime

---

# 📦 Client Dependencies

```json
{
  "next": "16.2.6",
  "react": "19.2.4",
  "mongodb": "^7.2.0",
  "better-auth": "^1.6.11",
  "framer-motion": "^12.38.0",
  "tailwindcss": "^4"
}
```

---

# 📦 Server Dependencies

```json
{
  "express": "^5.2.1",
  "mongodb": "^7.2.0",
  "cors": "^2.8.6",
  "dotenv": "^17.4.2"
}
```


---

# 🔑 Environment Variables

## Server `.env`

```env
PORT=8000
MONGO_URI=your_mongodb_uri
CLIENT_URL=your_client_url
```

---


# 📡 API Endpoints

| Method | Endpoint | Description | Security |
|--------|----------|-------------|----------|
| POST | `/tutors` | Add a new tutor | Public |
| GET | `/tutors` | Get all tutors with search & filters | Public |
| GET | `/featured-tutors` | Get latest featured tutors | Public |
| GET | `/tutors/:id` | Get tutor details | JWT Protected |
| POST | `/bookings` | Create booking & decrease slot | JWT Protected |
| GET | `/my-tutors/:userId` | Get tutors created by user | JWT Protected |
| GET | `/bookings/:userId` | Get user bookings | JWT Protected |
| PATCH | `/bookings/:id` | Cancel booking & restore slot | JWT Protected |
| PATCH | `/tutors/:id` | Update tutor info | JWT Protected |
| DELETE | `/tutors/:id` | Delete tutor & cancel bookings | JWT Protected |

---

# 🔒 Authentication & Security

- JWT Token Verification Middleware
- Protected API Routes
- Secure Remote JWK Set Validation
- MongoDB ObjectId Validation
- Environment Variable Protection

---

# 🎨 UI & UX Highlights

- Modern Glassmorphism Inspired Design
- Fully Responsive Layout
- Smooth Page Animations
- Interactive User Experience
- Accessible & Clean Interface

---

# ⚙️ Installation & Setup

## Clone the repositories

```bash
git clone https://github.com/your-username/mediqueue-client.git
git clone https://github.com/your-username/mediqueue-server.git
```

---

## Install Dependencies

### Client

```bash
cd mediqueue-client
npm install
```

### Server

```bash
cd mediqueue-server
npm install
```

---

## Run the Project

### Start Client

```bash
npm run dev
```

### Start Server

```bash
node index.js
```

---

# 👨‍💻 Developer

#### Ashik Ahammad


