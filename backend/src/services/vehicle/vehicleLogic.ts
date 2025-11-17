import { VehicleEntity, VehicleListParams, VehicleListResponse } from './vehicleTypes';
import { sortByKey } from '@/utils/helpers';

const vehicles: VehicleEntity[] = [
  {
    id: '1',
    modelo: 'Civic',
    marca: 'Honda',
    ano: 2023,
    preco: 135000.0,
    imagemPrincipal:
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=300&h=169&fit=crop',
    quilometragem: 15000,
    cambio: 'Automático',
  },
  {
    id: '2',
    modelo: 'Corolla',
    marca: 'Toyota',
    ano: 2022,
    preco: 128000.0,
    imagemPrincipal:
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=300&h=169&fit=crop',
    quilometragem: 22000,
    cambio: 'CVT',
  },
  {
    id: '3',
    modelo: 'Onix',
    marca: 'Chevrolet',
    ano: 2024,
    preco: 85000.0,
    imagemPrincipal:
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=300&h=169&fit=crop',
    quilometragem: 5000,
    cambio: 'Manual',
  },
  {
    id: '4',
    modelo: 'HB20',
    marca: 'Hyundai',
    ano: 2023,
    preco: 78000.0,
    imagemPrincipal:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=169&fit=crop',
    quilometragem: 18000,
    cambio: 'Automático',
  },
  {
    id: '5',
    modelo: 'Gol',
    marca: 'Volkswagen',
    ano: 2021,
    preco: 62000.0,
    imagemPrincipal:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=300&h=169&fit=crop',
    quilometragem: 35000,
    cambio: 'Manual',
  },
  {
    id: '6',
    modelo: 'Compass',
    marca: 'Jeep',
    ano: 2023,
    preco: 185000.0,
    imagemPrincipal:
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=300&h=169&fit=crop',
    quilometragem: 12000,
    cambio: 'Automático',
  },
  {
    id: '7',
    modelo: 'Kicks',
    marca: 'Nissan',
    ano: 2022,
    preco: 98000.0,
    imagemPrincipal:
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=169&fit=crop',
    quilometragem: 28000,
    cambio: 'CVT',
  },
  {
    id: '8',
    modelo: 'Renegade',
    marca: 'Jeep',
    ano: 2024,
    preco: 145000.0,
    imagemPrincipal:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=300&h=169&fit=crop',
    quilometragem: 3000,
    cambio: 'Automático',
  },
  {
    id: '9',
    modelo: 'Argo',
    marca: 'Fiat',
    ano: 2023,
    preco: 72000.0,
    imagemPrincipal:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&h=169&fit=crop',
    quilometragem: 16000,
    cambio: 'Manual',
  },
  {
    id: '10',
    modelo: 'Creta',
    marca: 'Hyundai',
    ano: 2023,
    preco: 125000.0,
    imagemPrincipal:
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&h=169&fit=crop',
    quilometragem: 14000,
    cambio: 'Automático',
  },
  {
    id: '11',
    modelo: 'T-Cross',
    marca: 'Volkswagen',
    ano: 2022,
    preco: 115000.0,
    imagemPrincipal:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=300&h=169&fit=crop',
    quilometragem: 25000,
    cambio: 'Automático',
  },
  {
    id: '12',
    modelo: 'Tracker',
    marca: 'Chevrolet',
    ano: 2024,
    preco: 138000.0,
    imagemPrincipal:
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=169&fit=crop',
    quilometragem: 8000,
    cambio: 'Automático',
  },
  {
    id: '13',
    modelo: 'Fit',
    marca: 'Honda',
    ano: 2021,
    preco: 82000.0,
    imagemPrincipal:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=169&fit=crop',
    quilometragem: 32000,
    cambio: 'CVT',
  },
  {
    id: '14',
    modelo: 'Yaris',
    marca: 'Toyota',
    ano: 2023,
    preco: 95000.0,
    imagemPrincipal:
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=300&h=169&fit=crop',
    quilometragem: 11000,
    cambio: 'CVT',
  },
  {
    id: '15',
    modelo: 'Pulse',
    marca: 'Fiat',
    ano: 2024,
    preco: 105000.0,
    imagemPrincipal:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=300&h=169&fit=crop',
    quilometragem: 6000,
    cambio: 'Automático',
  },
];

