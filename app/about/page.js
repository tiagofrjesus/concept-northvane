import PageHero from '@/components/PageHero';
import { content } from '@/lib/site';

export const metadata = {
  title: 'Company',
  description: 'Founded in Lisbon in 2009, Northvane designs high-integrity defence systems from engineering centres in Lisbon, Toulouse and Gothenburg.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  const { about, certifications } = content;

  return (
    <>
      <PageHero eyebrow="Company" title={about.heading} crumbs={[{ label: 'Company' }]} />

      <section className="section">
        <div className="container split">
          <p className="eyebrow">Who we are</p>
          <div className="prose">
            {about.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="val-h">
        <div className="container">
          <h2 id="val-h" className="h2 section__head">What we hold ourselves to</h2>
          <ul className="values">
            {about.values.map((v) => (
              <li key={v.title} className="value">
                <h3 className="value__title">{v.title}</h3>
                <p className="muted">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="tl-h">
        <div className="container split">
          <h2 id="tl-h" className="h2">Milestones</h2>
          <ol className="timeline">
            {about.timeline.map((t) => (
              <li key={t.year}>
                <span className="timeline__year">{t.year}</span>
                <span>{t.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="q-h">
        <div className="container split">
          <h2 id="q-h" className="h2">Quality and security</h2>
          <ul className="certs certs--lg">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
