'use client';

import { useEffect, useState } from 'react';

// Live Johannesburg time (the honest answer to "where are you?").
export default function Clock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-ZA', { timeZone: 'Africa/Johannesburg', hour: '2-digit', minute: '2-digit', hour12: false });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return <span>{time ? `${time} in Johannesburg` : 'Johannesburg'}</span>;
}
