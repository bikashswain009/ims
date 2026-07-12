# Enterprise Inventory Management System (Enterprise IMS)

## Overview

Enterprise IMS is a web-based Inventory Management System developed using **Flask**, **SQLAlchemy**, and **MySQL**. The application follows a layered architecture consisting of **Controller → Service → Repository → Model**, making it scalable, maintainable, and suitable for enterprise applications.

## Tech Stack

### Backend

* Python 3.x
* Flask
* Flask-SQLAlchemy
* SQLAlchemy
* PyMySQL
* Flask-CORS
* Python Dotenv

### Database

* MySQL

### API Testing

* Postman

---

# Project Structure

```text
enterprise-ims/
│
├── backend/
│   ├── app/
│   │
│   ├── controllers/
│   │   └── category_controller.py
│   │
│   ├── services/
│   │   └── category_service.py
│   │
│   ├── repositories/
│   │   └── category_repository.py
│   │
│   ├── models/
│   │   └── master.py
│   │
│   ├── logger.py
│   ├── config.py
│   ├── __init__.py
│   │
│   └── run.py
│
├── logs/
│   └── app.log
│
├── requirements.txt
├── .env
└── README.md
```

---

# Architecture

```
Client
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
Repository
   │
   ▼
Model
   │
   ▼
MySQL Database
```

---

# Features Implemented

* Flask Application Factory
* MySQL Database Connectivity
* SQLAlchemy ORM
* Layered Architecture
* Category CRUD APIs
* Environment Variable Configuration
* Logging Support
* CORS Configuration
* Repository Pattern

---

# Database

Current Master Tables

* Categories
* Suppliers
* Products

---

# Installation

## 1. Clone the Repository

```bash
git clone <repository-url>
cd enterprise-ims/backend
```

## 2. Create Virtual Environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Linux/macOS

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 4. Configure Environment Variables

Create a `.env` file inside the `backend` directory.

Example:

```env
DB_USERNAME=root
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=3306
DB_NAME=enterprise_ims

SECRET_KEY=your_secret_key
```

---

## 5. Create Database

Create the MySQL database.

```sql
CREATE DATABASE enterprise_ims;
```

Run the SQL scripts to create all required tables.

---

## 6. Start the Application

```bash
python run.py
```

The server will start on:

```
http://127.0.0.1:5000
```

---

# API Endpoints

## Category APIs

| Method | Endpoint               | Description        |
| ------ | ---------------------- | ------------------ |
| GET    | `/api/categories/`     | Get all categories |
| GET    | `/api/categories/<id>` | Get category by ID |
| POST   | `/api/categories/`     | Create category    |
| PUT    | `/api/categories/<id>` | Update category    |
| DELETE | `/api/categories/<id>` | Delete category    |

---

# Sample Request

### Create Category

**POST**

```
/api/categories/
```

```json
{
    "category_name": "Electronics",
    "description": "Electronic Products"
}
```

---

# Logging

Application logs are stored in:

```
logs/app.log
```

---

# Current Modules

* Category Management

---

# Upcoming Modules

* Supplier Management
* Product Management
* Inventory Management
* Purchase Orders
* Sales Management
* Warehouse Management
* Dashboard & Reports
* Authentication & Authorization
* JWT Security
* Audit Logging

---

# Future Enhancements

* Database Migrations (Flask-Migrate)
* Role-Based Access Control (RBAC)
* Swagger/OpenAPI Documentation
* Docker Support
* Unit and Integration Testing
* CI/CD Pipeline
* Redis Caching
* Background Job Processing
* Deployment to Cloud Platforms

---

# Author

Developed as part of the **Enterprise Inventory Management System (Enterprise IMS)** project.
