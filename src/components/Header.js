'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Asset from '@/components/Asset';
import { NAV_LINKS } from '@/data/site';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [theme, setTheme] = useState('light');
  const menuOpenRef = useRef(false);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  // Close the mobile menu whenever the page changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Theme: the <head> script already applied data-theme before paint; just sync the icon.
  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    if (next === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    try {
      localStorage.setItem('theme', next);
    } catch {}
    setTheme(next);
  };

  // Hide header on scroll down, show on scroll up.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const hideThreshold = 100;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        if (!menuOpenRef.current) {
          setHidden(currentY > lastY && currentY > hideThreshold);
        }
        lastY = currentY;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={hidden ? 'header-hidden' : undefined}>
      <nav className="navbar">
        <div className="logo">
          <Link href="/" className="logo-link" aria-label="Go to home">
            <Asset src="Favicon.png" alt="Kazadi Mukendi" sizes="40px" priority />
            <h2>Kazadi Mukendi</h2>
          </Link>
        </div>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={pathname === href ? 'active' : undefined}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="theme-toggle" id="themeToggle" aria-label="Toggle dark mode" onClick={toggleTheme}>
          <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}
