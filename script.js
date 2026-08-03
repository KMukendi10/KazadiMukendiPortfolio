/* ===========================================
   Kazadi Mukendi Portfolio — script.js
   Handles:
   1. Mobile nav toggle
   2. Scroll fade-in animation
   3. Contact form validation
=========================================== */

// Mark that JS is actually running before anything else. CSS only hides
// .fade-in content once this class is present, so a failed/blocked script
// load can never leave whole sections permanently invisible.
document.documentElement.classList.add('js-ready');

document.addEventListener('DOMContentLoaded', () => {
    initNavToggle();
    initScrollFade();
    initContactForm();
    initThemeToggle();
});

/* -----------------------------------------
   0. Dark Mode Toggle
----------------------------------------- */
function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    const icon = toggle.querySelector('i');

    const applyIcon = (theme) => {
        if (!icon) return;
        icon.classList.toggle('fa-moon', theme !== 'dark');
        icon.classList.toggle('fa-sun', theme === 'dark');
    };

    applyIcon(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

    toggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const nextTheme = isDark ? 'light' : 'dark';

        if (nextTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }

        localStorage.setItem('theme', nextTheme);
        applyIcon(nextTheme);
    });
}

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

    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        successMessage.textContent = '';
        successMessage.classList.remove('error');

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

        if (!isValid) return;

        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                successMessage.textContent = "Thanks! Your message has been sent — I'll get back to you soon.";
                form.reset();
            } else {
                const data = await response.json().catch(() => null);
                const detail = data && data.errors && data.errors.length
                    ? data.errors.map((err) => err.message).join(' ')
                    : 'Please try again in a moment.';
                successMessage.textContent = `Something went wrong sending your message. ${detail}`;
                successMessage.classList.add('error');
            }
        } catch (err) {
            successMessage.textContent = 'Network error — please check your connection and try again.';
            successMessage.classList.add('error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}

(function() {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})();