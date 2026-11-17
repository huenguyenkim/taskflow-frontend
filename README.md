# TaskFlow

A Full Stack Task Management Application built using Spring Boot and React.

## Features

### Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Refresh Token

### Task Management

- Create Task
- View Task List
- Update Task
- Delete Task
- Search Tasks
- Pagination

### API Documentation

- Swagger UI

## Tech Stack

### Backend

- Java 17
- Spring Boot 3
- Spring Security 6
- JWT Authentication
- Spring Data JPA
- Hibernate
- MySQL
- Swagger / OpenAPI
- Maven

### Frontend

- React
- Vite
- React Router
- Axios

### Deployment

- Backend: Railway
- Frontend: Vercel

## Project Structure

```text
taskflow
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   └── security
│
└── taskflow-frontend
    ├── pages
    ├── services
    ├── components
    └── routes
```

## Backend Setup

### Run Backend

```bash
./mvnw spring-boot:run
```

### Build Backend

```bash
./mvnw clean package
```

## Frontend Setup

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build Production

```bash
npm run build
```

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh-token
```

### Tasks

```http
GET    /api/tasks
GET    /api/tasks/{id}
POST   /api/tasks
PUT    /api/tasks/{id}
DELETE /api/tasks/{id}
```

## Search Example

```http
GET /api/tasks?keyword=react
```

## Pagination Example

```http
GET /api/tasks?page=0&size=5
```

## Deployment

### Railway

Backend deployed on Railway.

### Vercel

Frontend deployed on Vercel.

## Author

Nguyen Thi Kim Hue

## Status

✅ Authentication

✅ JWT Security

✅ CRUD Tasks

✅ Search

✅ Pagination

✅ Railway Deployment

✅ Vercel Deployment
