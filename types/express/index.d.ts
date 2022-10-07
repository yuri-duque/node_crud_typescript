import * as express from 'express';

declare global {
  namespace Express {
    interface Response {
      success(message: string, data?: any);
      error(message: string, data?: any, error?: Error): Response;
      badRequest(message: string, data?: any): Response;
      unauthorized(message: string, data?: any): Response;
    }
  }
}
