import content from '@/data/content.json';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://concept-northvane.vercel.app').replace(/\/$/, '');
export const SITE_NAME = 'Northvane Defence Systems';

export const NAV = [
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/about', label: 'Company' },
  { href: '/contact', label: 'Contact' },
];

export { content };

export function getCapability(slug) {
  return content.capabilities.find((c) => c.slug === slug);
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    foundingDate: '2009',
    address: content.contact.offices.map((o) => ({
      '@type': 'PostalAddress',
      streetAddress: o.address,
      addressLocality: o.city,
    })),
  };
}
