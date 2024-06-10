import express, { NextFunction, Request, Response } from 'express'; 
const app = express(); 
export const port = 3000;
import * as dotenv from 'dotenv';
dotenv.config();

// parser
app.use(express.json());
app.use(express.text());

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

// create router
const userRouter = express.Router();
const courseRouter = express.Router(); 

// use router
app.use('/api/v1/users', userRouter);
app.use('/api/v1/course', courseRouter);

userRouter.post('/create-users', (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: 'user is create successfully',
    data: user,
  });
});

courseRouter.post('/create-course', (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  
  res.json({
    success: true,
    message: 'course is create successfully',
    data: course,
  });
});

app.get('/', logger, (req: Request, res: Response) => {
  console.log(req.params);
  res.send('Hello Developer World!');
});

app.post('/', logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.send('data');
});

export default app;
