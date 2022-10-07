import { Request, Response, NextFunction } from 'express';

export class CustomResponse extends Response {
  success(message: string, data: any) {}
}

const myMiddleware = (
  req: Request,
  res: CustomResponse,
  next: NextFunction
) => {
  next();
};
