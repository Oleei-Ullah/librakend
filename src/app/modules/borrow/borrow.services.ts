import { IBorrow } from './borrow.interface';
import { Borrow } from './borrow.model';

const createBorrowToDb = async (borrowData: IBorrow) => {
  const result = await Borrow.cheakAvailabilityAndCreate(borrowData);
  return result;
};

const getBorrowsFromdb = async () => {
  const result = await Borrow.aggregate([
    {
      $lookup: {
        from: 'books',
        localField: 'book',
        foreignField: '_id',
        as: 'book',
      },
    },
    {
      $unwind: '$book',
    },
    {
      $group: {
        _id: '$book._id',
        title: { $first: '$book.title' },
        isbn: { $first: '$book.isbn' },
        totalQuantity: { $sum: '$quantity' },
      },
    },
    {
      $project: {
        _id: 0,
        book: {
          title: '$title',
          isbn: '$isbn',
        },
        totalQuantity: 1,
      },
    },
  ]);
  return result;
};

export const borrowServices = {
  createBorrowToDb,
  getBorrowsFromdb,
};
