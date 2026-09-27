import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { content } from '@/lib/site';

export const metadata = {
  title: 'Capabilities',
  description: 'Multi-spectral sensing, autonomous navigation, secure communications and orbital infrastructure for allied defence customers.',
  alternates: { canonical: '/capabilities' },
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Systems engineered for contested environments."
        lead="Each capability is designed, qualified and supported in-house, and built to integrate with the others."
        crumbs={[{ label: 'Capabilities' }]}
      />
      <section className="section">
        <div className="container">
          <ul className="caplist">
            {content.capabilities.map((c, i) => (
              <li key={c.slug}>
                <Link href={`/capabilities/${c.slug}`} className="caplist__row">
                  <span className="cap__index">0{i + 1}</span>
                  <span className="caplist__name">{c.name}</span>
                  <span className="cap__domain">{c.domain}</span>
                  <span className="caplist__summary muted">{c.summary}</span>
                  <span className="caplist__arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
