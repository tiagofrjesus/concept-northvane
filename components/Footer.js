import Link from 'next/link';
import { NAV, content } from '@/lib/site';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="footer__brand">
            <Logo size={26} />
            <span>Northvane Defence Systems</span>
          </div>
          <p className="muted">Sensing, autonomy and secure communications for allied defence.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer__links">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="footer__offices">
          {content.contact.offices.map((o) => (
            <li key={o.city}>
              <strong>{o.city}</strong>
              <span className="muted">{o.role}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="container footer__legal">
        <p>© {new Date().getFullYear()} Northvane Defence Systems</p>
        <p className="footer__disclaimer">
          Design concept. Northvane is a fictional company; all names, figures and products are illustrative.
        </p>
      </div>
    </footer>
  );
}
