import ProjectIndex from '@/components/ProjectIndex';

export const metadata = {
  title: 'Work',
  description:
    'Case studies for every project: a full-stack Airbnb clone, a Firebase store, React apps, API work and a six-person team capstone. Each one covers the problem, the trade-off and the result.',
  alternates: { canonical: '/projects' },
};

export default function Projects() {
  return (
    <section className="w-page">
      <header className="w-page__head">
        <h1>Work</h1>
        <p>
          Everything I&apos;ve built and deployed so far, from a full-stack Airbnb architecture and a Firebase store to
          React builds, API work, browser state, a team capstone and campaign sites for agencies. Each case study covers the problem, the trade-off
          and what I would improve next.
        </p>
      </header>
      <ProjectIndex />
    </section>
  );
}
