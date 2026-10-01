'use client';

import { useEffect, useState } from 'react';

const MESSAGES = [
  '// booting portfolio.exe',
  '// compiling good vibes',
  '// linting the CSS',
  '// waking up the servers',
  '// npm install patience',
  '// almost there...',
];

// Loading screen: percentage counter + rotating messages. Runs on every full page load
// (not on client-side navigation between pages).
export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let done = false;
    let interval;
    let finishTimer;
    let removeTimer;

    const finish = () => {
      if (done) return;
      done = true;
      clearInterval(interval);
      clearTimeout(safetyTimer);
      clearTimeout(finishTimer);
      setHidden(true);
      removeTimer = setTimeout(() => setRemoved(true), 600);
    };

    // Hard safety net: never let the preloader sit on screen for more than 4 seconds.
    const safetyTimer = setTimeout(finish, 4000);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish();
    } else {
      let p = 0;
      interval = setInterval(() => {
        p += Math.floor(Math.random() * 9) + 4; // +4 to +12 per tick
        if (p >= 100) {
          p = 100;
          clearInterval(interval);
          finishTimer = setTimeout(finish, 300);
        }
        setPercent(p);
      }, 120);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimer);
      clearTimeout(finishTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  const message = MESSAGES[Math.min(MESSAGES.length - 1, Math.floor((percent / 100) * MESSAGES.length))];

  return (
    <div id="preloader" className={hidden ? 'preloader-hidden' : undefined} aria-hidden="true">
      <div className="preloader-inner">
        <span className="preloader-percent">{percent}%</span>
        <p className="preloader-msg">{message}</p>
        <div className="preloader-bar">
          <span style={{ width: `${percent}%` }}></span>
        </div>
      </div>
    </div>
  );
}
