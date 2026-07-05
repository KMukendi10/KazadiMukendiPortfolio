/* ===========================================
   Kazadi Mukendi Portfolio — script.js
   Handles:
   1. Mobile nav toggle
   2. Scroll fade-in animation
   3. Contact form validation
=========================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavToggle();
    initScrollFade();
    initContactForm();
});

/* -----------------------------------------
   1. Mobile Nav Toggle
----------------------------------------- */
function initNavToggle() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => links.classList.remove('open'));
    });
}

/* -----------------------------------------
   2. Scroll Fade-In
----------------------------------------- */
function initScrollFade() {
    const items = document.querySelectorAll('.fade-in');
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    items.forEach((item) => observer.observe(item));
}

/* -----------------------------------------
   3. Contact Form Validation
----------------------------------------- */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        successMessage.textContent = '';

        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your full name.';
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Please enter your email address.';
            isValid = false;
        } else if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Please enter your message.';
            isValid = false;
        }

        if (isValid) {
            successMessage.textContent = "Thanks! Your message has been noted — I'll get back to you soon.";
            form.reset();
        }
    });
}