import { NextFunction, Request, Response } from 'express';
import { bookServices } from './book.services';
import { BookValidationSchema } from './book.zod.validation';

//create books controller
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

//get books controller support filtering, sorting and limit
const getBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { filter, sortBy, sort, limit } = req.query;
    const data = await bookServices.getBooksFromDb({
      filter: filter as string,
      sortBy: sortBy as string,
      sort: sort as 'asc' | 'desc',
      limit: limit ? +limit : undefined,
    });
    res.status(200).json({
      success: true,
      message: 'Books retrieved succesfully.',
      data,
    });
  } catch (err) {
    next(err);
  }
};

//get book with id
const getBookWithId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;
    const data = await bookServices.getBooksFormDbWithId(bookId);
    res.status(200).json({
      success: true,
      message: 'Book retrieved succesfully.',
      data,
    });
  } catch (err) {
    next(err);
  }
};

//update book with id
const updateBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;
    const data = await bookServices.updateBookIntoDbWithId(bookId, req.body);
    res.status(200).json({
      success: true,
      message: 'Book updated succesfully.',
      data,
    });
  } catch (err) {
    next(err);
  }
};

const deleteBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;
    const data = await bookServices.deleteBookByIdFromDb(bookId);
    if (!data) {
      res.status(404).json({
        success: false,
        message: 'Book not found!',
        data,
      });
    }
    res.status(200).json({
      success: true,
      message: 'Book deleted succesfully.',
      data: null
    });
  } catch (err) {
    next(err);
  }
};

export const bookController = {
  createBook,
  getBooks,
  getBookWithId,
  updateBookById,
  deleteBookById,
};
