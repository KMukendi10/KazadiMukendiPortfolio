import Asset from '@/components/Asset';
import FeaturedStack from '@/components/FeaturedStack';
import Gear from '@/components/Gear';
import HeroName from '@/components/HeroName';
import Magnetic from '@/components/Magnetic';
import Marquee from '@/components/Marquee';
import ScrubText from '@/components/ScrubText';
import TLink from '@/components/TLink';
import Tilt from '@/components/Tilt';
import { projectCards } from '@/data/projects';
import { MARQUEE_SKILLS } from '@/data/site';
import Icon from '@/components/Icon';
import { FaCode, FaGears, FaMagnifyingGlass, FaDiagramProject } from 'react-icons/fa6';

export const metadata = {
  title: 'Full Stack Developer',
  description:
    'Kazadi Mukendi is a Full Stack Developer from Johannesburg who builds complete web apps, from the screen to the database, and tests them before they ship.',
  alternates: { canonical: '/' },
};

const AUTOMATION = [
  { Glyph: FaMagnifyingGlass, title: 'Spot the repeat', text: 'Find the task someone does by hand again and again.' },
  { Glyph: FaDiagramProject, title: 'Map the process', text: 'Write down every step and where it can go wrong.' },
  { Glyph: FaCode, title: 'Script it', text: 'Turn those steps into code that does them the same way every time.' },
  { Glyph: FaGears, title: 'Let it run', text: 'Check it, ship it, and let the machine carry it.' },
];

const METHOD = [
  {
    title: 'Diagnose',
    text: 'Break the problem into parts and find the real cause before changing anything. It is how I debug, and how I decide what to build next.',
  },
  {
    title: 'Build',
    text: 'Ship the whole feature: the screen, the data behind it and the deployment, organised so one part can change without breaking the rest.',
    proof: 'Airbnb Clone: guest site, admin dashboard and API as three separate apps.',
  },
  {
    title: 'Check',
    text: 'Test before it ships. Loading and error states, edge cases and code review, so users never meet the faults first.',
    proof: 'Git Manager on a six-person team: every pull request reviewed before it merged.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero blueprint">
        <Gear className="hero__gear" teeth={16} />

        <div className="hero__top">
          <p>Johannesburg, South Africa</p>
          <p>Open to internships and junior roles</p>
        </div>

        <div className="hero__stage">
        <HeroName lines={[{ text: 'Kazadi' }, { text: 'Mukendi', right: true }]} />

        <div className="hero__portrait">
          <Tilt max={10}>
            <div className="portrait">
              <Asset src="KazadiProfile.png" alt="Portrait of Kazadi Mukendi" sizes="(max-width: 700px) 50vw, 320px" priority />
            </div>
          </Tilt>
        </div>

        <div className="hero__badge" aria-hidden="true">
          <svg viewBox="0 0 200 200">
            <defs>
              <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text>
              <textPath href="#badge-circle">Full Stack Developer · Johannesburg · </textPath>
            </text>
          </svg>
          <Asset src="Favicon.png" alt="" sizes="64px" />
        </div>

        </div>

        <div className="hero__bottom">
          <p className="hero__lead">
            Full Stack Developer and problem solver. I build complete web apps, from the screen to the database, test them before they ship, and I am working toward automating the repetitive parts.
          </p>
          <div className="hero__cta">
            <Magnetic>
              <TLink href="/projects" className="btn btn--mint" data-cursor="Go">
                See the work
              </TLink>
            </Magnetic>
            <a href="/Assets/KazadiMukendi-CV.pdf" className="btn btn--outline-light" download>
              Download CV <Icon name="download" />
            </a>
          </div>
        </div>
      </section>

      <Marquee items={MARQUEE_SKILLS} className="marquee--band" />

      <section className="statement">
        <ScrubText as="h2" className="statement__text">
          I build websites the careful way: find the real cause, fix it properly, and test it before it reaches the user.
        </ScrubText>
      </section>

      <section className="automation">
        <p className="automation__eyebrow">Where I am taking this</p>
        <ScrubText as="h2" className="automation__text">
          Long term, I want to automate the repeated, manual work, the same way an engineer replaces a hand process with a machine.
        </ScrubText>
        <ol className="automation__flow">
          {AUTOMATION.map(({ Glyph, title, text }, i) => (
            <li key={title}>
              <span className="automation__icon" aria-hidden="true"><Glyph /></span>
              <span className="automation__n">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="work">
        <div className="work__head">
          <h2>Selected work</h2>
          <p>Three projects, and what each one does for the people who would use it.</p>
        </div>
        <FeaturedStack />
        <div className="work__more">
          <Magnetic>
            <TLink href="/projects" className="btn btn--line" data-cursor="Go">
              All {projectCards.length} projects
            </TLink>
          </Magnetic>
        </div>
      </section>

      <section className="method">
        <h2 className="method__title">How I work</h2>
        <ol className="method__list">
          {METHOD.map(({ title, text, proof }, i) => (
            <li className="method__row" key={title} tabIndex={0}>
              <span className="method__n">{i + 1}</span>
              <h3>{title}</h3>
              <div className="method__body">
                <p>{text}</p>
                {proof && <p className="method__proof">{proof}</p>}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
