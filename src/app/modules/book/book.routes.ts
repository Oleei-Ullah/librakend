import { Router } from 'express';
import { bookController } from './book.controllers';

const bookRoutes = Router();

bookRoutes.post('/', bookController.createBook);
bookRoutes.get('/', bookController.getBooks);
bookRoutes.get('/:bookId', bookController.getBookWithId);
bookRoutes.patch('/:bookId', bookController.updateBookById);
bookRoutes.delete('/:bookId', bookController.deleteBookById);

export default bookRoutes;
