'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import CaseDrawer from '@/components/CaseDrawer';
import Cursor from '@/components/Cursor';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';
import { CaseContext, NavContext, prefersReducedMotion } from '@/components/context';
import { caseStudies } from '@/data/projects';
import { PAGE_NAMES } from '@/data/site';

// Everything that wraps every page: preloader, page-transition curtain, header, footer,
// cursor and the shared case study drawer.
export default function Shell({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  // ---- page transition curtain ----
  const [phase, setPhase] = useState('idle'); // idle | in | out
  const [curtainLabel, setCurtainLabel] = useState('');
  const phaseRef = useRef('idle');
  const setPhaseBoth = (p) => {
    phaseRef.current = p;
    setPhase(p);
  };

  const nav = useCallback(
    (href) => {
      const target = href.split('#')[0] || pathname;
      if (target === pathname || prefersReducedMotion()) {
        router.push(href);
        return;
      }
      setCurtainLabel(PAGE_NAMES[target] ?? '');
      setPhaseBoth('in');
      setTimeout(() => router.push(href), 520);
      setTimeout(() => phaseRef.current === 'in' && setPhaseBoth('idle'), 3500); // safety
    },
    [pathname, router]
  );

  useEffect(() => {
    if (phaseRef.current !== 'in') return;
    window.scrollTo(0, 0);
    setPhaseBoth('out');
    const t = setTimeout(() => setPhaseBoth('idle'), 750);
    return () => clearTimeout(t);
  }, [pathname]);

  // ---- case study drawer (also opens from /projects#some-id) ----
  const [activeId, setActiveId] = useState(null);
  const open = useCallback((id) => {
    if (!caseStudies[id]) return;
    setActiveId(id);
    window.history.replaceState(null, '', `${window.location.pathname}#${id}`);
  }, []);
  const close = useCallback(() => {
    setActiveId(null);
    if (window.location.hash) window.history.replaceState(null, '', window.location.pathname);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (pathname === '/projects' && hash && caseStudies[hash]) setActiveId(hash);
    else setActiveId(null);
  }, [pathname]);

  const caseValue = useMemo(() => ({ activeId, open, close }), [activeId, open, close]);

  return (
    <NavContext.Provider value={nav}>
      <CaseContext.Provider value={caseValue}>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Preloader />
        <Header />
        <main id="main" className="page" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <CaseDrawer />
        <Cursor />
        <div className="curtain" data-phase={phase} aria-hidden="true">
          <span className="curtain__label">{curtainLabel}</span>
        </div>
      </CaseContext.Provider>
    </NavContext.Provider>
  );
}
