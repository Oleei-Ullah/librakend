import { Router } from 'express';
import bookRoutes from '../modules/book/book.routes';

const routes = Router();

routes.use('/api/books', bookRoutes);

//handling unknown routes..
routes.use((req, _res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  (error as any).status = 404;
  next(error);
});

export default routes;
