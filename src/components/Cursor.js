'use client';

import { useEffect, useRef, useState } from 'react';

// Desktop cursor: a ring that trails the pointer, grows over links, and shows a
// label for anything with data-cursor="Label". Disabled on touch devices.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState('');
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const ok =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(ok);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add('has-cursor');
    const ring = ringRef.current;
    const dot = dotRef.current;
    let mx = -100, my = -100, rx = -100, ry = -100, frame;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    };
    const onOver = (e) => {
      const t = e.target;
      if (!t.closest) return;
      const labelled = t.closest('[data-cursor]');
      setLabel(labelled ? labelled.getAttribute('data-cursor') : '');
      const hot = labelled || t.closest('a, button, [role="button"], input, textarea, label');
      ring.classList.toggle('cursor-ring--hot', Boolean(hot));
      ring.classList.toggle('cursor-ring--label', Boolean(labelled));
    };
    const onLeave = () => {
      ring.style.opacity = '0';
      dot.style.opacity = '0';
    };
    const onEnter = () => {
      ring.style.opacity = '1';
      dot.style.opacity = '1';
    };
    const tick = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      frame = requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    tick();
    return () => {
      root.classList.remove('has-cursor');
      cancelAnimationFrame(frame);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div className="cursor-ring" ref={ringRef} aria-hidden="true">
        <span className="cursor-ring__label">{label}</span>
      </div>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true"></div>
    </>
  );
}
