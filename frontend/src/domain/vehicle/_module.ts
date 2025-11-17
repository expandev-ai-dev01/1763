/**
 * @module vehicle
 * @summary Vehicle domain module for managing vehicle catalog, details, and related operations
 * @domain functional
 * @version 1.0.0
 * @author Development Team
 * @lastModified 2024-01-15
 */

export * from './components';
export * from './hooks';
export * from './services';
export * from './types';

export const moduleMetadata = {
  name: 'vehicle',
  domain: 'functional',
  version: '1.0.0',
  publicComponents: [],
  publicHooks: [],
  publicServices: ['vehicleService'],
  publicStores: [],
  dependencies: {
    internal: ['@/core/lib/api'],
    external: ['axios'],
    domains: [],
  },
  exports: {
    components: [],
    hooks: [],
    services: ['vehicleService'],
    types: ['Vehicle', 'VehicleListParams'],
    utils: [],
  },
} as const;
