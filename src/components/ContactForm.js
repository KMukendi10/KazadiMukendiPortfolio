'use client';

import { useState } from 'react';

const FORMSPREE_URL = 'https://formspree.io/f/xeeyypwe';

export default function ContactForm() {
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ text: '', isError: false });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');

    const next = { name: '', email: '', message: '' };
    let isValid = true;

    if (name.trim() === '') {
      next.name = 'Please enter your full name.';
      isValid = false;
    }

    if (email.trim() === '') {
      next.email = 'Please enter your email address.';
      isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
      next.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (message.trim() === '') {
      next.message = 'Please enter your message.';
      isValid = false;
    }

    setErrors(next);
    setStatus({ text: '', isError: false });
    if (!isValid) return;

    setSending(true);
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus({ text: "Thanks! Your message has been sent — I'll get back to you soon.", isError: false });
        form.reset();
      } else {
        const body = await response.json().catch(() => null);
        const detail =
          body && body.errors && body.errors.length
            ? body.errors.map((err) => err.message).join(' ')
            : 'Please try again in a moment.';
        setStatus({ text: `Something went wrong sending your message. ${detail}`, isError: true });
      }
    } catch {
      setStatus({ text: 'Network error — please check your connection and try again.', isError: true });
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="contact-form" id="contactForm" noValidate action={FORMSPREE_URL} method="POST" onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" />
      <small className="error-message" id="nameError">
        {errors.name}
      </small>

      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" />
      <small className="error-message" id="emailError">
        {errors.email}
      </small>

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={5} placeholder="Write your message"></textarea>
      <small className="error-message" id="messageError">
        {errors.message}
      </small>

      <button type="submit" className="primary-btn" disabled={sending}>
        {sending ? 'Sending...' : 'Send Message'}
      </button>
      <p className={`success-message${status.isError ? ' error' : ''}`} id="successMessage">
        {status.text}
      </p>
    </form>
  );
}
