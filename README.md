# 🌐 Kazadi Mukendi Portfolio

A personal portfolio website showcasing my skills, projects, certifications, and growth as a developer.

## 🚀 Live Demo

🔗 [View Portfolio](https://kmukendi10.github.io/KazadiMukendiPortfolio/)

---

## 📖 About

This portfolio serves as a central place to showcase my projects, technical skills, certifications, and development journey. It reflects my growth from a Mechanical Engineering background into software development and highlights the work I have completed so far.

---

## ✨ Features

* Multi-page structure (Home / About / Projects / Contact)
* Responsive design with mobile nav toggle
* Featured project spotlight
* Project showcase with case studies
* Full-stack Airbnb Clone project with frontend, backend, and admin areas
* Team capstone / peer collaboration evidence
* Certificates section
* Validated contact form
* GitHub and LinkedIn links

---

## 🛠️ Built With

* HTML
* CSS
* JavaScript
* React
* Vite
* Firebase Authentication
* MongoDB
* Firestore
* Supabase
* REST API integration
* Local state and persistence
* Responsive design
* Git branches, pull requests, and code review
* GitHub
* GitHub Pages

---

## 📂 Project Structure

```text
KazadiMukendiPortfolio/
│
├── index.html        (Home)
├── about.html
├── projects.html      (Projects + Case Studies + Collaboration)
├── contact.html
├── styles.css
├── script.js
├── Assets/
└── README.md
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
* Add live deployment and setup documentation for the Airbnb Clone when available.
* Continue improving accessibility, testing, and production-ready data handling.

## 📈 Future Improvements

* Improve accessibility
* Add more interactive features
* Continue refining the design

---

## 🩹 Changelog

* **Fixed Home hero section responsiveness** — the hero previously used a fixed `height: 100vh` with `overflow: hidden`, which clipped the heading/copy/buttons on smaller screens. Switched to `min-height: 100vh`, added fluid heading sizing (`clamp()`), tightened padding at tablet/mobile breakpoints, disabled the fixed background attachment on mobile (a known iOS/Android rendering glitch), and made the buttons/profile image scale down properly.
* **Fixed project/case-study grid overflow on narrow phones** — `.card-grid` and `.case-grid` enforced a minimum column width (380–400px) wider than many phone viewports, causing horizontal scrolling. Both now collapse to a single column below 480px.

---


## ⚡ Running Locally

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
```

Open the project folder and launch `index.html` in your browser.

---

## 👨‍💻 Author

**Kazadi Mukendi**