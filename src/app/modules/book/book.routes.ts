import { Router } from 'express';
import { bookController } from './book.controllers';

const bookRoutes = Router();

bookRoutes.post('/', bookController.createBook);

export default bookRoutes;
