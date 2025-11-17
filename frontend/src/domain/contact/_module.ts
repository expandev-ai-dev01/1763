/**
 * @module contact
 * @summary Contact domain module for managing contact form submissions
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
  name: 'contact',
  domain: 'functional',
  version: '1.0.0',
  publicComponents: [],
  publicHooks: [],
  publicServices: ['contactService'],
  publicStores: [],
  dependencies: {
    internal: ['@/core/lib/api'],
    external: ['axios'],
    domains: [],
  },
  exports: {
    components: [],
    hooks: [],
    services: ['contactService'],
    types: ['ContactFormData', 'ContactSubmitDto'],
    utils: [],
  },
} as const;
