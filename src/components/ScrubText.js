'use client';

import { useEffect, useRef } from 'react';

// Text whose words light up one by one as the block scrolls through the viewport.
export default function ScrubText({ children, as: Tag = 'p', className = '' }) {
  const ref = useRef(null);
  const words = String(children).split(' ');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll('.scrub__w'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      spans.forEach((s) => s.classList.add('is-on'));
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      const lit = Math.round(progress * spans.length);
      spans.forEach((s, i) => s.classList.toggle('is-on', i < lit));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <Tag className={`scrub ${className}`.trim()} ref={ref}>
      {words.map((w, i) => (
        <span key={i}>
          <span className="scrub__w">{w}</span>{' '}
        </span>
      ))}
    </Tag>
  );
}
