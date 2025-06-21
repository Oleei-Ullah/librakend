import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { ZodError } from 'zod';

export const globalErrorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof ZodError) {
    res.status(400).json({
      success: false,
      message: 'Validation failed',
      error: {
        name: 'ZodError',
        issues: err.issues,
      },
    });
  }

  if (err instanceof mongoose.Error.ValidationError) {
    res.status(400).json({
      success: false,
      message: 'Validation failed',
      error: {
        name: err.name,
        errors: err.errors,
      },
    });
  }

  if (err instanceof mongoose.Error.CastError) {
    res.status(400).json({
      success: false,
      message: 'Invalid ID format',
    });
  }

  if (err instanceof mongoose.Error.DocumentNotFoundError) {
    res.status(404).json({
      success: false,
      message: 'Document not found',
    });
  }

  if (err.code === 11000) {
    res.status(409).json({
      success: false,
      message: 'Duplicate key error',
      error: {
        keyValue: err.keyValue,
      },
    });
  }

  if (err.status === 404) {
    res.status(404).json({
      success: false,
      message: err.message || 'Not found',
    });
  }

  res.status(500).json({
    success: false,
    message: err.message,
  });
};
