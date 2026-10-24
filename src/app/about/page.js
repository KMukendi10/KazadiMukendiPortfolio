import Asset from '@/components/Asset';
import Magnetic from '@/components/Magnetic';
import ScrubText from '@/components/ScrubText';
import TLink from '@/components/TLink';
import TechIcon from '@/components/TechIcon';
import Tilt from '@/components/Tilt';
import { SKILL_GROUPS } from '@/data/site';
import { ART, ART_HANDLE, ART_URL } from '@/data/art';

export const metadata = {
  title: 'About',
  description:
    'The full story: art, mechanical engineering, tutoring and the road into web development, plus the standards behind my work and my certificates.',
  alternates: { canonical: '/about' },
};

const VALUES = [
  {
    title: 'Problem-solving',
    text: 'Breaking down layout and logic issues methodically rather than guessing at fixes.',
    bg: 'var(--c-cobalt)',
    fg: '#fff',
  },
  {
    title: 'Attention to detail',
    text: 'Spacing, alignment, and consistency across every breakpoint, not just the ones I happen to test.',
    bg: 'var(--c-coral)',
    fg: 'var(--c-ink)',
  },
  {
    title: 'Continuous learning',
    text: 'Every term adds a new skill on top of the last: from static layouts to JavaScript logic, React state, APIs, Firebase data and full-stack structure.',
    bg: 'var(--c-mint)',
    fg: 'var(--c-ink)',
  },
  {
    title: 'Collaboration',
    text: 'Comfortable working inside a team’s Git workflow: branches, pull requests, code review and conflict resolution, not just solo repos.',
    bg: 'var(--c-sun)',
    fg: 'var(--c-ink)',
  },
];

const LIFE = [
  {
    kind: 'Art',
    title: 'Drawing',
    text: 'Drawing is the thread running through everything else. I share it on Instagram at @skm_shad.',
    color: 'var(--c-coral)',
  },
  {
    kind: 'Studies',
    title: 'Mechanical Engineering',
    text: 'I studied mechanical engineering: reading engineering drawings, AutoCAD, Autodesk Inventor and G-code programming. It is where my structured, find-the-cause way of working comes from.',
    color: 'var(--c-sun)',
  },
  {
    kind: 'Hands-on',
    title: 'Diagnosing faulty phones',
    text: 'Fixing phones taught me to find the real fault before touching anything, and to test the repair before handing it back.',
    color: 'var(--c-tang)',
  },
  {
    kind: 'Teaching',
    title: 'Tutoring',
    text: 'Tutoring students taught me to break complicated ideas into simpler steps and to explain things differently for different people.',
    color: 'var(--c-mint)',
  },
  {
    kind: 'First code',
    title: 'Learning to program',
    text: 'My first repositories as an ALX software engineering student, then C++ through UNISA: pointers, OOP and file handling.',
    color: 'var(--c-lilac)',
  },
  {
    kind: 'Bootcamp',
    title: 'Zaio: the web fundamentals',
    text: 'HTML and CSS landing pages, interactive JavaScript, React, then Firebase with Urban Threads. Each term built on the last.',
    color: 'var(--c-coral)',
  },
  {
    kind: 'iHub',
    title: 'Full-stack trainee',
    text: 'Git Manager on a six-person capstone team, then the Airbnb Clone with separate guest, admin and API apps, and iHub Comms, a cohort messaging platform moving to Supabase.',
    color: 'var(--c-mint)',
  },
  {
    kind: 'Next',
    title: 'Automation',
    text: 'A long-term interest of mine: finding repeated manual work and making it run by itself, the way a machine takes over a process. Backend, scripts and workflows are where I am heading.',
    color: 'var(--c-lilac)',
  },
  {
    kind: 'Now',
    title: 'Full Stack Developer',
    text: 'Building complete, deployed web apps with React, Next.js, Node and SQL, and looking for my first developer role.',
    color: 'var(--c-sun)',
  },
];

const TIMELINE = [
  {
    title: 'Web fundamentals',
    text: 'Built and deployed my first static HTML/CSS projects, and learned Git basics.',
  },
  {
    title: 'Interactive JavaScript',
    text: 'Moved beyond static layouts with the Twitter/X clone and Quiz Widget: real state handling and DOM logic instead of markup alone.',
  },
  {
    title: 'Team capstone and peer collaboration',
    text: 'Served as Git Manager on a 6-person capstone team building a full multi-page client site.',
  },
  {
    title: 'React and full-stack (Firebase)',
    text: 'Rebuilt in React with the Google Keep Clone and Book Library, then shipped Urban Threads.',
  },
  {
    title: 'Multi-part application architecture',
    text: 'Started the Airbnb Clone with separate guest frontend, backend and admin applications, extending my focus from individual pages to product structure.',
  },
];

const CERTIFICATES = [
  {
    file: 'Introduction-to-HTML-CSS-The-Tesla-Landing-Page.png',
    alt: 'Introduction to HTML/CSS Certificate',
    title: 'Introduction to HTML/CSS: The Tesla Landing Page',
  },
  {
    file: 'Introduction-to-CSS-Netflix-Landing-Page.png',
    alt: 'Introduction to CSS Certificate',
    title: 'Introduction to CSS: The Netflix Landing Page',
  },
  {
    file: 'Building-YouTube-Using-HTML_CSS.png',
    alt: 'Building YouTube Landing Page Certificate',
    title: 'Building YouTube Landing Page',
  },
];

