import Link from 'next/link';
import Asset from '@/components/Asset';
import FadeIn from '@/components/FadeIn';

export const metadata = { title: 'About' };

const VALUES = [
  {
    title: 'Problem-Solving',
    text: 'Breaking down layout and logic issues methodically rather than guessing at fixes.',
  },
  {
    title: 'Attention to Detail',
    text: 'Spacing, alignment, and consistency across every breakpoint, not just the ones I happen to test.',
  },
  {
    title: 'Continuous Learning',
    text: 'Every term adds a new skill on top of the last - from static layouts to JavaScript logic, React state, APIs, Firebase data and full-stack structure.',
  },
  {
    title: 'Collaboration',
    text: "Comfortable working inside a team's Git workflow - branches, pull requests, code review and conflict resolution — not just solo repos.",
  },
];

const TIMELINE = [
  {
    title: 'Background: Mechanical Engineering',
    text: 'Structured, systems-based problem solving — the foundation I carried into development.',
  },
  {
    title: 'Web Fundamentals',
    text: 'Built and deployed my first static HTML/CSS projects, and learned Git basics.',
  },
  {
    title: 'Interactive JavaScript',
    text: 'Moved beyond static layouts with the Twitter/X clone and Quiz Widget — real state handling and DOM logic instead of markup alone.',
  },
  {
    title: 'Team Capstone & Peer Collaboration',
    text: 'Served as Git Manager on a 6-person capstone team building a full multi-page client site.',
  },
  {
    title: 'React & Full-Stack (Firebase)',
    text: 'Rebuilt in React with the Google Keep Clone and Book Library, then shipped Urban Threads.',
  },
  {
    title: 'Multi-Part Application Architecture',
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
      <section className="about-hero">
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hello! I&apos;m <strong>Kazadi Mukendi</strong>, a Junior Full Stack Web Developer with a background in
            Mechanical Engineering, and experience tutoring students. I enjoy building modern, responsive applications
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
          <div className="about-buttons">
            <Link href="/about#values" className="learn-btn">
              See How I Work
            </Link>
            <a href="/Assets/KazadiMukendi-CV.pdf" className="btn-proj-outline" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </div>
        </div>

        <div className="about-image">
          <Asset src="KazadiProfile.png" alt="Kazadi Mukendi" sizes="(max-width: 768px) 100vw, 480px" priority />
        </div>
      </section>

      <FadeIn className="mission-vision">
        <div className="info-card">
          <h2>Background</h2>
          <p>
            I came into web development from Mechanical Engineering, not a traditional CS path. That means I approach a
            layout bug or a broken function the same way I&apos;d approach a system fault - isolate the variable, test,
            confirm, move on.
          </p>
        </div>

        <div className="info-card">
          <h2>Goal</h2>
          <p>
            I&apos;m working toward a full stack developer role where I can build complete, deployed products - not just
            static front-end clones — and contribute meaningfully on a team. My current focus is becoming stronger
            across the boundary between frontend experience, backend organization, data persistence and deployment.
          </p>
        </div>
      </FadeIn>

      <FadeIn className="values" id="values">
        <h2>The standards behind my work</h2>
        <p className="section-text">Four principles guide how I build and learn.</p>

        <div className="values-grid">
          {VALUES.map(({ title, text }) => (
            <div className="value-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="story">
        <h2>My development journey so far</h2>
        <p>From engineering fundamentals to building and shipping with a team.</p>

        <div className="timeline-grid">
          {TIMELINE.map(({ title, text }) => (
            <div className="timeline-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="founders">
        <h2>Certificates</h2>
        <p>Credentials earned along the way.</p>

        <div className="founder-grid">
          {CERTIFICATES.map(({ file, alt, title }) => (
            <div className="founder-card" key={file}>
              <a href={`/Assets/${file}`} target="_blank" rel="noopener noreferrer">
                <Asset src={file} alt={alt} sizes="(max-width: 768px) 100vw, 400px" />
              </a>
              <h3>{title}</h3>
              <p>Zaio</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <section className="community">
        <h2>Let&apos;s build something together.</h2>
        <p>Open to internships, junior roles, and collaborative projects.</p>
        <br />
        <Link href="/contact" className="btn-black">
          Get in Touch
        </Link>
      </section>
    </>
  );
}
