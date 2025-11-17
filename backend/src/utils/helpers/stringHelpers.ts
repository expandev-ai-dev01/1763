export function sanitizeString(input: string): string {
  return input.trim().replace(/\s+/g, ' ');
}

export function capitalizeFirstLetter(input: string): string {
  if (!input) return '';
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
