import ContactForm from '@/components/ContactForm';
import SocialRow from '@/components/SocialRow';
import { CONTACT } from '@/data/site';

export const metadata = {
  title: 'Contact',
  description: 'Have a role, project or opportunity in mind? Send Kazadi Mukendi a message.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  return (
    <section className="c-page">
      <header className="c-page__head">
        <h1>Let&apos;s get in touch</h1>
        <p>Have a role, project, or opportunity in mind? Send a message and I&apos;ll get back to you as soon as I can.</p>
      </header>

      <div className="c-page__grid">
        <ContactForm />

        <aside className="c-info">
          <h2>Contact details</h2>
          <dl>
            <dt>Email</dt>
            <dd>
              <a href={CONTACT.emailHref} target="_blank" rel="noopener noreferrer">{CONTACT.email}</a>
            </dd>
            <dt>Phone</dt>
            <dd>
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </dd>
            <dt>Location</dt>
            <dd>{CONTACT.location}</dd>
            <dt>Focus</dt>
            <dd>
              Full-stack applications, React, APIs, Firebase, backend structure, admin workflows, and collaborative Git projects.
            </dd>
          </dl>
          <SocialRow />
        </aside>
      </div>
    </section>
  );
}
