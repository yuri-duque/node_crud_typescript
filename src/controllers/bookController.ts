import { Router, Request, Response } from 'express';
import Book from '../models/book';

class BookController {
  public path = '/book';
  public router = Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.post(this.path, this.post);
  }

  post = async (request: Request, response: Response) => {
    const number1: any = 10;
    const language: string = number1;

    response.send({ language });
  };
}

export default BookController;
