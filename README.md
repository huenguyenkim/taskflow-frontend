# 🚀 TaskFlow Frontend

> A modern Task Management Frontend built with React, Vite, and Axios.
>
> Integrates with the TaskFlow Spring Boot REST API secured using JWT Authentication and Refresh Token Authentication.

---

## 🌐 Live Demo

### Frontend

https://taskflow-frontend-eight-chi.vercel.app/

### Backend API

Railway Deployment

### Swagger API Documentation

Available through the backend deployment.

---

## ✨ Features

### 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Refresh Token Support
- Protected Routes
- Automatic Logout

### ✅ Task Management

- Create Task
- View Task List
- View Task Details
- Update Task
- Delete Task
- Search Tasks
- Filter Tasks by Status
- Pagination
- Sorting

### 📊 Dashboard

- Total Tasks
- TODO Tasks
- In Progress Tasks
- Completed Tasks
- Statistics Dashboard

### 🎨 User Interface

- Responsive Design
- React Router Navigation
- Reusable Components
- Axios API Integration
- Loading State Handling
- Error Handling

---

## 🛠 Tech Stack

### Frontend

- React
- Vite
- React Router DOM
- Axios
- Bootstrap

### Backend

- Spring Boot 3
- Spring Security JWT
- MySQL

### Deployment

- Vercel
- Railway

---

## 📁 Project Structure

```text
taskflow-frontend/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── DashboardChart.jsx
│   │   ├── DashboardStats.jsx
│   │   ├── Navbar.jsx
│   │   └── TaskCard.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   └── TaskList.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── dashboardService.js
│   │   └── taskService.js
│   │
│   ├── routes/
│   │   └── ProtectedRoute.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔐 Authentication Flow

```text
User Login
    ↓
Receive JWT Token
    ↓
Store Token in Local Storage
    ↓
Axios Interceptor
    ↓
Attach Authorization Header
    ↓
Access Protected APIs
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/huenguyenkim/taskflow-frontend.git
```

```bash
cd taskflow-frontend
```

---

### Install Dependencies

```bash
npm install
```

---

### Configure Environment Variables

Create:

```env
.env
```

Example:

```env
VITE_API_URL=https://your-backend-url/api
```

---

### Run Development Server

```bash
npm run dev
```

Application:

```text
http://localhost:5173
```

---

### Build Production

```bash
npm run build
```

---

## 🔗 API Integration

### Authentication APIs

```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh-token
```

### Task APIs

```http
GET    /api/tasks
GET    /api/tasks/{id}
POST   /api/tasks
PUT    /api/tasks/{id}
DELETE /api/tasks/{id}

GET    /api/tasks/stats
```

---

## 🔍 Query Examples

### Search

```http
GET /api/tasks?keyword=spring
```

### Filter

```http
GET /api/tasks?status=DONE
```

### Pagination

```http
GET /api/tasks?page=0&size=5
```

### Sorting

```http
GET /api/tasks?sortBy=createdAt&direction=desc
```

---

## 🖼 Screenshots

### Login

```text
screenshots/login.png
```

### Register

```text
screenshots/register.png
```

### Dashboard

```text
screenshots/dashboard.png
```

### Task List

```text
screenshots/task-list.png
```

---

## 🚀 Deployment

### Frontend

Vercel

```text
https://taskflow-frontend-eight-chi.vercel.app/
```

### Backend

Railway

---

## ✅ Completed Features

- JWT Authentication
- Refresh Token Support
- Protected Routes
- Dashboard Statistics
- Task CRUD Operations
- Search Tasks
- Filter Tasks
- Pagination
- Sorting
- Axios API Integration
- Responsive User Interface
- Railway API Integration
- Vercel Deployment

---

## 🔮 Future Improvements

- Dark Mode
- Drag & Drop Tasks
- Real-time Notifications
- File Attachments
- Advanced Analytics Dashboard

---

## 👩‍💻 Author

**Nguyen Thi Kim Hue**

- GitHub: https://github.com/huenguyenkim
- Frontend Repository: https://github.com/huenguyenkim/taskflow-frontend
- Backend Repository: https://github.com/huenguyenkim/Taskflow

---

## 📄 License

MIT License
