'use client';

import { useRef } from 'react';

// Tilts its child in 3D toward the pointer. Pure decoration, off for touch and reduced motion.
export default function Tilt({ children, className = '', max = 8 }) {
  const ref = useRef(null);
  const enabled = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onMove = (e) => {
    if (!enabled()) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg) scale(1.02)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <div className={`tilt ${className}`.trim()} ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}
