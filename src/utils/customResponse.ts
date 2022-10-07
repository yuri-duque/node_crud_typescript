import { Request, Response, NextFunction } from 'express';

export default function responseMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  response.success = (message: string, data?: any) => {
    return response.status(200).send({ message, data });
  };

  response.error = (message: string, data?: any, error?: Error) => {
    return response.status(500).send({ message, data, error: error?.message });
  };

  response.badRequest = (message: string, data?: any, error?: Error) => {
    return response.status(400).send({ message, data, error: error?.message });
  };

  response.unauthorized = (message: string, data?: any) => {
    return response.status(401).send({ message, data });
  };
  next();
}
