/**
 * Application constants
 */
export const BASE_URL = import.meta.env.BASE_URL;

/**
 * Normalize path by removing double slashes
 */
function normalizePath(path: string): string {
  return path.replace(/([^:]\/)\/+/g, '$1');
}

/**
 * Navigation routes
 */
export const ROUTES = {
  HOME: normalizePath(`${BASE_URL}/`),
  BLOG: normalizePath(`${BASE_URL}/blog/`),
  EXPERIMENTS: normalizePath(`${BASE_URL}/experiments/`),
  ABOUT_ME: normalizePath(`${BASE_URL}/about-me/`),
} as const;

/**
 * Generate blog post URL
 */
export function getBlogPostUrl(slug: string): string {
  return normalizePath(`${BASE_URL}/blog/${slug}/`);
}

/**
 * Generate experiment URL
 */
export function getExperimentUrl(slug: string): string {
  return normalizePath(`${BASE_URL}/experiments/${slug}/`);
}