export default function About() {
  return (
    <>
      <section className="a-hero blueprint">
        <h1 className="a-hero__title">About me</h1>
        <div className="a-hero__grid">
          <div className="a-hero__copy">
            <p className="a-hero__lead">
              Hello! I&apos;m <strong>Kazadi Mukendi</strong>, a Full Stack Developer who also draws, tutors and trained as a Mechanical Engineer. I enjoy building modern, responsive applications
              and solving real-world problems through technology.
            </p>
            <p>
              My journey into web development started with a strong interest in how systems work and how technology can
              be used to create useful solutions. With my background in engineering, I bring strong problem-solving
              skills, attention to detail, and a structured approach to development. So far that has taken me from static
              HTML/CSS builds to interactive JavaScript, React applications, API integration, Firebase authentication,
              and modern database and backend tools including MongoDB, Firestore, and Supabase.
            </p>
            <p>
              Beyond the code, tutoring has been another important part of my development. Working with students has
              taught me how to break complicated ideas into simpler steps, communicate patiently, and adjust how I
              explain something depending on who I&apos;m working with. I carry that into development when collaborating
              with teammates, documenting my work, and explaining technical decisions. I have also worked with local
              persistence, shared component state, responsive layouts, backend structure and separate admin workflows.
            </p>
            <div className="a-hero__cta">
              <Magnetic>
                <a href="/Assets/KazadiMukendi-CV.pdf" className="btn btn--solid-ink" target="_blank" rel="noopener noreferrer" data-cursor="Open">
                  View resume
                </a>
              </Magnetic>
              <TLink href="/contact" className="btn btn--line">
                Get in touch
              </TLink>
            </div>
          </div>
          <Tilt className="a-hero__photo" max={7}>
            <div className="portrait portrait--tall">
              <Asset src="KazadiProfile.png" alt="Portrait of Kazadi Mukendi" sizes="(max-width: 900px) 80vw, 420px" priority />
            </div>
          </Tilt>
        </div>
      </section>

      <section className="life">
        <div className="life__head">
          <h2>The long way here</h2>
          <p>Art, engineering, repairs, teaching and code. Everything I do now comes from one of these.</p>
        </div>
        <ol className="life__list">
          {LIFE.map(({ kind, title, text, color }) => (
            <li className="life__item" key={title} style={{ '--dot': color }}>
              <span className="life__kind">{kind}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="a-two">
        <div>
          <h2>Background</h2>
          <ScrubText>
            I came into web development from Mechanical Engineering, not a traditional CS path. That means I approach a layout bug or a broken function the same way I would approach a system fault: isolate the variable, test, confirm, move on.
          </ScrubText>
        </div>
        <div>
          <h2>Goal</h2>
          <ScrubText>
            I am working toward a full stack developer role where I can build complete, deployed products, not just static front-end clones, and contribute meaningfully on a team. My current focus is becoming stronger across the boundary between frontend experience, backend organization, data persistence and deployment, and over the long term I want to automate repeated work so it runs on its own.
          </ScrubText>
        </div>
      </section>

      <section className="values" id="values">
        <h2>The standards behind my work</h2>
        <p className="values__sub">Four principles guide how I build and learn.</p>
        <div className="values__grid">
          {VALUES.map(({ title, text, bg, fg }) => (
            <article className="value" key={title} style={{ background: bg, color: fg }}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="journey">
        <div className="journey__head">
          <h2>My development journey so far</h2>
          <p>From engineering fundamentals to building and shipping with a team.</p>
        </div>
        <ol className="journey__list">
          {TIMELINE.map(({ title, text }, i) => (
            <li className="journey__item" key={title}>
              <span className="journey__n">{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="art" id="art">
        <div className="art__head">
          <h2>Art</h2>
          <p>
            Drawing is part of how I think. New work goes up on Instagram first.
          </p>
          <a className="btn btn--line" href={ART_URL} target="_blank" rel="noopener noreferrer" data-cursor="Open">
            Follow {ART_HANDLE}
          </a>
        </div>
        <div className="art__embed">
          <iframe
            src={`${ART_URL}/embed`}
            title={`Drawings on Instagram ${ART_HANDLE}`}
            loading="lazy"
            scrolling="no"
            allowTransparency="true"
          />
        </div>
        {ART.length > 0 && (
          <div className="art__grid">
            {ART.map(({ file, alt, caption }) => (
              <figure className="art__item" key={file}>
                <Asset src={file} alt={alt} sizes="(max-width: 900px) 90vw, 420px" />
                {caption && <figcaption>{caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}
      </section>

      <section className="toolbox">
        <h2>Toolbox</h2>
        <div className="toolbox__grid">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title}>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>
                    <TechIcon name={item} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="certs">
        <h2>Certificates</h2>
        <p>Credentials earned along the way, all from Zaio.</p>
        <div className="certs__row">
          {CERTIFICATES.map(({ file, alt, title }) => (
            <a className="cert" key={file} href={`/Assets/${file}`} target="_blank" rel="noopener noreferrer" data-cursor="View">
              <Asset src={file} alt={alt} sizes="(max-width: 900px) 90vw, 380px" />
              <span>{title}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
