import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { orderRouter } from './app/modules/orders/orders.route';
import { productRouter } from './app/modules/products/products.route';
import { notFoundRouter } from './app/utilis/errorhandler';
const app: Application = express();

//  parser
app.use(express.json());

// middleware

app.use(cors());

//  Router

app.use('/api', productRouter);
app.use('/api', orderRouter);
app.use('*', notFoundRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World Programmer!');
});

export default app;
