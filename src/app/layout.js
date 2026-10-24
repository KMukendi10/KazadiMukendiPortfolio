import '@fontsource-variable/bricolage-grotesque/wdth.css';
import '@fontsource-variable/instrument-sans/index.css';
import './globals.css';

import Shell from '@/components/Shell';
import { SITE_URL, SOCIALS } from '@/data/site';

const description =
  'Kazadi Mukendi, a Full Stack Developer from Johannesburg who builds complete web apps, tested before they ship, with a case study for every project.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Kazadi Mukendi | Full Stack Developer', template: 'Kazadi Mukendi | %s' },
  description,
  openGraph: {
    title: 'Kazadi Mukendi | Full Stack Developer',
    description,
    url: '/',
    siteName: 'Kazadi Mukendi',
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: { card: 'summary_large_image', title: 'Kazadi Mukendi | Full Stack Developer', description },
};


const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kazadi Mukendi',
  jobTitle: 'Full Stack Developer',
  url: SITE_URL,
  image: `${SITE_URL}/Assets/KazadiProfile.png`,
  address: { '@type': 'PostalAddress', addressLocality: 'Johannesburg', addressCountry: 'ZA' },
  sameAs: SOCIALS.map((s) => s.href),
  knowsAbout: ['React', 'Next.js', 'Node.js', 'JavaScript', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Firebase'],
};

export const viewport = { themeColor: '#2340FF' };

// Runs before first paint: applies a saved dark theme and flags that JS is on
// (animations only hide content once this class exists, so nothing stays invisible without JS).
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(sessionStorage.getItem('intro')){d.classList.add('intro-seen');}}catch(e){}try{if(localStorage.getItem('theme')!=='light'){d.setAttribute('data-theme','dark');}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
