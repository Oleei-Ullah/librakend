import { Router } from 'express';
import { borrowController } from './borrow.controllers';

const borrowRoutes = Router();

borrowRoutes.post('/', borrowController.createBorrow);

export default borrowRoutes;
