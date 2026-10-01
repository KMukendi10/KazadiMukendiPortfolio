# 🌐 Kazadi Mukendi Portfolio

A personal portfolio website showcasing my skills, projects, certifications, and growth as a developer.

## 🚀 Live Demo

🔗 [View Portfolio](https://kazadi-mukendi-portfolio.vercel.app)

---

## 📖 About

This portfolio serves as a central place to showcase my projects, technical skills, certifications, and development journey. It reflects my growth from a Mechanical Engineering background into software development and highlights the work I have completed so far.

---

## ✨ Features

* Multi-page structure (Home / About / Projects / Contact) using the Next.js App Router
* Responsive design with mobile nav toggle
* Manrope typography across every portfolio page
* Featured project spotlight
* Project showcase with case studies
* Full-stack Airbnb Clone project with separate frontend, backend, and admin areas
* Team capstone / peer collaboration evidence
* Certificates section
* Validated contact form
* GitHub and LinkedIn links

---

## 🛠️ Built With

* Next.js (App Router)
* React
* HTML
* CSS
* JavaScript
* Vite
* Firebase Authentication
* MongoDB
* Firestore
* Supabase
* REST API integration
* Local state and persistence
* Responsive design
* Manrope (Google Fonts)
* Git branches, pull requests, and code review
* GitHub
* Vercel

---

## 📂 Project Structure

```text
KazadiMukendiPortfolio/
│
├── public/
│   └── Assets/              (images, icons, CV — served at /Assets/...)
├── src/
│   ├── app/
│   │   ├── layout.js        (fonts, metadata, theme no-flash script, shared shell)
│   │   ├── globals.css      (all site styles — the old styles.css)
│   │   ├── bootstrap-scoped.css (Bootstrap, scoped to /projects only — generated)
│   │   ├── page.js          (Home)
│   │   ├── about/page.js
│   │   ├── projects/page.js (Projects + Case Studies)
│   │   └── contact/page.js
│   ├── components/          (Header, Footer, Preloader, ProjectsSection, ContactForm, ...)
│   └── data/                (projects.js case studies, site.js nav/contact/skills, assets.js)
├── scripts/scope-bootstrap.mjs
├── next.config.mjs          (redirects from the old .html URLs)
└── package.json
```

---

## 🎯 Learning Outcomes

Through building this portfolio, I improved my understanding of:

* Responsive Web Design and CSS layouts
* JavaScript interaction, DOM updates, and event handling
* React components and shared application state
* REST API integration with loading and error states
* Firebase Authentication
* Local storage, persistence, search, filtering, and pagination
* Frontend, backend, and admin application structure
* Git branches, pull requests, code review, and merge conflict resolution
* Website deployment and professional portfolio development

---

## 🧭 Current Focus

The portfolio now documents a progression from static layouts to interactive JavaScript, React applications, API integration, Firebase-backed data, and multi-part full-stack architecture.

* Keep the case studies aligned with the projects currently in the grid.
* Continue developing the Airbnb Clone's guest, host, backend, and admin flows.
* Deploy and document the Airbnb Clone's frontend, backend, and admin services before presenting it as a live project.
* Continue improving accessibility, testing, and production-ready data handling.

## 📈 Future Improvements

* Improve accessibility
* Add more interactive features
* Continue refining the design

---

## 🩹 Changelog

* **Migrated the portfolio from plain HTML/CSS/JavaScript to Next.js (App Router)** — same pages, styles and content, now built from React components. The header, footer and preloader live once in the root layout instead of being copied into four HTML files, the case studies are data in `src/data/projects.js`, images go through `next/image`, and Bootstrap is scoped to the Projects page like before. Old `*.html` URLs redirect to the new routes.
* **Refined the home-page project calls to action** — the featured Airbnb Clone skills now use the same plain stack treatment as project cards, action buttons share a consistent purple-and-navy interaction style, and the Featured badge matches the skill-icon background.
* **Updated site typography** — replaced Inter with Manrope across the Home, About, Projects, and Contact pages for a cleaner, more contemporary visual system.
* **Fixed Home hero section responsiveness** — the hero previously used a fixed `height: 100vh` with `overflow: hidden`, which clipped the heading/copy/buttons on smaller screens. Switched to `min-height: 100vh`, added fluid heading sizing (`clamp()`), tightened padding at tablet/mobile breakpoints, disabled the fixed background attachment on mobile (a known iOS/Android rendering glitch), and made the buttons/profile image scale down properly.
* **Fixed project/case-study grid overflow on narrow phones** — `.card-grid` and `.case-grid` enforced a minimum column width (380–400px) wider than many phone viewports, causing horizontal scrolling. Both now collapse to a single column below 480px.

---


## ⚡ Running Locally

Clone the repository:

```bash
git clone https://github.com/KMukendi10/KazadiMukendiPortfolio.git
cd KazadiMukendiPortfolio
```

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

---

## 👨‍💻 Author

**Kazadi Mukendi**
