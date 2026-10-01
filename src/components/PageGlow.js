'use client';

import { useEffect, useState } from 'react';

// Cursor-follow spotlight glow over the whole page.
export default function PageGlow() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setEnabled(true);

    const onMove = (e) => {
      document.documentElement.style.setProperty('--gx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--gy', `${e.clientY}px`);
    };
    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return enabled ? <div className="page-glow"></div> : null;
}
