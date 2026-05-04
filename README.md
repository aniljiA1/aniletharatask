# 🚀 Team Task Manager (Full-Stack)

A full-stack web application where teams can create projects, assign tasks, and track progress with role-based access control (Admin/Member).

---

### Live

---
Deploy: https://aniletharatask.vercel.app
---

## 📌 Features

* 🔐 Authentication (Signup/Login with JWT)
* 👥 Role-based access (Admin / Member)
* 📁 Project management
* ✅ Task creation & assignment
* 📊 Dashboard (task status & tracking)
* 🌐 REST API with MongoDB

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

---

## 📁 Project Structure

```
team-task-manager/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api/
│   │   └── App.jsx
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/aniljiA1/aniletharatask.git
cd team-task-manager
```

---

## 🔧 Backend Setup

```
cd backend
npm install
```

### Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### Run Backend

```
npm start
```

run

```
http://localhost:5000
https://aniletharatask.onrender.com
```

---

## 🎨 Frontend Setup

```
cd frontend
npm install
npm run dev
```

Run

```
http://localhost:5173
https://aniletharatask.vercel.app
```

### Create `.env`

```
VITE_API_URL=http://localhost:5000/api

```

---

## 🌐 API Endpoints

### Auth

* `POST /api/auth/signup`
* `POST /api/auth/login`

### Projects

* `GET /api/projects`
* `POST /api/projects`

### Tasks

* `GET /api/tasks`
* `POST /api/tasks`
* `PUT /api/tasks/:id`

---

## 🔐 Authentication

* JWT-based authentication
* Token stored in localStorage
* Protected routes for authorized users

---



## 🚀 Deployment


### Frontend

* Vercel

### Backend

* Render

---

## 🧠 Future Improvements

* 📊 Advanced dashboard analytics
* 🔔 Notifications system
* 📅 Task deadlines & reminders
* 📎 File attachments
* 📱 Mobile responsive UI

---

## 👨‍💻 Author

**Anil Kumar**


---

