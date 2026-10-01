import Asset from '@/components/Asset';
import ProjectsSection from '@/components/ProjectsSection';
import ScrollButton from '@/components/ScrollButton';

export const metadata = { title: 'Projects' };

export default function Projects() {
  return (
    <main>
      <section className="programs-hero">
        <div className="program-text">
          <h1>Projects</h1>
          <p>
            A collection of everything I&apos;ve built and deployed so far — from a full-stack Airbnb architecture and
            Firebase e-commerce app to React builds, API integrations, browser state work, and a team capstone project.
            Each case study explains the technical problem, the trade-off, and what I would improve next.
          </p>
          <ScrollButton targetId="project-grid" className="hero-btn">
            Browse My Work
          </ScrollButton>
        </div>

        <div className="programs-image">
          <Asset src="iHubWebsite.png" alt="iHub website preview" sizes="(max-width: 768px) 100vw, 560px" priority />
        </div>
      </section>

      <ProjectsSection />
    </main>
  );
}
