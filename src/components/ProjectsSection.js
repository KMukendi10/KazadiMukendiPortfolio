'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import Asset from '@/components/Asset';
import RichText from '@/components/RichText';
import { caseStudies, projectCards } from '@/data/projects';

const SECTION_KEYS = ['problem', 'approach', 'tradeoffs', 'outcome'];

function Arrow() {
  return (
    <svg className="action-arrow" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 13 13 3M6 3h7v7"></path>
    </svg>
  );
}

// The projects grid + the slide-in case-study drawer (one drawer open at a time).
export default function ProjectsSection() {
  const [activeId, setActiveId] = useState(null);
  const [visibleIds, setVisibleIds] = useState(() => new Set());
  const sectionRef = useRef(null);
  const cardRefs = useRef({});

  const open = useCallback((id) => {
    if (!caseStudies[id]) return;
    setActiveId(id);
    window.history.replaceState(null, '', `#${id}`);
  }, []);

  const close = useCallback(() => setActiveId(null), []);

  const activeIndex = activeId ? projectCards.findIndex((card) => card.id === activeId) : -1;

  const move = (offset) => {
    const next = projectCards[activeIndex + offset];
    if (next) open(next.id);
  };

  // Open a case study straight from the URL: /projects#airbnb-clone
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && caseStudies[hash]) setActiveId(hash);
  }, []);

  // Lock page scroll while a drawer is open.
  useEffect(() => {
    document.body.classList.toggle('drawer-open', activeId !== null);
    return () => document.body.classList.remove('drawer-open');
  }, [activeId]);

  // Esc closes the drawer.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [close]);

  // Cards fade in one by one as they scroll into view, and reset once the whole grid has left the screen.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = Object.entries(cardRefs.current);

    if (!('IntersectionObserver' in window)) {
      setVisibleIds(new Set(projectCards.map((c) => c.id)));
      return;
    }

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setVisibleIds((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    );
    cards.forEach(([, el]) => el && cardObserver.observe(el));

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setVisibleIds(new Set());
      },
      { threshold: 0 }
    );
    sectionObserver.observe(section);

    return () => {
      cardObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <>
      <section className="fade-in fade-in-tall" ref={sectionRef}>
        <div className="container">
          <div className="section-header">
            <p className="section-label">DEPLOYED PROJECTS</p>
            <h2>What I&apos;ve built</h2>
            <p className="section-hint">
              Click a project to open its full case study — the problem, my approach, trade-offs, and the links.
            </p>
          </div>
        </div>

        <div className="card-grid" id="project-grid">
          {projectCards.map((card) => (
            <div
              className={`col${visibleIds.has(card.id) ? ' visible' : ''}`}
              key={card.id}
              data-id={card.id}
              ref={(el) => {
                cardRefs.current[card.id] = el;
              }}
            >
              <article
                className="project-card project-preview"
                id={card.id}
                tabIndex={0}
                role="button"
                aria-haspopup="dialog"
                aria-controls={`case-${card.id}`}
                onClick={() => open(card.id)}
                onKeyDown={(e) => {
                  // Ignore keys pressed on the inner "Visit" link so it still works from the keyboard.
                  if (e.target !== e.currentTarget) return;
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    open(card.id);
                  }
                }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="project-head-text">
                      <span className="project-title">
                        <Asset src={card.icon} className="project-logo-icon" alt="" sizes="34px" />
                        <span className="card-title title">{card.title}</span>
                      </span>
                      <p className="stacks m-0">
                        {card.tags.map((tag) => (
                          <span className="stack-tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </p>
                    </div>
                    <a
                      href={card.visit}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="visit-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit <Arrow />
                    </a>
                  </div>
                </div>
                <div className="description-container">
                  <p className="description">{card.description}</p>
                </div>
                <div className="card-img-wrap">
                  <Asset
                    src={card.image}
                    className="card-img-top"
                    alt={card.imageAlt}
                    sizes="(max-width: 480px) 100vw, 420px"
                  />
                  <div className="preview-overlay">
                    <span className="preview-cta">
                      Read More <Arrow />
                    </span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      {/* Case study drawer (shared) */}
      <div className={`drawer-overlay${activeId ? ' active' : ''}`} id="drawerOverlay" onClick={close}></div>
      <div className={`case-nav${activeId ? ' active' : ''}`} id="caseNav" aria-label="Project navigation">
        <button
          type="button"
          className="case-nav-btn"
          id="casePrev"
          aria-label="Previous project"
          disabled={activeIndex <= 0}
          onClick={() => move(-1)}
        >
          <i className="fa-solid fa-arrow-left" aria-hidden="true"></i> Previous
        </button>
        <button
          type="button"
          className="case-nav-btn"
          id="caseNext"
          aria-label="Next project"
          disabled={activeIndex === projectCards.length - 1}
          onClick={() => move(1)}
        >
          Next <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>

      {Object.values(caseStudies).map((study) => (
        <aside
          className={`case-drawer${activeId === study.id ? ' active' : ''}`}
          id={`case-${study.id}`}
          key={study.id}
          role="dialog"
          aria-label={study.ariaLabel}
        >
          <button className="drawer-close" aria-label="Close case study" onClick={close}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <Asset
            src={study.image}
            alt={study.imageAlt}
            className="case-drawer-thumb"
            sizes="(max-width: 520px) 100vw, 520px"
          />
          <span className="project-tag">{study.tag}</span>
          <h3 className="case-drawer-title">{study.title}</h3>

          {SECTION_KEYS.map((key) => (
            <div className={`case-section case-${key}`} key={key}>
              <h4>{study.sections[key].heading}</h4>
              <p>
                <RichText>{study.sections[key].body}</RichText>
              </p>
            </div>
          ))}

          <div className="tools-chips">
            {study.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>

          {study.team && (
            <p className="case-drawer-team">
              <RichText>{study.team}</RichText>
            </p>
          )}

          <div className="case-actions">
            {study.links.map((link) => {
              const className = link.kind === 'primary' ? 'cs-btn' : 'cs-btn-outline';
              const icon =
                link.kind === 'primary' ? 'fa-solid fa-arrow-up-right-from-square' : 'fa-brands fa-github';
              const content = (
                <>
                  <i className={icon}></i> {link.label}
                </>
              );
              return link.internal ? (
                <Link href={link.href} className={className} key={link.label}>
                  {content}
                </Link>
              ) : (
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={className} key={link.label}>
                  {content}
                </a>
              );
            })}
          </div>
        </aside>
      ))}
    </>
  );
}
