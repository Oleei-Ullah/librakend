import { IBook, TQueryParams } from './book.interfaces';
import { Book } from './book.model';

//create books in database
const createBookToDb = async (data: IBook) => {
  const result = await Book.create(data);
  return result;
};

//get books from database with query options-- support sorting and limiting
const getBooksFromDb = async ({
  filter,
  sortBy = 'createdAt',
  sort = 'desc',
  limit = 10,
}: TQueryParams) => {
  const query: any = {};
  if (filter) {
    query.genre = filter;
  }
  const result = await Book.find(query)
    .sort({ [sortBy]: sort === 'asc' ? 1 : -1 })
    .limit(limit);
  return result;
};

//find books by id from database ----
const getBooksFormDbWithId = async (id: string) => {
  const result = await Book.findById(id);
  return result;
};

//find books by id from database and update----
const updateBookIntoDbWithId = async (id: string, data: Partial<IBook>) => {
  const result = await Book.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  return result;
};


//delete books by id from database
const deleteBookByIdFromDb = async (id: string) => {
  const result = await Book.findByIdAndDelete(id);
  return result;
};

export const bookServices = {
  createBookToDb,
  getBooksFromDb,
  getBooksFormDbWithId,
  updateBookIntoDbWithId,
  deleteBookByIdFromDb
};
