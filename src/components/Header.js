'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import TLink from '@/components/TLink';
import { NAV_LINKS } from '@/data/site';
import Icon from '@/components/Icon';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const menuRef = useRef(false);

  useEffect(() => setMenuOpen(false), [pathname]);

  // The <head> script already applied data-theme before paint; just sync the icon.
  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  }, []);

  // Past the hero the header gets a solid background so it never overlaps content; it slides away
  // while scrolling down and returns on the way up.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 80);
        if (!menuRef.current) setHidden(y > lastY && y > 240);
        lastY = y;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    menuRef.current = menuOpen;
    if (menuOpen) setHidden(false);
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    if (next === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    try {
      localStorage.setItem('theme', next);
    } catch {}
    setTheme(next);
  };

  return (
    <>
      {/* Over the hero: mix-blend-mode: difference keeps it readable on any colour. After scrolling: solid bar. */}
      <header
        className={`site-header${scrolled && !menuOpen ? ' site-header--solid' : ''}${(pathname === '/' && !scrolled) || menuOpen ? ' site-header--hero' : ''}${hidden ? ' site-header--hidden' : ''}`}
      >
        <TLink href="/" className="site-header__brand" aria-label="Kazadi Mukendi, home">
          Kazadi Mukendi
        </TLink>

        <nav className="site-header__nav" aria-label="Main">
          {NAV_LINKS.map(({ href, label }) => (
            <TLink key={href} href={href} className="roll" aria-current={pathname === href ? 'page' : undefined}>
              <span className="roll__a">{label}</span>
              <span className="roll__b" aria-hidden="true">{label}</span>
            </TLink>
          ))}
        </nav>

        <div className="site-header__tools">
          <button className="icon-btn" aria-label="Toggle dark mode" onClick={toggleTheme}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button
            className="menu-btn"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map(({ href, label }) => (
            <TLink key={href} href={href} aria-current={pathname === href ? 'page' : undefined} tabIndex={menuOpen ? 0 : -1}>
              {label}
            </TLink>
          ))}
        </nav>
      </div>
    </>
  );
}
