# 📚 Library Management API

A backend RESTful API for managing a digital library system built with **Express.js**, **TypeScript**, and **MongoDB** (via **Mongoose**). This API allows users to perform CRUD operations on books, borrow books with availability logic, and generate summaries of borrowed records.

---

## ✨ Features

- 🔒 **Schema Validation** using Mongoose
- ✅ **Business Logic Enforcement** for borrow operations
- 🧠 **Aggregation Pipelines** for borrowed book summaries
- 🔁 **Mongoose Middleware** for data control and tracking
- 🔍 **Filtering, Sorting & Pagination** for books
- 📘 **Instance & Static Methods** on models
- 📤 Structured and standardized API responses

---

## 📁 Project Structure

```bash
├── src
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   └── app.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md
```
```yaml

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Oleei-Ullah/library-management-api.git
cd library-management-api
```