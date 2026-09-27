import Link from 'next/link';
import Radar from '@/components/Radar';
import JsonLd from '@/components/JsonLd';
import { SITE_NAME, SITE_URL, content, formatDate } from '@/lib/site';

export const metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  const { tagline, heroSub, stats, intro, capabilities, approach, news, certifications, careersCta } = content;

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Defence · Aerospace · Security</p>
            <h1 className="hero__title">{tagline}</h1>
            <p className="hero__lead">{heroSub}</p>
            <div className="hero__actions">
              <Link href="/capabilities" className="btn btn--primary">
                Explore capabilities
              </Link>
              <Link href="/about" className="btn btn--ghost">
                About Northvane
              </Link>
            </div>
          </div>
          <Radar />
        </div>
        <div className="container">
          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stats__item">
                <dt className="stats__label">{s.label}</dt>
                <dd className="stats__value">
                  {s.value}
                  {s.unit && <span className="stats__unit">{s.unit}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="intro-h">
        <div className="container split">
          <h2 id="intro-h" className="h2">{intro.heading}</h2>
          <div>
            <p className="lead">{intro.body}</p>
            <ul className="certs" aria-label="Certifications">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="cap-h">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Capabilities</p>
            <h2 id="cap-h" className="h2">Four domains. One integrated architecture.</h2>
          </div>
          <ul className="caps">
            {capabilities.map((c, i) => (
              <li key={c.slug} className="cap">
                <Link href={`/capabilities/${c.slug}`} className="cap__link">
                  <span className="cap__index">0{i + 1}</span>
                  <span className="cap__domain">{c.domain}</span>
                  <h3 className="cap__name">{c.name}</h3>
                  <p className="cap__summary">{c.summary}</p>
                  <span className="cap__more" aria-hidden="true">
                    View capability →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="app-h">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Approach</p>
            <h2 id="app-h" className="h2">From requirement to in-service support.</h2>
          </div>
          <ol className="steps">
            {approach.map((s) => (
              <li key={s.step} className="step">
                <span className="step__num">{s.step}</span>
                <h3 className="step__title">{s.title}</h3>
                <p className="muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="news-h">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Newsroom</p>
            <h2 id="news-h" className="h2">Latest from Northvane</h2>
          </div>
          <ul className="news">
            {news.map((n) => (
              <li key={n.title} className="news__item">
                <time dateTime={n.date} className="news__date">{formatDate(n.date)}</time>
                <span className="news__cat">{n.category}</span>
                <p className="news__title">{n.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta" aria-labelledby="cta-h">
        <div className="container cta__inner">
          <div>
            <h2 id="cta-h" className="h2">{careersCta.heading}</h2>
            <p className="muted">{careersCta.body}</p>
          </div>
          <Link href="/contact" className="btn btn--primary">
            Get in touch
          </Link>
        </div>
      </section>

      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_NAME, url: SITE_URL }} />
    </>
  );
}
