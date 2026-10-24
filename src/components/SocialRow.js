import { SOCIALS } from '@/data/site';
import Icon from '@/components/Icon';

export default function SocialRow({ className = '' }) {
  return (
    <div className={`social-row ${className}`.trim()}>
      {SOCIALS.map((s) => (
        <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} data-cursor="Open">
          <Icon name={s.icon} />
        </a>
      ))}
    </div>
  );
}
