import { Request, Response, NextFunction } from 'express';
import { z, ZodSchema } from 'zod';
import { HTTP_STATUS } from '@/constants';
import { errorResponse } from './responseMiddleware';

export function validateBody(schema: ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(HTTP_STATUS.BAD_REQUEST).json(
          errorResponse('Validation failed', 'VALIDATION_ERROR', {
            errors: error.errors.map((err) => ({
              path: err.path.join('.'),
              message: err.message,
            })),
          })
        );
      } else {
        next(error);
      }
    }
  };
}

export function validateQuery(schema: ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.query = await schema.parseAsync(req.query);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(HTTP_STATUS.BAD_REQUEST).json(
          errorResponse('Query validation failed', 'VALIDATION_ERROR', {
            errors: error.errors.map((err) => ({
              path: err.path.join('.'),
              message: err.message,
            })),
          })
        );
      } else {
        next(error);
      }
    }
  };
}

export function validateParams(schema: ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.params = await schema.parseAsync(req.params);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(HTTP_STATUS.BAD_REQUEST).json(
          errorResponse('Params validation failed', 'VALIDATION_ERROR', {
            errors: error.errors.map((err) => ({
              path: err.path.join('.'),
              message: err.message,
            })),
          })
        );
      } else {
        next(error);
      }
    }
  };
}
