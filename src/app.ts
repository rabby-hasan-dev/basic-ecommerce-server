import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World Programmer!');
});

export default app;
