'use client';

import Link from 'next/link';
import { useNav } from '@/components/context';

// next/link that plays the page-transition curtain for internal navigation.
export default function TLink({ href, onClick, children, ...rest }) {
  const nav = useNav();
  return (
    <Link
      href={href}
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        nav(href);
      }}
    >
      {children}
    </Link>
  );
}
