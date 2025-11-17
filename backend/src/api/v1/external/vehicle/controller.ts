import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { successResponse, errorResponse } from '@/middleware';
import { HTTP_STATUS } from '@/constants';
import {
  vehicleList,
  getAvailableBrands,
  getAvailableModels,
  getAvailableYears,
  getAvailableTransmissions,
} from '@/services/vehicle';
import { VehicleListParams } from '@/services/vehicle/vehicleTypes';

const querySchema = z.object({
  brands: z.string().optional(),
  models: z.string().optional(),
  yearMin: z.coerce.number().int().min(1900).optional(),
  yearMax: z.coerce.number().int().min(1900).optional(),
  priceMin: z.coerce.number().min(0).optional(),
  priceMax: z.coerce.number().min(0).optional(),
  transmissions: z.string().optional(),
  sortBy: z
    .enum(['relevance', 'priceAsc', 'priceDesc', 'yearDesc', 'yearAsc', 'modelAsc', 'modelDesc'])
    .optional(),
  page: z.coerce.number().int().min(1).optional(),
  pageSize: z.coerce.number().int().min(1).max(48).optional(),
});

/**
 * @api {get} /api/v1/external/vehicle List Vehicles
 * @apiName ListVehicles
 * @apiGroup Vehicle
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves paginated list of vehicles with filtering and sorting options
 *
 * @apiParam {String} [brands] Comma-separated list of brand names
 * @apiParam {String} [models] Comma-separated list of model names
 * @apiParam {Number} [yearMin] Minimum year filter
 * @apiParam {Number} [yearMax] Maximum year filter
 * @apiParam {Number} [priceMin] Minimum price filter
 * @apiParam {Number} [priceMax] Maximum price filter
 * @apiParam {String} [transmissions] Comma-separated list of transmission types
 * @apiParam {String} [sortBy] Sort criteria (relevance, priceAsc, priceDesc, yearDesc, yearAsc, modelAsc, modelDesc)
 * @apiParam {Number} [page=1] Page number
 * @apiParam {Number} [pageSize=12] Items per page (max 48)
 *
 * @apiSuccess {Array} data Array of vehicle objects
 * @apiSuccess {Object} metadata Pagination metadata
 *
 * @apiError {String} ValidationError Invalid query parameters
 * @apiError {String} ServerError Internal server error
 */
export async function listHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const validated = querySchema.parse(req.query);

    /**
     * @validation Validate year range consistency
     * @throw {yearRangeInvalid}
     */
    if (validated.yearMin && validated.yearMax && validated.yearMin > validated.yearMax) {
      res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json(errorResponse('yearMinCannotBeGreaterThanYearMax', 'VALIDATION_ERROR'));
      return;
    }

    /**
     * @validation Validate price range consistency
     * @throw {priceRangeInvalid}
     */
    if (validated.priceMin && validated.priceMax && validated.priceMin > validated.priceMax) {
      res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json(errorResponse('priceMinCannotBeGreaterThanPriceMax', 'VALIDATION_ERROR'));
      return;
    }

    const params: VehicleListParams = {
      brands: validated.brands ? validated.brands.split(',').map((b) => b.trim()) : undefined,
      models: validated.models ? validated.models.split(',').map((m) => m.trim()) : undefined,
      yearMin: validated.yearMin,
      yearMax: validated.yearMax,
      priceMin: validated.priceMin,
      priceMax: validated.priceMax,
      transmissions: validated.transmissions
        ? validated.transmissions.split(',').map((t) => t.trim())
        : undefined,
      sortBy: validated.sortBy || 'relevance',
      page: validated.page || 1,
      pageSize: validated.pageSize || 12,
    };

    const result = await vehicleList(params);

    res.json(
      successResponse(result.data, {
        page: result.pagination.page,
        pageSize: result.pagination.pageSize,
        total: result.pagination.total,
      })
    );
  } catch (error: any) {
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
}

/**
 * @api {get} /api/v1/external/vehicle/filters Get Available Filters
 * @apiName GetVehicleFilters
 * @apiGroup Vehicle
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves available filter options for vehicle listing
 *
 * @apiSuccess {Array} brands Available brand names
 * @apiSuccess {Array} models Available model names
 * @apiSuccess {Array} years Available years
 * @apiSuccess {Array} transmissions Available transmission types
 *
 * @apiError {String} ServerError Internal server error
 */
export async function filtersHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const brands = getAvailableBrands();
    const models = getAvailableModels();
    const years = getAvailableYears();
    const transmissions = getAvailableTransmissions();

    res.json(
      successResponse({
        brands,
        models,
        years,
        transmissions,
      })
    );
  } catch (error) {
    next(error);
  }
}
