export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  color: string;
  description: string;
  images: string[];
  features: string[];
  createdAt: string;
  updatedAt: string;
}

export interface VehicleListParams {
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  fuelType?: string;
  transmission?: string;
  sortBy?: 'price' | 'year' | 'mileage';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}
