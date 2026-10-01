'use client';

export default function ScrollButton({ targetId, className, children }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })}
    >
      {children}
    </button>
  );
}
