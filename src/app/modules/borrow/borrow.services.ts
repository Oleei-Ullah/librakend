import { IBorrow } from './borrow.interface';
import { Borrow } from './borrow.model';

const createBorrowToDb = async (borrowData: IBorrow) => {
  const result = await Borrow.cheakAvailabilityAndCreate(borrowData);
  return result;
};

export const borrowServices = {
  createBorrowToDb,
};
