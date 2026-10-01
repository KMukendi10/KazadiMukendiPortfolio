'use client';

import { useRouter } from 'next/navigation';

// A <button> that navigates (the hero buttons are styled as buttons in the CSS).
export default function LinkButton({ href, className, children }) {
  const router = useRouter();
  return (
    <button type="button" className={className} onClick={() => router.push(href)}>
      {children}
    </button>
  );
}
