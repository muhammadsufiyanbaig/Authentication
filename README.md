# Authentication System

## Overview

This project is an authentication system built using React.js for the front end, Express.js for the back end, and SQLite for the database. The system provides a robust solution for user registration, login, and secure session management.

## Features

- User registration with validation
- Secure user login with password hashing
- Session management using JWT (JSON Web Tokens)
- SQLite database for storing user credentials
- Simple and intuitive UI with React.js

## Prerequisites

Make sure you have the following software installed:

- Node.js (v14.x or later)
- npm (v6.x or later)
- SQLite3

## Installation

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Install the required npm packages:
    ```bash
    npm install
    ```

3. Set up the SQLite database:
    - The database configuration is located in `config/database.js`.
    - Ensure SQLite3 is installed and accessible in your environment.

4. Start the backend server:
    ```bash
    npm start
    ```

   By default, the server runs on port 5000.

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install the required npm packages:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

   By default, the development server runs on port 3000.

## Environment Variables

Create a `.env` file in the backend directory to configure the environment variables:

```
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

## Security

- Passwords are hashed using bcrypt before being stored in the database.
- JWT is used for session management and is stored in HTTP-only cookies to enhance security.

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests with your enhancements.

## License

This project is licensed under the MIT License.

---

For any questions or further assistance, please contact (Muhammad Sufiyan Baig)[https://muhammadsufiyanbaig.vercel.app/] at send.sufiyan@gmail.com.
