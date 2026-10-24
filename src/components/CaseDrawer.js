'use client';

import { useEffect, useRef, useState } from 'react';
import Asset from '@/components/Asset';
import RichText from '@/components/RichText';
import TLink from '@/components/TLink';
import { useCase } from '@/components/context';
import { projectColor } from '@/data/palette';
import { caseStudies, projectCards } from '@/data/projects';
import Icon from '@/components/Icon';

const SECTION_KEYS = ['problem', 'approach', 'tradeoffs', 'outcome'];

// Slide-in case study panel, shared by every page (opened from the featured stack and the work index).
export default function CaseDrawer() {
  const { activeId, open, close } = useCase();
  const [shownId, setShownId] = useState(null);
  const [leaving, setLeaving] = useState(false);
  const closeBtn = useRef(null);
  const scroller = useRef(null);

  // Keep the panel mounted for the slide-out animation.
  useEffect(() => {
    if (activeId) {
      setShownId(activeId);
      setLeaving(false);
      scroller.current?.scrollTo({ top: 0 });
      closeBtn.current?.focus({ preventScroll: true });
      return;
    }
    if (!shownId) return;
    setLeaving(true);
    const t = setTimeout(() => {
      setShownId(null);
      setLeaving(false);
    }, 420);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  useEffect(() => {
    document.body.classList.toggle('drawer-open', Boolean(shownId));
    return () => document.body.classList.remove('drawer-open');
  }, [shownId]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [close]);

  const study = shownId ? caseStudies[shownId] : null;
  const index = shownId ? projectCards.findIndex((c) => c.id === shownId) : -1;
  const color = shownId ? projectColor(shownId) : null;
  const prev = index > 0 ? projectCards[index - 1] : null;
  const next = index >= 0 && index < projectCards.length - 1 ? projectCards[index + 1] : null;

  return (
    <>
      <div className={`drawer-scrim${activeId ? ' drawer-scrim--on' : ''}`} onClick={close}></div>
      {study && (
        <aside
          className={`drawer${leaving ? ' drawer--leaving' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label={study.ariaLabel}
          style={{ '--accent': color.bg, '--accent-fg': color.fg }}
          ref={scroller}
        >
          <div className="drawer__bar">
            <div className="drawer__pager">
              <button type="button" onClick={() => prev && open(prev.id)} disabled={!prev} aria-label="Previous project">
                <Icon name="arrow-left" />
              </button>
              <button type="button" onClick={() => next && open(next.id)} disabled={!next} aria-label="Next project">
                <Icon name="arrow-right" />
              </button>
            </div>
            <button type="button" className="drawer__close" onClick={close} ref={closeBtn} aria-label="Close case study">
              Close <Icon name="close" />
            </button>
          </div>

          <div className="drawer__hero">
            <Asset src={study.image} alt={study.imageAlt} sizes="(max-width: 640px) 100vw, 560px" />
          </div>

          <div className="drawer__body">
            <p className="drawer__tag">
              <RichText>{study.tag}</RichText>
            </p>
            <h2 className="drawer__title">
              <RichText>{study.title}</RichText>
            </h2>

            {SECTION_KEYS.map((key) => (
              <section className="drawer__section" key={key}>
                <h3>{study.sections[key].heading}</h3>
                <p>
                  <RichText>{study.sections[key].body}</RichText>
                </p>
              </section>
            ))}

            <ul className="drawer__tools">
              {study.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>

            {study.team && (
              <p className="drawer__team">
                <RichText>{study.team}</RichText>
              </p>
            )}

            <div className="drawer__actions">
              {study.links.map((link) => {
                const cls = link.kind === 'primary' ? 'btn btn--accent' : 'btn btn--line';
                const icon = link.kind === 'primary' ? 'external' : 'github';
                const inner = (
                  <>
                    <Icon name={icon} /> {link.label}
                  </>
                );
                return link.internal ? (
                  <TLink href={link.href} className={cls} key={link.label} onClick={close}>
                    {inner}
                  </TLink>
                ) : (
                  <a href={link.href} className={cls} key={link.label} target="_blank" rel="noopener noreferrer">
                    {inner}
                  </a>
                );
              })}
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
