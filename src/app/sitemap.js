import { SITE_URL } from '@/data/site';

export default function sitemap() {
  const lastModified = new Date();
  return ['', '/about', '/projects', '/contact'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === '' ? 'monthly' : 'yearly',
    priority: path === '' ? 1 : 0.7,
  }));
}
