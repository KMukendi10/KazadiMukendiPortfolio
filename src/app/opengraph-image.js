import { ImageResponse } from 'next/og';

export const alt = 'Kazadi Mukendi, Full Stack Developer from Johannesburg';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Link preview card (LinkedIn, X, WhatsApp...). Generated at build time, so there is no extra file to maintain.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#2340FF',
          color: '#FFFFFF',
          padding: '64px 72px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 36, fontWeight: 700, color: '#FFD84A' }}>Kazadi Mukendi</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 132, lineHeight: 1, fontWeight: 700, letterSpacing: -5 }}>Full Stack</div>
          <div style={{ display: 'flex', fontSize: 132, lineHeight: 1.05, fontWeight: 700, letterSpacing: -5 }}>Developer</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 34 }}>
          <div style={{ display: 'flex' }}>Complete web apps. Tested before they ship.</div>
          <div style={{ display: 'flex', color: '#6EF0C0' }}>Johannesburg</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
