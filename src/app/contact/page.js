import ContactForm from '@/components/ContactForm';
import FadeIn from '@/components/FadeIn';
import SocialRow from '@/components/SocialRow';
import { CONTACT } from '@/data/site';

export const metadata = { title: 'Contact' };

export default function Contact() {
  return (
    <main>
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Let&apos;s get in touch</h1>
          <p>
            Have a role, project, or opportunity in mind? Send a message and I&apos;ll get back to you as soon as I can.
          </p>
        </div>
      </section>

      <FadeIn className="contact-section">
        <ContactForm />

        <div className="contact-info">
          <h2>Contact Details</h2>
          <p>
            <strong>Email: </strong>
            <a href={CONTACT.emailHref} style={{ color: '#646464' }}>
              <i className="fas fa-envelope"></i> {CONTACT.email}
            </a>
          </p>
          <p>
            <strong>Phone: </strong>
            <a href={CONTACT.phoneHref} style={{ color: '#646464' }}>
              <i className="fas fa-phone"></i> {CONTACT.phone}
            </a>
          </p>
          <p>
            <strong>Location:</strong> {CONTACT.location}
          </p>
          <p>
            <strong>Focus:</strong> Full-stack applications, React, APIs, Firebase, backend structure, admin workflows,
            and collaborative Git projects.
          </p>

          <SocialRow />
        </div>
      </FadeIn>
    </main>
  );
}
