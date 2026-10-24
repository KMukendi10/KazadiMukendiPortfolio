'use client';

import { useEffect, useRef } from 'react';
import TechIcon from '@/components/TechIcon';

// Endless scrolling band. Speeds up (and pushes in the scroll direction) while the page is scrolled.
export default function Marquee({ items, className = '' }) {
  const track = useRef(null);

  useEffect(() => {
    const el = track.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let x = 0;
    let vel = 0;
    let lastY = window.scrollY;
    let last = performance.now();
    let frame;
    const onScroll = () => {
      const y = window.scrollY;
      vel = Math.max(-60, Math.min(60, (y - lastY) * 1.2));
      lastY = y;
    };
    const tick = (now) => {
      const dt = Math.min(50, now - last) / 1000;
      last = now;
      const half = el.scrollWidth / 2;
      x -= (60 + vel * 12) * dt;
      vel *= 0.92;
      if (x <= -half) x += half;
      if (x > 0) x -= half;
      el.style.transform = `translate3d(${x}px, 0, 0)`;
      frame = requestAnimationFrame(tick);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const row = items.map((item, i) => (
    <span className="marquee__item" key={item + i}>
      <TechIcon name={item} />
      {item}
      <span className="marquee__dot" aria-hidden="true"></span>
    </span>
  ));

  return (
    <div className={`marquee ${className}`.trim()} aria-label={items.join(', ')} role="group">
      <div className="marquee__track" ref={track} aria-hidden="true">
        {row}
        {row}
      </div>
    </div>
  );
}
