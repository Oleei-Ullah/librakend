import { NextFunction, Request, Response } from 'express';
import { borrowServices } from './borrow.services';

//creating borrow
const createBorrow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await borrowServices.createBorrowToDb(req.body);

    res.status(200).json({
      success: true,
      message: 'Book borrowed succesfully.',
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const borrowController = {
  createBorrow,
};
