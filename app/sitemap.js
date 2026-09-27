import { SITE_URL, content } from '@/lib/site';

export default function sitemap() {
  const lastModified = new Date();
  const pages = ['', '/capabilities', '/about', '/contact'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
  const caps = content.capabilities.map((c) => ({
    url: `${SITE_URL}/capabilities/${c.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  return [...pages, ...caps];
}
