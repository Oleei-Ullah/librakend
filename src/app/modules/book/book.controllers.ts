import { catchAsync } from '../../utils/catchAsync';
import { bookServices } from './book.services';

//create books controller
const createBook = catchAsync(async (req, res, _next) => {
  const data = await bookServices.createBookToDb(req.body);

  res.status(200).json({
    success: true,
    message: 'Book created succesfully.',
    data,
  });
});

//get books controller support filtering, sorting and limit
const getBooks = catchAsync(async (req, res, _next) => {
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
});

//get book with id
const getBookWithId = catchAsync(async (req, res, _next) => {
  const { bookId } = req.params;
  const data = await bookServices.getBooksFormDbWithId(bookId);
  if (!data) {
    res.status(404).json({
      success: false,
      message: 'Book not found!',
      data,
    });
    return;
  }
  res.status(200).json({
    success: true,
    message: 'Book retrieved succesfully.',
    data,
  });
});

//update book with id
const updateBookById = catchAsync(async (req, res, _next) => {
  const { bookId } = req.params;
  const data = await bookServices.updateBookIntoDbWithId(bookId, req.body);
  if (!data) {
    res.status(404).json({
      success: false,
      message: 'Book not found!',
      data,
    });
    return;
  }
  res.status(200).json({
    success: true,
    message: 'Book updated succesfully.',
    data,
  });
});

const deleteBookById = catchAsync(async (req, res, _next) => {
  const { bookId } = req.params;
  const data = await bookServices.deleteBookByIdFromDb(bookId);
  if (!data) {
    res.status(404).json({
      success: false,
      message: 'Book not found!',
      data,
    });
    return;
  }
  res.status(200).json({
    success: true,
    message: 'Book deleted succesfully.',
    data: null,
  });
});

export const bookController = {
  createBook,
  getBooks,
  getBookWithId,
  updateBookById,
  deleteBookById,
};
