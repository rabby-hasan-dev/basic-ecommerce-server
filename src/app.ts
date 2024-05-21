import cors from 'cors';
import express, { Request, Response } from 'express';
const app = express();


//  parser
app.use(express.json());

// middleware

app.use(cors());


//  Router



app.get('/', (req: Request, res: Response) => {

  res.send('Hello World Programmer!');

});

export default app;
