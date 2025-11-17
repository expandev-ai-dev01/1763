export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  contactMethod: 'Phone' | 'Email' | 'WhatsApp';
  vehicleId: number;
  message: string;
}

export interface ContactSubmitDto {
  name: string;
  email: string;
  phone: string;
  contactMethod: string;
  vehicleId: number;
  message: string;
}
