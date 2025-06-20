import cors from 'cors';
import express, { Application, json, Request, Response } from 'express';

const app: Application = express();

app.use(cors());
app.use(json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Server Running sucessfully',
  });
});

export default app;
