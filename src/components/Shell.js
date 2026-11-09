'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageGlow from '@/components/PageGlow';
import Preloader from '@/components/Preloader';

// Everything that wraps every page: preloader, background blobs, header, footer, cursor effects.
export default function Shell({ children }) {
  const pathname = usePathname();

  // CSS only hides .fade-in content once this class is present, so if JS fails
  // the sections are never left permanently invisible.
  useEffect(() => {
    document.documentElement.classList.add('js-ready');
  }, []);

  // Flash a highlight ring on the element a #anchor link points to.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    const target = id ? document.getElementById(id) : null;
    if (!target) return;
    target.classList.add('anchor-highlight');
    const remove = () => target.classList.remove('anchor-highlight');
    target.addEventListener('animationend', remove, { once: true });
    return () => target.removeEventListener('animationend', remove);
  }, [pathname]);

  // The old site loaded Bootstrap on the Projects page only. .bs-page scopes it the same way
  // (see src/app/bootstrap-scoped.css).
  return (
    <div className={pathname === '/projects' ? 'bs-page' : undefined}>
      <Preloader />
      <div className="bg-fx">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Header />
      {children}
      <Footer />
      <PageGlow />
      <CustomCursor />
    </div>
  );
}
