import { IBook } from './book.interfaces';
import { Book } from './book.model';

const createBookToDb = async (data: IBook) => {
  const result = await Book.create(data);
  return result;
};

export const bookServices = {
  createBookToDb,
};
