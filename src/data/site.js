// Shared site-wide content (nav, contact details, socials, skills).

export const SITE_URL = 'https://kazadi-mukendi-portfolio.vercel.app';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

// Name shown on the page-transition curtain for each route.
export const PAGE_NAMES = { '/': 'Home', '/about': 'About', '/projects': 'Work', '/contact': 'Contact' };

export const CONTACT = {
  email: 'kazadishadrackmukendi@gmail.com',
  emailHref: 'https://mail.google.com/mail/?view=cm&fs=1&to=kazadishadrackmukendi@gmail.com',
  phone: '+27 68 125 2703',
  phoneHref: 'tel:+27681252703',
  location: 'Johannesburg, South Africa',
};

export const SOCIALS = [
  { href: 'https://github.com/KMukendi10', icon: 'github', label: 'GitHub' },
  { href: 'https://linkedin.com/in/kazadi-mukendi-a69122371', icon: 'linkedin', label: 'LinkedIn' },
  { href: 'https://x.com/skm_shad00', icon: 'x', label: 'X (Twitter)' },
  { href: 'https://instagram.com/skm_shad', icon: 'instagram', label: 'Instagram' },
];

// Grouped skills (About page "Toolbox"). Keep in step with the CV.
export const SKILL_GROUPS = [
  { title: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'Python', 'C++'] },
  { title: 'Front end', items: ['React', 'Next.js', 'Vite', 'Responsive design', 'Bootstrap'] },
  { title: 'Back end and data', items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'Firebase', 'Firestore', 'PostgreSQL (Supabase)'] },
  { title: 'Version control and deployment', items: ['Git', 'GitHub', 'GitLab', 'Vercel', 'Netlify', 'Render'] },
  { title: 'Tools', items: ['VS Code', 'Cursor', 'Figma', 'Canva', 'Pull requests and code review'] },
  { title: 'Engineering', items: ['AutoCAD', 'Autodesk Inventor', 'G-Code programming'] },
];

// One flat list for the scrolling skills band on the home page.
export const MARQUEE_SKILLS = [
  'React', 'Next.js', 'Node.js', 'Express', 'JavaScript', 'MongoDB', 'PostgreSQL',
  'Firebase', 'REST APIs', 'Git and GitHub', 'Responsive design', 'Vercel',
];
