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
    initPreloader();
    initNavToggle();
    initScrollFade();
    initContactForm();
    initThemeToggle();
    initPageGlow();
    initCustomCursor();
    initCaseDrawers();
    initAnchorHighlight();
    initHeaderScroll();
});

/* -----------------------------------------
   0a. Loading screen — percentage counter + rotating messages,
   shown once per browser session
----------------------------------------- */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    const percentEl = preloader.querySelector('.preloader-percent');
    const msgEl = preloader.querySelector('.preloader-msg');
    const barEl = preloader.querySelector('.preloader-bar span');

    const messages = [
        '// booting portfolio.exe',
        '// compiling good vibes',
        '// linting the CSS',
        '// waking up the servers',
        '// npm install patience',
        '// almost there...'
    ];

    let done = false;
    let interval;
    const finish = () => {
        if (done) return;
        done = true;
        clearInterval(interval);
        clearTimeout(safetyTimer);
        preloader.classList.add('preloader-hidden');
        setTimeout(() => preloader.remove(), 600);
    };

    // Hard safety net — no matter what happens above, never let the
    // preloader stay stuck on screen for more than 4 seconds.
    const safetyTimer = setTimeout(finish, 4000);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
        finish();
        return;
    }

    let percent = 0;
    let msgIndex = 0;
    if (msgEl) msgEl.textContent = messages[0];

    interval = setInterval(() => {
        percent += Math.floor(Math.random() * 9) + 4; // +4 to +12 per tick

        if (percent >= 100) {
            percent = 100;
            clearInterval(interval);
            setTimeout(finish, 300);
        }

        if (percentEl) percentEl.textContent = `${percent}%`;
        if (barEl) barEl.style.width = `${percent}%`;

        const newMsgIndex = Math.min(messages.length - 1, Math.floor((percent / 100) * messages.length));
        if (newMsgIndex !== msgIndex && msgEl) {
            msgIndex = newMsgIndex;
            msgEl.textContent = messages[msgIndex];
        }
    }, 120);
}

/* -----------------------------------------
   0b. Cursor-follow spotlight glow — whole page
----------------------------------------- */
function initPageGlow() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const glow = document.createElement('div');
    glow.className = 'page-glow';
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
        document.documentElement.style.setProperty('--gx', `${e.clientX}px`);
        document.documentElement.style.setProperty('--gy', `${e.clientY}px`);
    });
}

/* -----------------------------------------
   0c. Custom circle cursor (desktop / mouse only)
----------------------------------------- */
function initCustomCursor() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.append(dot, ring);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
    });

    const clickableSelector = 'a, button, .project-preview, input, textarea, select, [role="button"]';
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(clickableSelector)) ring.classList.add('cursor-hover');
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(clickableSelector)) ring.classList.remove('cursor-hover');
    });

    document.addEventListener('mouseleave', () => {
        dot.style.opacity = '0';
        ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
        dot.style.opacity = '1';
        ring.style.opacity = '0.6';
    });

    (function animateRing() {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
        requestAnimationFrame(animateRing);
    })();
}

/* -----------------------------------------
   0d. Case study side drawers (Projects page)
----------------------------------------- */
function initCaseDrawers() {
    const triggers = document.querySelectorAll('[data-case]');
    const overlay = document.getElementById('drawerOverlay');
    if (!triggers.length || !overlay) return;

    const openDrawer = (id) => {
        const drawer = document.getElementById(`case-${id}`);
        if (!drawer) return;
        document.querySelectorAll('.case-drawer.active').forEach((d) => d.classList.remove('active'));
        drawer.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('drawer-open');
        history.replaceState(null, '', `#${id}`);
    };

    const closeDrawer = () => {
        document.querySelectorAll('.case-drawer.active').forEach((d) => d.classList.remove('active'));
        overlay.classList.remove('active');
        document.body.classList.remove('drawer-open');
    };

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', () => openDrawer(trigger.dataset.case));
        trigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openDrawer(trigger.dataset.case);
            }
        });
    });

    document.querySelectorAll('.drawer-close').forEach((btn) => {
        btn.addEventListener('click', closeDrawer);
    });

    overlay.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
    });

    const hash = window.location.hash.slice(1);
    if (hash && document.getElementById(`case-${hash}`)) {
        openDrawer(hash);
    }
}

/* -----------------------------------------
   0f. Hide header on scroll down, show on scroll up
----------------------------------------- */
function initHeaderScroll() {
    const header = document.querySelector('header');
    const navLinks = document.querySelector('.nav-links');
    if (!header) return;

    let lastY = window.scrollY;
    let ticking = false;
    const hideThreshold = 100; // don't hide until scrolled past this point

    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;

        requestAnimationFrame(() => {
            const currentY = window.scrollY;
            const menuOpen = navLinks && navLinks.classList.contains('open');

            if (!menuOpen) {
                if (currentY > lastY && currentY > hideThreshold) {
                    header.classList.add('header-hidden');
                } else {
                    header.classList.remove('header-hidden');
                }
            }

            lastY = currentY;
            ticking = false;
        });
    }, { passive: true });
}

/* -----------------------------------------
   0g. Flash a highlight ring on the card a #anchor link points to
----------------------------------------- */
function initAnchorHighlight() {
    const id = window.location.hash ? window.location.hash.slice(1) : '';
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) return;

    target.classList.add('anchor-highlight');
    target.addEventListener('animationend', () => {
        target.classList.remove('anchor-highlight');
    }, { once: true });
}

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