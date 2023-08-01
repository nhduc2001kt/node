import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'

dotenv.config();

const jsonParser = bodyParser.json()
const app: Express = express();
const port = 3005;

app.get('/', (req: Request, res: Response) => {
  const ipAddress = req.socket.remoteAddress;
  res.json({ ipAddress });
})

app.post('/', jsonParser, (req: Request, res: Response) => {
  console.log('body', req.body)
  console.log('head', req.headers)
  console.log('\n\n\n\n\n\n')
  
  res.json(req.body);
});

app.post('/abc', jsonParser, (req: Request, res: Response) => {
  console.log('body', req.body)
  console.log('head', req.headers)
  console.log('\n\n\n\n\n\n')

  res.json(req.body);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});