import TLink from '@/components/TLink';

export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="c-page">
      <header className="c-page__head">
        <h1>That page isn&apos;t here</h1>
        <p>The link may be old or mistyped. Pick one of these instead.</p>
      </header>
      <div className="nf-actions">
        <TLink href="/" className="btn btn--accent">
          Go home
        </TLink>
        <TLink href="/projects" className="btn btn--line">
          See the work
        </TLink>
      </div>
    </section>
  );
}
