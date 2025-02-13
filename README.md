# Volunteer Management System

## Overview

The **Volunteer Management System** is a web-based platform that allows users to create, manage, and participate in volunteer opportunities. It provides an intuitive interface for organizing and finding volunteer activities, tracking participant engagement, and ensuring secure authentication.

## Features

- **User Authentication**: Secure login and registration using Firebase.
- **Create Volunteer Need Posts**: Users can create, update, and delete posts for volunteer needs.
- **Join as a Volunteer**: Users can sign up for available volunteer opportunities.
- **Protected Routes**: Ensures only authorized users can access certain pages.
- **Dark/Light Theme Toggle**: Customizable UI theme preference.
- **Interactive Dashboard**: Users can manage their volunteer activities.
- **Secure API Calls**: Implemented JWT authentication for API security.

## Technologies Used

- **Frontend**:
  - React.js
  - TailwindCSS
  - DaisyUI
  - React Router
  - Axios
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - JWT Authentication
- **Authentication**:
  - Firebase Authentication
- **Hosting**:
  - Vercel (Backend)
  - Firebase Hosting (Frontend)

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB
- Firebase Account (for authentication setup)

### Steps to Run the Project

#### 1. Clone the Repository

```sh
git clone https://github.com/your-username/volunteer-management.git
cd volunteer-management
```

#### 2. Install Dependencies

```sh
npm install
```

#### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
FIREBASE_API_KEY=your_firebase_api_key
```

#### 4. Start the Backend Server

```sh
npm run server
```

#### 5. Start the Frontend

```sh
npm run dev
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Volunteer Needs

- `GET /all-posts/email/:email` - Get volunteer posts by email (protected route)
- `POST /all-posts` - Create a new volunteer need post
- `PUT /all-posts/:id` - Update a volunteer need post
- `DELETE /all-posts/:id` - Delete a volunteer need post

## Deployment

Frontend is hosted on Firebase and the backend on Vercel. To deploy updates:

#### Deploy Frontend to Firebase

```sh
firebase deploy
```

#### Deploy Backend to Vercel

```sh
vercel --prod
```

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

This project is open-source and available under the [MIT License](LICENSE).

