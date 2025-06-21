import { Request, Response, Router } from 'express';
import bookRoutes from '../modules/book/book.routes';
import borrowRoutes from '../modules/borrow/borrow.routes';

const routes = Router();

routes.use('/api/books', bookRoutes);
routes.use('/api/borrow', borrowRoutes);

//main entry point for my library api
routes.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: '📚 Welcome to the Library API!',
  });
});

//handling unknown routes..
routes.use((req, _res, next) => {
  const error = new Error(
    `Route is ${req.originalUrl} not found. Hit on right Route.`
  );
  (error as any).status = 404;
  next(error);
});

export default routes;
