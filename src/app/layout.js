import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';

import Shell from '@/components/Shell';
import { SITE_URL } from '@/data/site';

const description =
  'Kazadi Mukendi — Junior Full Stack Web Developer from Johannesburg. React, APIs, Firebase and full-stack projects, with case studies for each build.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Kazadi Mukendi', template: 'Kazadi Mukendi | %s' },
  description,
  icons: { icon: '/Assets/Favicon.png' },
  openGraph: {
    title: 'Kazadi Mukendi | Junior Full Stack Web Developer',
    description,
    url: '/',
    siteName: 'Kazadi Mukendi',
    images: ['/Assets/KazadiProfile.png'],
    type: 'website',
  },
};

// Runs before first paint so a saved dark theme never flashes light.
const themeInit = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
