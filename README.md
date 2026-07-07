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
* Team capstone / peer collaboration section
* Certificates section
* Validated contact form
* GitHub and LinkedIn links

---

## 🛠️ Built With

* HTML
* CSS
* JavaScript
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

* Responsive Web Design
* CSS Layouts
* Git & GitHub Workflows
* Website Deployment
* Professional Portfolio Development

---

## 🧭 Term 3 Roadmap

Term 3 is about curation as much as creation — surfacing my best work and showing depth, not just adding more projects.

* [ ] **Second deployed project + case study** — something with more depth than a static landing-page clone (real JS logic, an API, or data handling), deployed and documented at the same case-study standard as the first.
* [x] **Best work leading** — the To-do App (my most functionally complete project) is featured first on the Home and Projects pages.
* [x] **Polished technical write-ups** — all case studies rewritten as problem → approach → trade-offs → outcome, instead of reflection-journal entries.
* [x] **Peer contribution evidence** — added the iHub Africa capstone (Git Manager, 6-person team) to the Projects page.
* [ ] **Mid-year portfolio draft** — this repo should be in a state I'd be comfortable sharing today; revisit before submitting.
* [ ] **Repo/live links for the iHub capstone** — placeholder comment left in `projects.html`; add once available.

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