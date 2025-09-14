<div align="center">

<h1>🌱 EcoWay 🚗</h1>

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

</div>

## 💡 Overview

**Sustainable Ride-Sharing for a Greener Tomorrow**

EcoWay is an eco-friendly ride-sharing mobile application built to promote sustainable transportation choices and reduce
carbon footprint. Connect with like-minded individuals who prioritize environmental responsibility while getting to your
destination efficiently.

## 📱 App Screenshots

### Authentication & Onboarding

<div>
<img src="./screenshots/onboarding.jpeg" alt="Onboarding" width="30%"/>
<img src="./screenshots/sign-in.jpeg" alt="Login" width="30%"/>
<img src="./screenshots/sign-up.jpeg" alt="Registration" width="30%"/>
</div>

### Ride Search & Requests

<div>
<img src="./screenshots/search-autocomplete-1.jpeg" alt="Search Autocomplete" width="30%"/>
<img src="./screenshots/find-ride.jpeg" alt="Find Ride" width="30%"/>
<img src="./screenshots/choose-ride-available.jpeg" alt="Choose Ride" width="30%"/>
</div>
<div>
<img src="./screenshots/request-join-ride.jpeg" alt="Request Join Ride" width="30%"/>
<img src="./screenshots/passenger-request-to-join.jpeg" alt="Driver Receives Request" width="30%"/>
<img src="./screenshots/accept-passenger-request.jpeg" alt="Driver Accepts Ride" width="30%"/>
</div>

### Ongoing Trip
<div>
<img src="./screenshots/ride-with-passenger.jpeg" alt="Ride with Passenger" width="30%"/>
<img src="./screenshots/ride-ongoing-no-passengers.jpeg" alt="Ride without Passengers" width="30%"/>
</div>

## ✨ Features

### 🚗 Ride Sharing

- **Offer Rides**: Share your journey and help others while reducing emissions
- **Request Rides**: Find eco-conscious drivers going your way
- **Real-time Matching**: Intelligent algorithm to match riders and drivers

### 👤 User Management

- **Profile Management**: Complete user profiles with preferences
- **Secure Authentication**: JWT-based secure user authentication

### 📍 Location Services

- **Google Places Integration**: Smart destination search and autocomplete
- **Interactive Maps**: Real-time navigation with React Native Maps
- **Location Tracking**: Accurate pickup and drop-off coordination

## 🛠️ Technology Stack

### Frontend (Mobile App)

- **React Native** with **Expo SDK 53**
- **TypeScript** for type safety
- **Expo Router** for navigation
- **React Native Maps** for location services
- **Axios** for API communication
- **Expo Location** for GPS tracking
- **React Native Gesture Handler** for smooth interactions

### Backend (API Server)

- **Node.js** with **Express.js**
- **TypeScript** for type safety
- **Prisma ORM** for database management
- **PostgreSQL** as the primary database
- **JWT** for authentication
- **bcrypt** for password hashing
- **CORS** enabled for cross-origin requests
- **nodemon** for development server auto-reloading

### Infrastructure

- **Docker Compose** for containerized deployment
- **PostgreSQL** database with Docker
- **Prisma** for database migrations and schema management

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Docker** and **Docker Compose**
- **Expo CLI**: `npm install -g @expo/cli`
- **PostgreSQL** (or use Docker setup)

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ecoway.git
   cd ecoway
   ```

2. **Set up the database**
   ```bash
   cd backend
   docker-compose up -d
   ```

3. **Install backend dependencies**
   ```bash
   cd eco-backend
   npm install
   ```

4. **Configure environment variables**
   Create a `.env` file in `backend/eco-backend/`:
   ```env
   DATABASE_URL="postgresql://root:root@localhost:5432/root"
   JWT_SECRET="your-jwt-secret-key"
   PORT=3000
   ```

5. **Run database migrations**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

6. **Start the backend server**
   ```bash
   npm run dev
   ```

The backend API will be available at `http://localhost:3000`

### Frontend Setup

1. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Configure API endpoint**
   Update the API base URL in your frontend configuration to point to your backend server.

3. **Start the Expo development server**
   ```bash
   npm run dev
   ```

4. **Run on device/simulator**
    - **iOS**: `npm run ios` (requires Xcode)
    - **Android**: `npm run android` (requires Android Studio)
    - **Web**: `npm run web`

## 📱 Mobile App Development

### Running on Physical Device

1. Install **Expo Go** app from App Store/Google Play
2. Scan the QR code from the Expo development server
3. The app will load on your device for testing

### Building for Production

```bash
# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

## 📄 License

This project is licensed under the GNU General Public License (GPL) License - see the [LICENSE](LICENSE) file for details.

---
<div align="center">
<b>Built with ❤️ for a sustainable future 🌍</b>

<i>Developed as Software Engineering Project (2025)</i>
</div>