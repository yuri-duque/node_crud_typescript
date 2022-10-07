import { Router, Request, Response } from 'express';

const path = '/user';
const router = Router();

router.post(path, (request: Request, response: Response): void => {
  const { body } = request;

  response.success('sucesso', body);
});

router.put(path, (request: Request, response: Response): void => {
  const { body } = request;

  response.error('sucesso', body);
});

router.delete(path, (request: Request, response: Response): void => {
  const { body } = request;

  response.badRequest('sucesso', body);
});

router.get(path, (request: Request, response: Response): void => {
  const { body } = request;

  response.unauthorized('sucesso', body);
});

export default router;
