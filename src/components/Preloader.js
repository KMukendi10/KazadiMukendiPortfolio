'use client';

import { useEffect, useState } from 'react';

// Intro once per browser session: counter, then the curtain lifts and the hero name rises in.
// Adds html.intro-done when it finishes (the hero animation waits for that class).
export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const [lifting, setLifting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    // Returning in the same browser session: the head script already skipped the intro.
    if (root.classList.contains('intro-seen')) {
      root.classList.add('intro-done');
      setGone(true);
      return;
    }

    const done = () => {
      try {
        sessionStorage.setItem('intro', '1');
      } catch {}
      root.classList.add('intro-done');
      setLifting(true);
      setTimeout(() => setGone(true), 800);
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.add('intro-done');
      setGone(true);
      return;
    }

    let p = 0;
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      clearInterval(timer);
      clearTimeout(safety);
      setPercent(100);
      setTimeout(done, 150);
    };
    const timer = setInterval(() => {
      p = Math.min(100, p + Math.floor(Math.random() * 11) + 12);
      setPercent(p);
      if (p >= 100) finish();
    }, 60);
    const safety = setTimeout(finish, 1500); // never trap the visitor

    return () => {
      clearInterval(timer);
      clearTimeout(safety);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`preloader${lifting ? ' preloader--lift' : ''}`} aria-hidden="true">
      <p className="preloader__name">Kazadi Mukendi</p>
      <p className="preloader__count">{percent}</p>
    </div>
  );
}
