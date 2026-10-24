'use client';

import { createContext, useContext } from 'react';

// nav(href): navigate with the curtain transition.
export const NavContext = createContext((href) => {});
export const useNav = () => useContext(NavContext);

// { activeId, open(id), close() }: the case study drawer.
export const CaseContext = createContext({ activeId: null, open: () => {}, close: () => {} });
export const useCase = () => useContext(CaseContext);

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
