# 🚀 Module 3 Assignment: MongoDB + Express.js + TypeScript API

A secure and scalable backend API built using **Express.js**, **TypeScript**, and **MongoDB Atlas**, supporting user registration with hashed passwords, retrieving all users, and fetching a user by ID. The system uses **UUID** for user identification and follows modular coding practices.

---

## 📁 Project Structure

```
Module3_Assignment/
│
├── src/
│   ├── models/
│   │   └── user.model.ts        # Mongoose schema using UUID
│   ├── routes/
│   │   └── userRoutes.ts        # API routes: register, get all, get by ID
│   └── server.ts                # Express app setup and MongoDB connection
│
├── .env                         # Environment variables (MongoDB URI)
├── package.json                 # Project metadata and scripts
├── tsconfig.json                # TypeScript configuration
├── postman_collection.json      # Postman collection to test APIs
└── README.md                    # Project documentation
```

---

## 🎯 Features

- 📝 User registration with **bcrypt password hashing**
- 🧾 Get all registered users (excluding passwords)
- 🔍 Get a user by UUID
- 🗃️ MongoDB Atlas integration via Mongoose
- ⚙️ .env support using `dotenv`
- 🆔 UUID generation using `uuid` package
- 🛡️ Clean and secure architecture with modular code

---

## 🚀 How to Run

1. **Clone the repository**
```
git clone <repo-url>
cd Module3_Assignment
```

2. **Install dependencies**
```
npm install
```

3. **Set up MongoDB Atlas**
Create a `.env` file in the root folder with the following content:
```
MONGO_URI=your_mongodb_connection_uri
PORT=3000
```

⚠️ Do NOT commit your real `.env` file. Add `.env` to your `.gitignore`.

4. **Run the server**
```
npm start
```

Server will run at: `http://localhost:3000`

---

## 📌 API Endpoints

### ✅ Register User
**POST** `/api/register`

**Request Body:**
```json
{
  "username": "kavya",
  "email": "kavya@gmail.com",
  "password": "securepass"
}
```

**Success Response:**
```json
{
  "message": "Registered successfully",
  "user": {
    "id": "generated-uuid",
    "username": "kavya",
    "email": "kavya@gmail.com"
  }
}
```

---

### 👥 Get All Users
**GET** `/api/users`

**Response:**
```json
[
  {
    "id": "uuid-1",
    "username": "kavya",
    "email": "kavya@gmail.com"
  }
]
```

---

### 🔍 Get User by ID
**GET** `/api/user/:id`

**Success Response:**
```json
{
  "id": "uuid-1",
  "username": "kavya",
  "email": "kavya@gmail.com"
}
```

**If Not Found:**
```json
{
  "message": "User not found"
}
```

---

## 🧪 Testing with Postman

Use the included `postman_collection.json` file to test all API endpoints easily in Postman.

---

## 🧠 Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB Atlas (Mongoose)
- bcrypt
- uuid
- dotenv
- Postman

---

## 🙋‍♀️ Author

**K. Kavya**  
🎓 Student, SRM University AP  
💡 Passionate about backend development with Node.js, MongoDB, and TypeScript.

---

## 📬 Contact

📧 Gmail: [kavyarambabu232@gmail.com](mailto:kavyarambabu232@gmail.com)  
🔗 LinkedIn: [linkedin.com/in/kavya-kesani-700a51292](https://www.linkedin.com/in/kavya-kesani-700a51292)

---


⭐ *Feel free to fork, star, or contribute to the repository!*
