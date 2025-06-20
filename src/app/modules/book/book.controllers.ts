import { NextFunction, Request, Response } from 'express';
import { bookServices } from './book.services';
import { BookValidationSchema } from './book.zod.validation';

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parsedData = await BookValidationSchema.parseAsync(req.body);
    const data = await bookServices.createBookToDb(parsedData);

    res.status(200).json({
      success: true,
      message: 'Book created succesfully.',
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const bookController = {
  createBook,
};
