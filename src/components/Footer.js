'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Asset from '@/components/Asset';
import SocialRow from '@/components/SocialRow';
import { CONTACT, NAV_LINKS } from '@/data/site';

export default function Footer() {
  const pathname = usePathname();
  const linkStyle = { color: '#c7c7e6' };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-brand">
            <Asset src="Favicon.png" alt="Kazadi Mukendi logo" sizes="44px" />
            <h2>Kazadi Mukendi</h2>
          </div>
          <p>Full Stack Web Developer, building from the ground up.</p>
          <small>© 2026 Kazadi Mukendi. All rights reserved.</small>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={pathname === href ? 'active' : undefined}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>
            <a href={CONTACT.emailHref} style={linkStyle}>
              <i className="fas fa-envelope"></i> {CONTACT.email}
            </a>
          </p>
          <p>
            <a href={CONTACT.phoneHref} style={linkStyle}>
              <i className="fas fa-phone"></i> {CONTACT.phone}
            </a>
          </p>
          {/* The old contact page footer had no social icons (they're already on the page). */}
          {pathname !== '/contact' && <SocialRow />}
        </div>
      </div>
    </footer>
  );
}
