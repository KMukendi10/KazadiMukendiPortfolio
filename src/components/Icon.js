import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowUpRightFromSquare,
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaXmark,
  FaXTwitter,
} from 'react-icons/fa6';

// Small inline-SVG icon set (replaces the ~100 KB Font Awesome stylesheet + webfonts).
const ICONS = {
  'arrow-down': FaArrowDown,
  'arrow-left': FaArrowLeft,
  'arrow-right': FaArrowRight,
  'arrow-up': FaArrowUp,
  external: FaArrowUpRightFromSquare,
  download: FaDownload,
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  moon: FaMoon,
  sun: FaSun,
  close: FaXmark,
  x: FaXTwitter,
};

export default function Icon({ name, className }) {
  const Cmp = ICONS[name];
  return Cmp ? <Cmp className={className} aria-hidden="true" focusable="false" /> : null;
}
