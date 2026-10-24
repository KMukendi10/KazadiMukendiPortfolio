'use client';

import { useEffect, useRef } from 'react';
import Asset from '@/components/Asset';
import Magnetic from '@/components/Magnetic';
import Tilt from '@/components/Tilt';
import { useCase } from '@/components/context';
import { projectColor } from '@/data/palette';
import { projectCards } from '@/data/projects';
import Icon from '@/components/Icon';

// What each featured project means for a business, in one sentence (taken from the case studies and CV).
const FEATURED = [
  {
    id: 'airbnb-clone',
    outcome:
      'A rental platform split into three independent apps, the guest site, the admin dashboard and the API, so each can be deployed, secured and changed without touching the others.',
  },
  {
    id: 'urban-threads',
    outcome:
      'An online store where the cart follows the shopper’s account and login only appears at Add to Cart. Less friction for buyers and fewer carts lost to a refresh.',
  },
  {
    id: 'ihub-capstone',
    outcome:
      'Six people, one codebase, and no unresolved merge conflicts reaching main. I ran the Git workflow and reviewed every pull request before it merged.',
  },
];

// Big coloured panels that stack on top of each other as you scroll.
export default function FeaturedStack() {
  const { open } = useCase();
  const panels = useRef([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      if (window.innerWidth < 900) {
        panels.current.forEach((p) => p && (p.style.transform = ''));
        return;
      }
      const vh = window.innerHeight;
      panels.current.forEach((p, i) => {
        const next = panels.current[i + 1];
        if (!p || !next) return;
        const progress = Math.min(1, Math.max(0, (vh - next.getBoundingClientRect().top) / (vh * 0.85)));
        p.style.transform = `scale(${1 - progress * 0.07})`;
        p.style.setProperty('--dim', (progress * 0.35).toFixed(3));
      });
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
    <div className="stack">
      {FEATURED.map(({ id, outcome }, i) => {
        const card = projectCards.find((c) => c.id === id);
        const color = projectColor(id);
        return (
          <article
            className="stack__panel"
            key={id}
            ref={(el) => (panels.current[i] = el)}
            style={{ '--bg-panel': color.bg, '--fg-panel': color.fg, '--i': i }}
          >
            <div className="stack__text">
              <h3 className="stack__title">{card.title}</h3>
              <ul className="stack__tags">
                {card.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="stack__outcome">{outcome}</p>
              <div className="stack__actions">
                <Magnetic>
                  <button type="button" className="btn btn--solid" onClick={() => open(id)} data-cursor="Open">
                    Read the case study
                  </button>
                </Magnetic>
                <a href={card.visit} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                  Visit <Icon name="external" />
                </a>
              </div>
            </div>
            <Tilt className="stack__shot">
              <div className="browser">
                <div className="browser__bar" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <Asset src={card.image} alt={card.imageAlt} sizes="(max-width: 900px) 100vw, 640px" />
              </div>
            </Tilt>
          </article>
        );
      })}
    </div>
  );
}
