'use client';

import { useEffect, useRef, useState } from 'react';

// Scroll fade-in section. Fades in when 15% is visible, fades out when it leaves
// (same behaviour as the old script.js). Styling lives in globals.css (.fade-in / .visible).
export default function FadeIn({ as: Tag = 'section', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15, rootMargin: '0px 0px -15% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`${className} fade-in${visible ? ' visible' : ''}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
