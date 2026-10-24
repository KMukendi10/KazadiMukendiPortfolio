'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Asset from '@/components/Asset';
import { useCase } from '@/components/context';
import { projectColor } from '@/data/palette';
import { projectCards } from '@/data/projects';
import Icon from '@/components/Icon';

const FILTERS = [
  { id: 'all', label: 'Everything', test: () => true },
  { id: 'react', label: 'React', test: (c) => c.tags.includes('React') },
  { id: 'js', label: 'Plain JavaScript', test: (c) => !c.tags.includes('React') && c.tags.includes('JavaScript') },
  { id: 'campaign', label: 'Campaign sites', test: (c) => c.tags.includes('Campaign') },
  { id: 'data', label: 'Backend and data', test: (c) => c.tags.some((t) => ['Firebase', 'Backend', 'Open Library API', 'Context API'].includes(t)) },
];

// All projects as one big list. Hover a row and its screenshot follows the cursor; click to read the case study.
export default function ProjectIndex({ showFilters = true }) {
  const { open } = useCase();
  const [filter, setFilter] = useState('all');
  const [hovered, setHovered] = useState(null);
  const [seen, setSeen] = useState(() => new Set()); // previews load on first hover, not all at page load
  const preview = useRef(null);

  const hover = (id) => {
    setHovered(id);
    setSeen((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));
  };

  const rows = useMemo(() => projectCards.filter(FILTERS.find((f) => f.id === filter).test), [filter]);

  // The preview image trails the pointer with a little lag and leans with its speed.
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const el = preview.current;
    let tx = 0, ty = 0, x = 0, y = 0, rot = 0, frame;
    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      const nx = x + (tx - x) * 0.14;
      const ny = y + (ty - y) * 0.14;
      rot += (Math.max(-12, Math.min(12, (nx - x) * 0.6)) - rot) * 0.2;
      x = nx;
      y = ny;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${rot.toFixed(2)}deg)`;
      frame = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', onMove);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div className="index">
      {showFilters && (
        <div className="index__filters" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`chip${filter === f.id ? ' chip--on' : ''}`}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
          <span className="index__count" aria-live="polite">
            {rows.length} {rows.length === 1 ? 'project' : 'projects'}
          </span>
        </div>
      )}

      <ul className={`index__list${hovered ? ' index__list--hovering' : ''}`} onMouseLeave={() => setHovered(null)}>
        {rows.map((card) => {
          const color = projectColor(card.id);
          return (
            <li key={card.id} className={`row${hovered === card.id ? ' row--on' : ''}`} style={{ '--row': color.bg, '--row-fg': color.fg }}>
              <button
                type="button"
                className="row__main"
                onMouseEnter={() => hover(card.id)}
                onFocus={() => hover(card.id)}
                onBlur={() => setHovered(null)}
                onClick={() => open(card.id)}
                data-cursor="Open"
              >
                <span className="row__text">
                  <span className="row__title">{card.title}</span>
                  <span className="row__value">{card.outcome}</span>
                </span>
                <span className="row__tags">{card.tags.join(', ')}</span>
                <span className="row__thumb" aria-hidden="true">
                  <Asset src={card.image} alt="" sizes="120px" />
                </span>
              </button>
              <a
                className="row__visit"
                href={card.visit}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${card.title}`}
                onMouseEnter={() => setHovered(null)}
              >
                Visit <Icon name="external" />
              </a>
            </li>
          );
        })}
      </ul>

      <div className={`index__preview${hovered ? ' index__preview--on' : ''}`} ref={preview} aria-hidden="true">
        <div className="index__frame" style={{ '--row': hovered ? projectColor(hovered).bg : 'transparent' }}>
          {projectCards.filter((card) => seen.has(card.id)).map((card) => (
            <div className={`index__img${hovered === card.id ? ' index__img--on' : ''}`} key={card.id}>
              <Asset src={card.image} alt="" sizes="380px" loading="eager" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
