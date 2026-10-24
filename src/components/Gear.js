'use client';

import { useEffect, useRef } from 'react';

function gearPath(teeth, outer, inner, hole) {
  const pts = [];
  const step = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    // each tooth: base-left, top-left, top-right, base-right
    [[0, inner], [0.18, outer], [0.5 - 0.18, outer], [0.5, inner]].forEach(([f, r]) => {
      const ang = a + f * step;
      pts.push(`${(Math.cos(ang) * r).toFixed(2)},${(Math.sin(ang) * r).toFixed(2)}`);
    });
  }
  const ring = `M${pts.join('L')}Z`;
  const h = `M${hole},0A${hole},${hole} 0 1,0 ${-hole},0A${hole},${hole} 0 1,0 ${hole},0Z`;
  return ring + h;
}

// Decorative outline gear that turns as the page scrolls (the engineering side of the brand).
export default function Gear({ className = '', teeth = 14 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      el.style.transform = `rotate(${window.scrollY * 0.12}deg)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <svg ref={ref} className={`gear ${className}`.trim()} viewBox="-100 -100 200 200" aria-hidden="true" focusable="false">
      <path d={gearPath(teeth, 96, 80, 34)} fill="none" stroke="currentColor" strokeWidth="1.2" fillRule="evenodd" />
    </svg>
  );
}
