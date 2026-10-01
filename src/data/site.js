// Shared site-wide content (nav, contact details, socials, skills).

export const SITE_URL = 'https://kazadi-mukendi-portfolio.vercel.app';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export const CONTACT = {
  email: 'kazadishadrackmukendi@gmail.com',
  emailHref: 'https://mail.google.com/mail/?view=cm&fs=1&to=kazadishadrackmukendi@gmail.com',
  phone: '+27 68 125 2703',
  phoneHref: 'tel:+27681252703',
  location: 'Johannesburg, South Africa',
};

export const SOCIALS = [
  { href: 'https://github.com/KMukendi10', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'https://linkedin.com/in/kazadi-mukendi-a69122371', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'https://x.com/skm_shad00', icon: 'fab fa-twitter', label: 'X (Twitter)' },
  { href: 'http://instagram.com/skm_shad', icon: 'fab fa-instagram', label: 'Instagram' },
];

export const SKILL_GROUPS = [
  {
    title: 'Programming Languages',
    icon: 'fa-solid fa-code',
    items: [
      ['fa-brands fa-html5', 'HTML'],
      ['fa-brands fa-css3-alt', 'CSS'],
      ['fa-brands fa-square-js', 'JavaScript'],
      ['fa-solid fa-code', 'Python'],
    ],
  },
  {
    title: 'Front-End Development',
    icon: 'fa-solid fa-window-maximize',
    items: [
      ['fa-brands fa-react', 'React'],
      ['fa-solid fa-bolt', 'Vite'],
      ['fa-solid fa-mobile-screen', 'Responsive Design'],
      ['fa-brands fa-bootstrap', 'Bootstrap'],
    ],
  },
  {
    title: 'Back-End Development',
    icon: 'fa-solid fa-server',
    items: [
      ['fa-solid fa-plug', 'REST APIs'],
      ['fa-solid fa-layer-group', 'Backend Structure'],
      ['fa-solid fa-arrows-rotate', 'State & Persistence'],
      ['fa-solid fa-database', 'MongoDB'],
      ['fa-solid fa-fire', 'Firestore'],
      ['fa-solid fa-cloud', 'Supabase'],
    ],
  },
  {
    title: 'Version Control & Deployment',
    icon: 'fa-solid fa-code-branch',
    items: [
      ['fa-brands fa-git-alt', 'Git'],
      ['fa-brands fa-github', 'GitHub'],
      ['fa-brands fa-git-alt', 'GitLab'],
      ['fa-solid fa-triangle', 'Vercel'],
      ['fa-solid fa-cloud-arrow-up', 'Netlify'],
      ['fa-solid fa-cloud', 'Render'],
    ],
  },
  {
    title: 'Tools & Practices',
    icon: 'fa-solid fa-screwdriver-wrench',
    items: [
      ['fa-solid fa-code', 'VS Code'],
      ['fa-solid fa-wand-magic-sparkles', 'Cursor'],
      ['fa-solid fa-bolt', 'Kiro'],
      ['fa-solid fa-palette', 'Canva'],
      ['fa-solid fa-pen-ruler', 'Figma'],
      ['fa-solid fa-code-pull-request', 'Pull Requests'],
    ],
  },
];
