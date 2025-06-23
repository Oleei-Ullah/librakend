import cors from 'cors';
import express, { Application, json } from 'express';
import errorHandler from './app/middlewares/globalErrorHandlers';
import routes from './app/routes';

const app: Application = express();

app.use(cors());
app.use(json());

app.use(routes);

app.use(errorHandler);

export default app;
