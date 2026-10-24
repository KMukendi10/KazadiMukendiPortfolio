'use client';

import { useEffect, useRef } from 'react';

// Wraps a button/link so it leans toward the pointer when it gets close.
export default function Magnetic({ children, strength = 0.3, className = '' }) {
  const wrap = useRef(null);
  const inner = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = wrap.current;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      inner.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const leave = () => {
      inner.current.style.transform = 'translate(0, 0)';
    };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => {
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseleave', leave);
    };
  }, [strength]);

  return (
    <span className={`magnetic ${className}`.trim()} ref={wrap}>
      <span className="magnetic__inner" ref={inner}>
        {children}
      </span>
    </span>
  );
}
