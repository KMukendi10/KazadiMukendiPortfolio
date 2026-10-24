import { projectCards } from '@/data/projects';

export const COLORS = {
  cobalt: '#2340FF',
  coral: '#FF5C7A',
  mint: '#6EF0C0',
  sun: '#FFD84A',
  lilac: '#C8BFFF',
  tang: '#FF8A3D',
  ink: '#0B1033',
};

// Each project gets its own colour (cycled in grid order). `fg` is the readable text colour on it.
const CYCLE = [COLORS.coral, COLORS.mint, COLORS.sun, COLORS.lilac, COLORS.tang, COLORS.cobalt];

export function projectColor(id) {
  const i = Math.max(0, projectCards.findIndex((c) => c.id === id));
  const bg = CYCLE[i % CYCLE.length];
  return { bg, fg: bg === COLORS.cobalt ? '#FFFFFF' : COLORS.ink };
}
