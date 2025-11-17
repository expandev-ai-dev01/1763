/**
 * @interface VehicleEntity
 * @description Represents a vehicle entity in the catalog
 *
 * @property {string} id - Unique vehicle identifier
 * @property {string} modelo - Vehicle model name (max 50 characters)
 * @property {string} marca - Vehicle brand/manufacturer
 * @property {number} ano - Manufacturing year (YYYY format)
 * @property {number} preco - Vehicle price in Brazilian Reais
 * @property {string} imagemPrincipal - URL of main vehicle image (16:9 ratio, 300x169px)
 * @property {number} [quilometragem] - Current mileage in kilometers
 * @property {string} [cambio] - Transmission type (Manual, Automático, CVT, Semi-automático)
 */
export interface VehicleEntity {
  id: string;
  modelo: string;
  marca: string;
  ano: number;
  preco: number;
  imagemPrincipal: string;
  quilometragem?: number;
  cambio?: string;
}

/**
 * @interface VehicleListParams
 * @description Parameters for vehicle listing with filtering, sorting, and pagination
 *
 * @property {string[]} [brands] - Filter by brand names
 * @property {string[]} [models] - Filter by model names
 * @property {number} [yearMin] - Minimum year filter
 * @property {number} [yearMax] - Maximum year filter
 * @property {number} [priceMin] - Minimum price filter
 * @property {number} [priceMax] - Maximum price filter
 * @property {string[]} [transmissions] - Filter by transmission types
 * @property {string} sortBy - Sort criteria (relevance, priceAsc, priceDesc, yearDesc, yearAsc, modelAsc, modelDesc)
 * @property {number} page - Current page number (min: 1)
 * @property {number} pageSize - Items per page (min: 1, max: 48)
 */
export interface VehicleListParams {
  brands?: string[];
  models?: string[];
  yearMin?: number;
  yearMax?: number;
  priceMin?: number;
  priceMax?: number;
  transmissions?: string[];
  sortBy: string;
  page: number;
  pageSize: number;
}

/**
 * @interface VehicleListResponse
 * @description Response structure for vehicle listing
 *
 * @property {VehicleEntity[]} data - Array of vehicle entities
 * @property {Object} pagination - Pagination metadata
 * @property {number} pagination.page - Current page number
 * @property {number} pagination.pageSize - Items per page
 * @property {number} pagination.total - Total number of vehicles
 * @property {number} pagination.totalPages - Total number of pages
 */
export interface VehicleListResponse {
  data: VehicleEntity[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}
