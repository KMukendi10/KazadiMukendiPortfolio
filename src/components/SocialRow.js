import { SOCIALS } from '@/data/site';

export default function SocialRow() {
  return (
    <div className="social-row">
      {SOCIALS.map((s) => (
        <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
          <i className={s.icon}></i>
        </a>
      ))}
    </div>
  );
}
