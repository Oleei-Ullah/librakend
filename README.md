# 📚 Library Management API

A backend RESTful API for managing a digital library system built with **Express.js**, **TypeScript**, and **MongoDB** with ODM **Mongoose**. This API allows users to perform CRUD operations on books, borrow books with availability logic, and generate summaries of borrowed books.

---

## ✨ Features

- 🔒 **Schema Validation** using Mongoose
- ✅ **Business Logic handled** for borrow operations
- 🧠 **Aggregation Pipelines** for borrowed book summaries
- 🔁 **Mongoose Middleware** for data control and tracking
- 🔍 **Filtering, Sorting & Pagination** for books
- 📘 **Static Method** on borrow to checkavailability of book copies.
- 📤 Structured and API responses

---

## 📁 Project Structure

```bash
├── src
│   ├── app
│   │   ├── middlewares
│   │   │   └── globalErrorHandler.ts
│   │   ├── modules
│   │   │   ├── book
│   │   │   │   ├── book.controller.ts
│   │   │   │   ├── book.interface.ts
│   │   │   │   ├── book.model.ts
│   │   │   │   ├── book.routes.ts
│   │   │   │   └── book.service.ts
│   │   │   └── borrow
│   │   │       ├── borrow.controller.ts
│   │   │       ├── borrow.interface.ts
│   │   │       ├── borrow.model.ts
│   │   │       ├── borrow.routes.ts
│   │   │       └── borrow.service.ts
│   │   ├── routes
│   │   └── utils
│   │       └── catchAsync.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md

```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Oleei-Ullah/library-management-api.git
cd library-management-api
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Environment Setup
Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/dbName
```

### 4. Run the Project
For Development (with ts-node-dev):

```bash
npm run dev
```

## 📌 API Endpoints

### 📚 Books
- Create a Book
`POST /api/books`
- Get All Books (Supports filtering, sorting, limit)
`GET /api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5`

- Get Book by ID
`GET /api/books/:bookId`

- Update Book
`PATCH /api/books/:bookId`

- Delete Book
`DELETE /api/books/:bookId`

###  📦 Borrowing
- Borrow a Book

  `POST /api/borrow`

  > Business logic:


  - Checks if enough copies exist.

  - Updates copies and available fields.

  - I have used Static method handles availability.

- Borrowed Summary (Aggregation)

  `GET /api/borrow`

  Returns:

  - Book title, ISBN

  - Total quantity borrowed per book

## 🔧 Tech Stack
- **Backend**: Node.js, Express.js

- **Language**: TypeScript

- **Database**: MongoDB with Mongoose

- **Tools**: ts-node-dev, Dotenv, ESLint, Prettier

## ⚙️ Mongoose Features Used
- Schema-level validations.

- Static method for checkavailability of book copies

- Aggregation framework for summarize book and borrow collections.

## ❗ Error Handling
- Used tryCatch syntex to Handle all errors.
- globalErrorHandler.ts file handled all the errors.

```bash
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { ZodError } from 'zod';

const globalErrorHandler: ErrorRequestHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {


  if (err instanceof mongoose.Error.ValidationError) {
    res.status(400).json({
      success: false,
      message: 'Validation failed',
      error: {
        name: err.name,
        errors: err.errors,
      },
    });
    return;
  }


  if (err.status === 404) {
    res.status(404).json({
      success: false,
      message: err.message || 'Not found',
    });
    return;
  }

};

export default globalErrorHandler;
```