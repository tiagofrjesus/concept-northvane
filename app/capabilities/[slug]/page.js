import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import JsonLd from '@/components/JsonLd';
import { SITE_URL, content, getCapability } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return content.capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cap = getCapability(slug);
  if (!cap) return {};
  return {
    title: cap.name,
    description: cap.summary,
    alternates: { canonical: `/capabilities/${cap.slug}` },
  };
}

export default async function CapabilityPage({ params }) {
  const { slug } = await params;
  const cap = getCapability(slug);
  if (!cap) notFound();

  const others = content.capabilities.filter((c) => c.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={cap.domain}
        title={cap.name}
        lead={cap.summary}
        crumbs={[{ label: 'Capabilities', href: '/capabilities' }, { label: cap.name }]}
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="lead">{cap.description}</p>
            <ul className="features">
              {cap.features.map((f) => (
                <li key={f.title} className="feature">
                  <h2 className="feature__title">{f.title}</h2>
                  <p className="muted">{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <aside aria-labelledby="spec-h" className="specs">
            <h2 id="spec-h" className="specs__title">Indicative specification</h2>
            <dl>
              {cap.specs.map((s) => (
                <div key={s.label} className="specs__row">
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
            <Link href="/contact" className="btn btn--primary specs__cta">
              Request technical briefing
            </Link>
          </aside>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="more-h">
        <div className="container">
          <h2 id="more-h" className="eyebrow">Other capabilities</h2>
          <ul className="caplist">
            {others.map((c) => (
              <li key={c.slug}>
                <Link href={`/capabilities/${c.slug}`} className="caplist__row">
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

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Capabilities', item: `${SITE_URL}/capabilities` },
            { '@type': 'ListItem', position: 3, name: cap.name, item: `${SITE_URL}/capabilities/${cap.slug}` },
          ],
        }}
      />
    </>
  );
}