/**
 * @summary
 * Retrieves paginated list of vehicles with filtering and sorting
 *
 * @function vehicleList
 * @module vehicle
 *
 * @param {VehicleListParams} params - List parameters including filters, sorting, and pagination
 *
 * @returns {Promise<VehicleListResponse>} Paginated vehicle list with metadata
 *
 * @example
 * const result = await vehicleList({
 *   brands: ['Honda', 'Toyota'],
 *   yearMin: 2020,
 *   sortBy: 'priceAsc',
 *   page: 1,
 *   pageSize: 12
 * });
 */
export async function vehicleList(params: VehicleListParams): Promise<VehicleListResponse> {
  let filtered = [...vehicles];

  /**
   * @rule {fn-vehicle-filtering} Apply brand filter
   */
  if (params.brands && params.brands.length > 0) {
    filtered = filtered.filter((v) => params.brands!.includes(v.marca));
  }

  /**
   * @rule {fn-vehicle-filtering} Apply model filter
   */
  if (params.models && params.models.length > 0) {
    filtered = filtered.filter((v) => params.models!.includes(v.modelo));
  }

  /**
   * @rule {fn-vehicle-filtering} Apply year range filter
   */
  if (params.yearMin) {
    filtered = filtered.filter((v) => v.ano >= params.yearMin!);
  }
  if (params.yearMax) {
    filtered = filtered.filter((v) => v.ano <= params.yearMax!);
  }

  /**
   * @rule {fn-vehicle-filtering} Apply price range filter
   */
  if (params.priceMin !== undefined) {
    filtered = filtered.filter((v) => v.preco >= params.priceMin!);
  }
  if (params.priceMax !== undefined) {
    filtered = filtered.filter((v) => v.preco <= params.priceMax!);
  }

  /**
   * @rule {fn-vehicle-filtering} Apply transmission filter
   */
  if (params.transmissions && params.transmissions.length > 0) {
    filtered = filtered.filter((v) => v.cambio && params.transmissions!.includes(v.cambio));
  }

  /**
   * @rule {fn-vehicle-sorting} Apply sorting based on selected criteria
   */
  switch (params.sortBy) {
    case 'priceAsc':
      filtered = sortByKey(filtered, 'preco', 'asc');
      break;
    case 'priceDesc':
      filtered = sortByKey(filtered, 'preco', 'desc');
      break;
    case 'yearDesc':
      filtered = sortByKey(filtered, 'ano', 'desc');
      break;
    case 'yearAsc':
      filtered = sortByKey(filtered, 'ano', 'asc');
      break;
    case 'modelAsc':
      filtered = sortByKey(filtered, 'modelo', 'asc');
      break;
    case 'modelDesc':
      filtered = sortByKey(filtered, 'modelo', 'desc');
      break;
    case 'relevance':
    default:
      break;
  }

  const total = filtered.length;
  const totalPages = Math.ceil(total / params.pageSize);

  /**
   * @rule {fn-vehicle-pagination} Adjust page number if it exceeds total pages
   */
  let currentPage = params.page;
  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }

  const startIndex = (currentPage - 1) * params.pageSize;
  const endIndex = startIndex + params.pageSize;
  const paginatedData = filtered.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    pagination: {
      page: currentPage,
      pageSize: params.pageSize,
      total,
      totalPages,
    },
  };
}

/**
 * @summary
 * Retrieves list of available vehicle brands
 *
 * @function getAvailableBrands
 * @module vehicle
 *
 * @returns {string[]} Array of unique brand names
 */
export function getAvailableBrands(): string[] {
  const brands = vehicles.map((v) => v.marca);
  return [...new Set(brands)].sort();
}

/**
 * @summary
 * Retrieves list of available vehicle models
 *
 * @function getAvailableModels
 * @module vehicle
 *
 * @returns {string[]} Array of unique model names
 */
export function getAvailableModels(): string[] {
  const models = vehicles.map((v) => v.modelo);
  return [...new Set(models)].sort();
}

/**
 * @summary
 * Retrieves list of available vehicle years
 *
 * @function getAvailableYears
 * @module vehicle
 *
 * @returns {number[]} Array of unique years sorted descending
 */
export function getAvailableYears(): number[] {
  const years = vehicles.map((v) => v.ano);
  return [...new Set(years)].sort((a, b) => b - a);
}

/**
 * @summary
 * Retrieves list of available transmission types
 *
 * @function getAvailableTransmissions
 * @module vehicle
 *
 * @returns {string[]} Array of unique transmission types
 */
export function getAvailableTransmissions(): string[] {
  const transmissions = vehicles.filter((v) => v.cambio).map((v) => v.cambio!);
  return [...new Set(transmissions)].sort();
}
