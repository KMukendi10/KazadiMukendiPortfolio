'use client';

import { useEffect, useRef } from 'react';

// The hero name. Every letter gets heavier the closer the pointer is.
// On touch devices (no pointer) the letters ripple on their own via CSS instead.
export default function HeroName({ lines }) {
  const root = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const chars = Array.from(root.current.querySelectorAll('.hero-name__ch'));
    let frame = 0;
    let px = 0;
    let py = 0;
    let active = false;

    const paint = () => {
      frame = 0;
      chars.forEach((c) => {
        const r = c.getBoundingClientRect();
        const dx = px - (r.left + r.width / 2);
        const dy = py - (r.top + r.height / 2);
        const t = Math.max(0, 1 - Math.hypot(dx, dy) / 300);
        const eased = t * t * (3 - 2 * t);
        c.style.fontVariationSettings = `'wght' ${Math.round(400 + eased * 400)}, 'wdth' ${Math.round(100 - eased * 12)}`;
        c.style.transform = `translateY(${(-eased * 10).toFixed(1)}px)`;
      });
    };
    const onMove = (e) => {
      active = true;
      px = e.clientX;
      py = e.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const onLeave = () => {
      active = false;
      chars.forEach((c) => {
        c.style.fontVariationSettings = '';
        c.style.transform = '';
      });
    };
    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  let n = 0;
  return (
    <h1 className="hero-name" ref={root} aria-label={lines.map((l) => l.text).join(' ')}>
      {lines.map((line) => (
        <span className={`hero-name__line${line.right ? ' hero-name__line--right' : ''}`} key={line.text} aria-hidden="true">
          <span className="hero-name__mask">
            {Array.from(line.text).map((ch) => {
              const i = n++;
              return (
                <span className="hero-name__rise" key={i} style={{ '--i': i }}>
                  <span className="hero-name__ch" style={{ '--i': i }}>{ch}</span>
                </span>
              );
            })}
          </span>
        </span>
      ))}
    </h1>
  );
}
