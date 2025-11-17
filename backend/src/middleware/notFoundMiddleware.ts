import { Request, Response } from 'express';
import { HTTP_STATUS } from '@/constants';

export function notFoundMiddleware(req: Request, res: Response): void {
  res.status(HTTP_STATUS.NOT_FOUND).json({
    success: false,
    error: {
      code: 'NOT_FOUND',
      message: `Route ${req.method} ${req.path} not found`,
    },
    timestamp: new Date().toISOString(),
  });
}
