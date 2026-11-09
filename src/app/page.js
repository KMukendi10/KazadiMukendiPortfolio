import Link from 'next/link';
import Asset from '@/components/Asset';
import FadeIn from '@/components/FadeIn';
import LinkButton from '@/components/LinkButton';
import { SKILL_GROUPS } from '@/data/site';

export const metadata = { title: 'Home' };

const WHAT_I_BRING = [
  {
    title: 'Systems Thinking',
    text: 'My Mechanical Engineering background taught me to break complex problems into smaller systems and test solutions methodically.',
  },
  {
    title: 'Building & Debugging',
    text: 'I have moved from static interfaces to functional applications using JavaScript, React, APIs, Firebase, local state and multi-part full-stack architecture.',
  },
  {
    title: 'Communication',
    text: 'Tutoring has taught me to explain complex ideas clearly and work patiently with different people.',
  },
  {
    title: 'Collaboration',
    text: 'I have experience with Git-based team workflows, feature branches, pull requests and code review, including serving as Git Manager on a six-person capstone team.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Building toward a career in Full Stack Web Development.</h1>
          <p>
            I&apos;m <strong>Kazadi Mukendi</strong>, a Junior Full Stack Web Developer. I build responsive frontends,
            connect them to APIs and Firebase, and organize full-stack applications into clear frontend, backend and
            admin layers. I also work comfortably in Git workflows with branches, pull requests and code review.
          </p>

          <div className="hero-buttons">
            <LinkButton href="/projects" className="hero-btn">
              View Projects
            </LinkButton>

            <LinkButton href="/about" className="hero-btn-secondary">
              About Me
            </LinkButton>

            <a href="/Assets/KazadiMukendi-CV.pdf" className="hero-btn-secondary" download>
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-image">
          <Asset src="KazadiProfile.png" alt="Kazadi Mukendi" sizes="(max-width: 480px) 60vw, 450px" priority />
        </div>
      </section>

      <FadeIn className="what-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">WHAT I BRING</p>
            <h2>Engineering discipline, applied to code.</h2>
            <p>My background shapes how I approach every build.</p>
          </div>

          <div className="programs-grid">
            {WHAT_I_BRING.map(({ title, text }) => (
              <div className="program-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn className="featured-project">
        <div className="container">
          <div className="section-header">
            <p className="section-label">FEATURED WORK</p>
            <h2>My strongest full-stack project</h2>
            <p>
              Airbnb Clone brings together responsive frontend work, full-stack structure, and separate guest, backend,
              and admin applications.
            </p>
          </div>

          <div className="spotlight-card">
            <Asset src="Airbnb.png" alt="Airbnb Clone frontend screenshot" sizes="(max-width: 768px) 100vw, 480px" />
            <div className="spotlight-text">
              <h3>
                Airbnb Clone<span className="badge">Featured</span>
              </h3>
              <p className="stacks">JavaScript | Frontend | Backend | Admin</p>
              <p>
                A full-stack Airbnb-inspired platform organized into separate guest frontend, backend, and admin
                applications, with a live frontend deployment on Render.
              </p>
              <div className="case-actions">
                <a
                  href="https://airbnb-clone-frontend-46hl.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-btn"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> View Website
                </a>
                <a
                  href="https://github.com/KMukendi10/Airbnb-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-btn-outline"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2>Want to see the full picture?</h2>
              <p>Projects, case studies, and a look at how I collaborate on a team.</p>
            </div>
            <Link href="/projects" className="btn-black">
              View All Projects →
            </Link>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="container">
          <div className="section-header">
            <p className="section-label">SKILLS</p>
            <h2>Technical Stack</h2>
          </div>
          <div className="skill-groups">
            {SKILL_GROUPS.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>
                  <i className={group.icon}></i> {group.title}
                </h3>
                <div className="skill-items">
                  {group.items.map(([icon, label]) => (
                    <span key={label}>
                      <i className={icon}></i> {label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </>
  );
}
