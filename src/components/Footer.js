'use client';

import { usePathname } from 'next/navigation';
import Clock from '@/components/Clock';
import Magnetic from '@/components/Magnetic';
import SocialRow from '@/components/SocialRow';
import TLink from '@/components/TLink';
import { CONTACT, NAV_LINKS } from '@/data/site';
import Icon from '@/components/Icon';

export default function Footer() {
  const pathname = usePathname();
  const onContact = pathname === '/contact';

  return (
    <footer className="site-footer">
      {!onContact && (
        <div className="site-footer__cta">
          <p className="site-footer__ask">Have a role or a project in mind?</p>
          <Magnetic strength={0.2}>
            <TLink href="/contact" className="site-footer__big" data-cursor="Write">
              Let&apos;s talk
            </TLink>
          </Magnetic>
        </div>
      )}

      <div className="site-footer__grid">
        <div>
          <p className="site-footer__label">Contact</p>
          <a href={CONTACT.emailHref} target="_blank" rel="noopener noreferrer">{CONTACT.email}</a>
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <Clock />
        </div>
        <div>
          <p className="site-footer__label">Pages</p>
          {NAV_LINKS.map(({ href, label }) => (
            <TLink key={href} href={href}>{label}</TLink>
          ))}
        </div>
        <div>
          <p className="site-footer__label">Elsewhere</p>
          <SocialRow />
          <a href="/Assets/KazadiMukendi-CV.pdf" download>Download CV</a>
        </div>
      </div>

      <div className="site-footer__base">
        <small>© 2026 Kazadi Mukendi. Built with Next.js.</small>
        <button type="button" className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top <Icon name="arrow-up" />
        </button>
      </div>
    </footer>
  );
}
