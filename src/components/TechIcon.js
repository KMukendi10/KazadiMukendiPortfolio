import {
  SiAutocad, SiAutodesk, SiBootstrap, SiCplusplus, SiCss, SiCursor, SiExpress, SiFigma, SiFirebase, SiGit,
  SiGithub, SiGitlab, SiHtml5, SiJavascript, SiMongodb, SiNetlify, SiNextdotjs, SiNodedotjs, SiPostgresql,
  SiPython, SiReact, SiRender, SiSupabase, SiVercel, SiVite,
} from 'react-icons/si';
import { FaCode, FaCodePullRequest, FaGears, FaMobileScreen, FaPalette, FaPlug } from 'react-icons/fa6';

// name -> [icon, colour]. `null` colour = use the text colour (for logos that are black or white).
const ICONS = {
  HTML: [SiHtml5, '#ff6a3d'],
  CSS: [SiCss, '#3b9cf0'],
  JavaScript: [SiJavascript, '#f7df1e'],
  Python: [SiPython, '#5b9bd5'],
  'C++': [SiCplusplus, '#4a9ae0'],
  React: [SiReact, '#61dafb'],
  'Next.js': [SiNextdotjs, null],
  Vite: [SiVite, '#a77bff'],
  'Responsive design': [FaMobileScreen, '#6ef0c0'],
  Bootstrap: [SiBootstrap, '#a47df0'],
  'Node.js': [SiNodedotjs, '#6cc24a'],
  Express: [SiExpress, null],
  'REST APIs': [FaPlug, '#ff8a3d'],
  MongoDB: [SiMongodb, '#4fb35a'],
  Firebase: [SiFirebase, '#ffca28'],
  Firestore: [SiFirebase, '#ff9f1c'],
  'PostgreSQL (Supabase)': [SiSupabase, '#3ecf8e'],
  PostgreSQL: [SiPostgresql, '#6f93ff'],
  Git: [SiGit, '#f4623f'],
  GitHub: [SiGithub, null],
  GitLab: [SiGitlab, '#fc6d26'],
  Vercel: [SiVercel, null],
  Netlify: [SiNetlify, '#2fd5c8'],
  Render: [SiRender, null],
  'VS Code': [FaCode, '#3fa9f5'],
  Cursor: [SiCursor, null],
  Figma: [SiFigma, '#ff6b4a'],
  Canva: [FaPalette, '#00c4cc'],
  'Pull requests and code review': [FaCodePullRequest, '#c8bfff'],
  AutoCAD: [SiAutocad, '#ff4d6d'],
  'Autodesk Inventor': [SiAutodesk, null],
  'G-Code programming': [FaGears, '#ffd84a'],
  'Git and GitHub': [SiGithub, null],
};

export function hasTechIcon(name) {
  return Boolean(ICONS[name]);
}

export default function TechIcon({ name, className = '' }) {
  const entry = ICONS[name];
  if (!entry) return null;
  const [Glyph, colour] = entry;
  return (
    <span className={`techicon ${className}`.trim()} style={colour ? { color: colour } : undefined} aria-hidden="true">
      <Glyph />
    </span>
  );
}
