import { publicClient } from '@/core/lib/api';
import type { Vehicle, VehicleListParams } from '../types';

/**
 * @service vehicleService
 * @summary Vehicle service for public endpoints
 * @domain vehicle
 * @type rest-service
 * @apiContext external
 *
 * @description
 * All methods in this service use publicClient which targets:
 * /api/v1/external/vehicle/...
 */
export const vehicleService = {
  /**
   * @endpoint GET /api/v1/external/vehicle
   * @summary Fetches list of vehicles with optional filters
   */
  async list(params?: VehicleListParams): Promise<Vehicle[]> {
    const response = await publicClient.get('/vehicle', { params });
    return response.data.data;
  },

  /**
   * @endpoint GET /api/v1/external/vehicle/:id
   * @summary Fetches single vehicle by ID
   */
  async getById(id: number): Promise<Vehicle> {
    const response = await publicClient.get(`/vehicle/${id}`);
    return response.data.data;
  },
};
