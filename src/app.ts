import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { productRouter } from './app/modules/products/products.route';
const app: Application = express();

//  parser
app.use(express.json());

// middleware

app.use(cors());

//  Router
app.use('/api/products', productRouter);
app.use('/api', productRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World Programmer!');
});

export default app;
