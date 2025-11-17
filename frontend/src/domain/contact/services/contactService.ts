import { publicClient } from '@/core/lib/api';
import type { ContactSubmitDto } from '../types';

/**
 * @service contactService
 * @summary Contact service for public endpoints
 * @domain contact
 * @type rest-service
 * @apiContext external
 *
 * @description
 * All methods in this service use publicClient which targets:
 * /api/v1/external/contact/...
 */
export const contactService = {
  /**
   * @endpoint POST /api/v1/external/contact
   * @summary Submits contact form data
   */
  async submit(data: ContactSubmitDto): Promise<void> {
    await publicClient.post('/contact', data);
  },
};
