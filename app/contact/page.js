import PageHero from '@/components/PageHero';
import { content } from '@/lib/site';

export const metadata = {
  title: 'Contact',
  description: 'Contact Northvane Defence Systems in Lisbon, Toulouse or Gothenburg for technical and programme enquiries.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  const { contact } = content;

  return (
    <>
      <PageHero eyebrow="Contact" title={contact.heading} lead={contact.body} crumbs={[{ label: 'Contact' }]} />
      <section className="section">
        <div className="container">
          <ul className="offices">
            {contact.offices.map((o) => (
              <li key={o.city} className="office">
                <p className="cap__domain">{o.role}</p>
                <h2 className="office__city">{o.city}</h2>
                <address className="muted">{o.address}</address>
              </li>
            ))}
          </ul>
          <div className="notice">
            <p className="eyebrow">Enquiries</p>
            <p className="lead">
              Programme and export-controlled enquiries are handled through our secure channel. Please contact your
              regional office to be registered.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
