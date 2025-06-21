import cors from 'cors';
import express, { Application, json, Request, Response } from 'express';
import { globalErrorHandler } from './app/middlewares/globalErrorHandlers';
import routes from './app/routes';

const app: Application = express();

app.use(cors());
app.use(json());
app.use(routes);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: '🚀 Server Running sucessfully',
  });
});

app.use(globalErrorHandler);

export default app;
