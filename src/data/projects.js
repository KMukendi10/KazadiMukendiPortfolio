// Project cards + case studies for /projects (extracted verbatim from the old projects.html).
// Order of `projectCards` = order on the grid AND the Previous/Next order inside the drawer.
// `caseStudies['portfolio-website']` has no card on purpose (same as the old site) but opens via /projects#portfolio-website.

export const projectCards = [
  {
    "id": "airbnb-clone",
    "title": "Airbnb Clone",
    "icon": "AirbnbFavicon.svg",
    "tags": [
      "JavaScript",
      "CSS",
      "Backend"
    ],
    "visit": "https://airbnb-clone-frontend-46hl.onrender.com",
    "description": "A full-stack Airbnb-inspired platform organized into separate guest frontend, backend, and admin applications.",
    "image": "Airbnb.png",
    "imageAlt": "Airbnb Clone frontend screenshot"
  },
  {
    "id": "tic-tac-toe",
    "title": "Tic Tac Toe",
    "icon": "TicTacToeFavicon.png",
    "tags": [
      "React",
      "JavaScript",
      "Vite"
    ],
    "visit": "https://kazadi-tic-tac-toe.vercel.app/",
    "description": "A reducer-driven 3x3 Tic Tac Toe with a persistent scoreboard and a move-history panel that lets you jump back to any past turn.",
    "image": "TicTacToe.png",
    "imageAlt": "Tic Tac Toe game screenshot"
  },
  {
    "id": "urban-threads",
    "title": "Urban Threads",
    "icon": "UrbanThreadsFavicon.png",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase"
    ],
    "visit": "https://urban-threads-online-store-puce.vercel.app/",
    "description": "A full e-commerce app for a fictional streetwear brand with Firebase Authentication, a real product catalog, and a persistent cart.",
    "image": "UrbanThreads.png",
    "imageAlt": "Urban Threads e-commerce app screenshot"
  },
  {
    "id": "pinboard",
    "title": "PinBoard",
    "icon": "PinBoardIcon.svg",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "visit": "https://pin-board-navy.vercel.app/",
    "description": "A responsive note board with search, editing, colors, archive and restore flows, delete undo, and localStorage persistence.",
    "image": "PinBoard.png",
    "imageAlt": "PinBoard note-taking app preview"
  },
  {
    "id": "book-library",
    "title": "Book Library",
    "icon": "BookLibraryFavicon.png",
    "tags": [
      "React",
      "Vite",
      "Open Library API"
    ],
    "visit": "https://kmukendi10.github.io/API-Intergratio-Book-Library/",
    "description": "A book search app built on the Open Library API, with proper loading and error states instead of assuming every request succeeds.",
    "image": "BookLibrary.png",
    "imageAlt": "Book Library app screenshot"
  },
  {
    "id": "shopping-clone",
    "title": "Online Mall",
    "icon": "ShoppingCloneFavicon.ico",
    "tags": [
      "React",
      "Context API",
      "Vite"
    ],
    "visit": "https://studentzero68-collab.github.io/Shopping-clone/",
    "description": "A group-built React shopping app with shared product and cart state, search, category filtering, pagination, and a complete checkout flow.",
    "image": "ShoppingClone.png",
    "imageAlt": "Online Mall shopping app preview"
  },
  {
    "id": "ihub-capstone",
    "title": "iHub Website Prototype",
    "icon": "IHubLogo.webp",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Git"
    ],
    "visit": "https://client-website-prototype-i-hub.vercel.app/",
    "description": "A responsive multi-page website built by a six-person team, with communication, Git workflow, and pull-request coordination managed by me.",
    "image": "iHubWebsite.png",
    "imageAlt": "iHub Africa website prototype screenshot"
  },
  {
    "id": "google-keep-react",
    "title": "Google Keep Clone",
    "icon": "GoogleKeepFavicon.png",
    "tags": [
      "React",
      "JavaScript",
      "Vite"
    ],
    "visit": "https://google-keep-clone-react-gamma.vercel.app/",
    "description": "A React rebuild of Google Keep with a masonry note grid, labels, dark mode, and drag-and-drop reordering.",
    "image": "GoogleKeepReact.png",
    "imageAlt": "Google Keep Clone React app screenshot"
  },
  {
    "id": "error404",
    "title": "Animated 404 Error Page",
    "icon": "Error404Icon.svg",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "visit": "https://error404-jade.vercel.app/",
    "description": "A responsive group project turning a standard 404 state into an animated experience with a flying paper plane and glowing typography.",
    "image": "Error404.png",
    "imageAlt": "Animated 404 Error Page project preview"
  },
  {
    "id": "button-wave-style",
    "title": "Button Wave Style",
    "icon": "ButtonWaveIcon.svg",
    "tags": [
      "HTML",
      "CSS"
    ],
    "visit": "https://button-wave-style.vercel.app/",
    "description": "A collaborative CSS interaction project exploring a wave-style button animation with a clean, responsive presentation.",
    "image": "ButtonWave.png",
    "imageAlt": "Button Wave Style project preview"
  },
  {
    "id": "twitter-clone",
    "title": "Twitter/X Clone",
    "icon": "TwitterLogo.svg",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "visit": "https://twitter-landing-page-three.vercel.app/",
    "description": "A Twitter/X feed clone with real interactivity — composing posts and updating state live in the browser.",
    "image": "Twitter.png",
    "imageAlt": "Twitter/X clone project screenshot"
  },
  {
    "id": "quiz-widget",
    "title": "Quiz Widget",
    "icon": "QuizWidgetIcon.svg",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "visit": "https://kmukendi10.github.io/quiz-widget-project/",
    "description": "An interactive quiz with instant feedback, built to focus purely on JavaScript scoring logic rather than layout.",
    "image": "QuizWidget.png",
    "imageAlt": "Interactive quiz widget project screenshot"
  }
];

export const caseStudies = {
  "portfolio-website": {
    "id": "portfolio-website",
    "ariaLabel": "Portfolio Website case study",
    "image": "KazadiProfile.png",
    "imageAlt": "Portfolio site preview",
    "tag": "HTML, CSS & JavaScript",
    "title": "Built to Grow: My Portfolio System",
    "sections": {
      "problem": {
        "heading": "The Brief",
        "body": "Hiring managers and clients skim. A CV that only lists skills gives them nothing to verify, and a portfolio that is one long page of screenshots gives them nothing to read. I needed one fast-to-scan home for all my work, where someone could judge my ability in a couple of minutes and then go deeper on any project that caught their eye, and where adding next term's projects wouldn't mean rebuilding the whole site."
      },
      "approach": {
        "heading": "The Build",
        "body": "I split the site into independent pages (home, about, projects, contact) instead of one long scroll, so each visitor goes straight to what they came for. The projects page is a visual grid for quick scanning, and every project opens its own case study in this slide-in panel, organised as the problem, the build, the trade-off, and the result, so the thinking behind the work is visible and not just the finished screen. A dark/light theme, a responsive layout, and a contact form connected to a real form service round it out."
      },
      "tradeoffs": {
        "heading": "The Trade-off",
        "body": "I chose plain HTML, CSS, and JavaScript over a framework or static site generator. That kept the build dependency-free and let me focus on fundamentals, and the site deploys to Vercel with no build step. The cost is duplicated markup: the header and footer are repeated on every page, so changing the navigation means editing every file and risks the pages drifting apart."
      },
      "outcome": {
        "heading": "The Result",
        "body": "The site now works as a live record of my progress. The structure has held up across three terms of new content without a rewrite, and every project is reachable, explained, and linked to its code. For anyone evaluating me, that turns “trust me, I can build” into something they can open and check for themselves. The next improvement is removing the markup duplication, likely with a build tool or JS-rendered includes for the shared header and footer."
      }
    },
    "tools": [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
      "Chrome DevTools"
    ],
    "team": null,
    "links": [
      {
        "label": "View Website",
        "href": "/",
        "kind": "primary",
        "internal": true
      },
      {
        "label": "View Code",
        "href": "https://github.com/KMukendi10/KazadiMukendiPortfolio",
        "kind": "outline",
        "internal": false
      }
    ]
  },
  "urban-threads": {
    "id": "urban-threads",
    "ariaLabel": "Urban Threads case study",
    "image": "UrbanThreads.png",
    "imageAlt": "Urban Threads preview",
    "tag": "HTML, CSS, JavaScript & Firebase",
    "title": "From Catalog to Cart: Urban Threads",
    "sections": {
      "problem": {
        "heading": "The Brief",
        "body": "A small fashion brand can't sell online with a catalogue alone. Shoppers need accounts, and their cart has to survive a refresh, a closed tab, or a switch to another device, otherwise they abandon it and the sale is lost. Earlier projects of mine either had no backend or kept everything in localStorage, which can't do that. Urban Threads tackles the real situation of a shopper who finds something they like, signs in, and expects the cart to still be there when they come back. The assignment asked for Firebase Authentication and user-specific state instead of hardcoded product data."
      },
      "approach": {
        "heading": "The Build",
        "body": "Products load dynamically on the shop page instead of being hardcoded in the HTML, so the catalogue can change without touching the code. Firebase Authentication handles sign-up and login, and each signed-in user's cart is kept against their own account, separate from the public catalogue, rather than relying only on localStorage. On top of the core requirement I added category filtering, search, and pagination so a larger catalogue stays usable, plus toast notifications, a profile dropdown, and a dark mode built on CSS custom properties."
      },
      "tradeoffs": {
        "heading": "The Trade-off",
        "body": "I let shoppers browse and search the whole catalogue without an account and only prompt for login at the moment they click “Add to Cart.” That is more work than putting the whole shop behind a login wall, because every action has to handle both signed-in and signed-out states. It matches how real stores behave, though: forcing sign-up before someone can even look at the products is a well-known way to lose them."
      },
      "outcome": {
        "heading": "The Result",
        "body": "A fully working store where a visitor can browse, filter, and search products, sign in, and build a cart that belongs to them. For a small retailer, this kind of build means customers can shop without friction and are only asked for an account once they've shown buying intent, which is the point where sign-up actually makes sense. The next step is an admin panel so the catalogue can be managed from a form instead of typing documents into the Firebase console by hand. That is the change that would let a non-technical shop owner run the store themselves."
      }
    },
    "tools": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Auth",
      "Git",
      "GitHub"
    ],
    "team": null,
    "links": [
      {
        "label": "View Website",
        "href": "https://urban-threads-online-store-puce.vercel.app/",
        "kind": "primary",
        "internal": false
      },
      {
        "label": "View Code",
        "href": "https://github.com/KMukendi10/UrbanThreadsOnlineStore.git",
        "kind": "outline",
        "internal": false
      }
    ]
  },
  "google-keep-react": {
    "id": "google-keep-react",
    "ariaLabel": "Google Keep Clone React case study",
    "image": "GoogleKeepReact.png",
    "imageAlt": "Google Keep Clone React preview",
    "tag": "React, JavaScript & Vite",
    "title": "Notes, Labels & State: Google Keep Rebuilt",
    "sections": {
      "problem": {
        "heading": "The Brief",
        "body": "People capture ideas faster than they organise them. Quick thoughts, to-dos, and reminders pile up in one place until nothing can be found, so a notes app has to make capture instant and finding things later easy, through labels, archiving, reminders, and a trash that forgives mistakes. I'd already built this as a vanilla JS clone, so the question this time was whether the same product could be structured so it keeps growing features without turning into one tangled script. The assignment also required one manual feature and one AI-assisted feature, and honesty about which was which."
      },
      "approach": {
        "heading": "The Build",
        "body": "Every piece of shared state (notes, labels, theme, and reminders) lives in one hook, <code>useKeepStore</code>, instead of being scattered across components, so every component reads and updates the same source of truth. The interface is split into focused components, including a masonry note grid. Labels were the manual build; dark mode and drag-and-drop reordering were the AI-assisted features, where I used AI to help scaffold the logic and then verified every interaction by hand in the browser."
      },
      "tradeoffs": {
        "heading": "The Trade-off",
        "body": "Notes still persist to localStorage rather than a backend. That kept the project focused on component structure and state management instead of infrastructure, but it means notes live in one browser and don't sync between devices, which is something a real notes app can't get away with. Urban Threads' cart already shows the fix, and it is the obvious next step."
      },
      "outcome": {
        "heading": "The Result",
        "body": "A fully working notes app with a masonry grid, label filtering, archive and trash with a 7-day auto-purge, reminders sorted by due date, dark mode, and drag-to-reorder. The lesson for a real product is that a productivity tool lives or dies on trust: people only keep using a notes app if they believe it won't lose their notes, which is why archive, trash, and reminders matter as much as the editor itself. The next step is swapping localStorage for Firebase, the same pattern I already proved out on Urban Threads, so notes follow the user across devices."
      }
    },
    "tools": [
      "React",
      "JavaScript",
      "Vite",
      "CSS",
      "Git",
      "GitHub"
    ],
    "team": null,
    "links": [
      {
        "label": "View Website",
        "href": "https://google-keep-clone-react-gamma.vercel.app/",
        "kind": "primary",
        "internal": false
      },
      {
        "label": "View Code",
        "href": "https://github.com/KMukendi10/GoogleKeepCloneReact.git",
        "kind": "outline",
        "internal": false
      }
    ]
  },
  "book-library": {
    "id": "book-library",
    "ariaLabel": "Book Library case study",
    "image": "BookLibrary.png",
    "imageAlt": "Book Library preview",
    "tag": "React, Vite & the Open Library API",
    "title": "From Query to Cover: Book Library",
    "sections": {
      "problem": {
        "heading": "The Brief",
        "body": "Readers need a fast way to find a book and see what it is without knowing exactly what they're looking for. The data to do that already exists in open catalogues, but it lives on someone else's server, so a real app has to cope with slow responses, failed requests, and searches that return nothing. Every project I'd built before this used data I controlled. This one needed a live third-party API and an interface that stays useful when the network doesn't cooperate."
      },
      "approach": {
        "heading": "The Build",
        "body": "Book data comes from the Open Library API via <code>fetch</code>, with explicit loading and error states so the user sees what is happening, instead of a blank screen, while the request is in flight or after it fails. Results show cover art alongside the book details so a reader can recognise a book at a glance. Search is submit-triggered rather than live-as-you-type, to avoid firing a request on every keystroke."
      },
      "tradeoffs": {
        "heading": "The Trade-off",
        "body": "Submit-triggered search costs a bit of the instant feedback a live search gives, but it keeps request volume sane against a free public API with no key and no rate-limit budget behind it. It is the same instinct a production team applies when an external service has usage limits: protect the dependency you don't control."
      },
      "outcome": {
        "heading": "The Result",
        "body": "A deployed search app that turns a query into a browsable set of books and recovers gracefully when the API is slow or down. Getting it live on GitHub Pages meant tracking down a blank-page bug that turned out to be a missing <code>base: './'</code> in <code>vite.config.js</code>, which taught me that “works on my machine” and “works in production” are two different checks. The broader takeaway is that a product can be built on a third-party data source without running its own database. The next step is adding pagination to the search results, the same way I added it to Urban Threads' product grid."
      }
    },
    "tools": [
      "React",
      "Vite",
      "JavaScript",
      "Open Library API",
      "Git",
      "GitHub"
    ],
    "team": null,
    "links": [
      {
        "label": "View Website",
        "href": "https://kmukendi10.github.io/API-Intergratio-Book-Library/",
        "kind": "primary",
        "internal": false
      },
      {
        "label": "View Code",
        "href": "https://github.com/KMukendi10/API-Intergratio-Book-Library.git",
        "kind": "outline",
        "internal": false
      }
    ]
  },
  "quiz-widget": {
    "id": "quiz-widget",
    "ariaLabel": "Quiz Widget case study",
    "image": "QuizWidget.png",
    "imageAlt": "Quiz Widget preview",
    "tag": "HTML, CSS & JavaScript",
    "title": "Making Every Answer Count: Quiz Widget",
    "sections": {
      "problem": {
        "heading": "The Brief",
        "body": "Quizzes are how schools, trainers, and onboarding programmes check that people have actually understood something, so the scoring has to be trustworthy. If a score can be thrown off by a double-click or a re-render, the result means nothing. I wanted a small project focused purely on that logic, tracking which question you're on and how many you've got right, correctly every time, without layout work getting in the way, since every earlier project had already covered layout."
      },
      "approach": {
        "heading": "The Build",
        "body": "Score and question index are tracked in JavaScript variables, not read back from the DOM, so the result is always computed instead of counted off whatever happens to be on screen. Answer buttons use event delegation on the container instead of a separate listener per button, which keeps the code short and works no matter how many answers a question has. Each answer gets instant feedback, and a final screen reports the score."
      },
      "tradeoffs": {
        "heading": "The Trade-off",
        "body": "Questions are hardcoded directly in the JS file rather than loaded from a separate JSON file or API. For a quiz this size that is the right call, because pulling in a fetch layer for a dozen static questions would add complexity with no real payoff. The cost is that adding or editing a question means editing the JavaScript, which a non-developer such as a teacher or trainer couldn't do."
      },
      "outcome": {
        "heading": "The Result",
        "body": "A self-contained quiz with instant feedback per question and a final score screen. Because the scoring logic is separate from the content, it is the core of something a school, trainer, or onboarding programme could reuse with their own questions. The next step is moving the question set into its own JSON file so questions can be added without touching the scoring logic at all, which is the change that would let a non-developer maintain it."
      }
    },
    "tools": [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub"
    ],
    "team": null,
    "links": [
      {
        "label": "View Website",
        "href": "https://kmukendi10.github.io/quiz-widget-project/",
        "kind": "primary",
        "internal": false
      },
      {
        "label": "View Code",
        "href": "https://github.com/KMukendi10/quiz-widget-project.git",
        "kind": "outline",
        "internal": false
      }
    ]
  },
  "twitter-clone": {
    "id": "twitter-clone",
    "ariaLabel": "Twitter/X Clone case study",
    "image": "Twitter.png",
    "imageAlt": "Twitter/X clone preview",
    "tag": "HTML, CSS & JavaScript",
    "title": "A Feed That Remembers: Twitter/X Clone",
    "sections": {
      "problem": {
        "heading": "The Brief",
        "body": "Social products succeed or fail on how immediate they feel: you post, the feed updates, the like count moves, and nothing reloads. A static mock-up hides the hard part, which is keeping what's on screen in sync with what the user just did. Every project I'd built before this was a static layout clone, good for CSS practice but none of them needed to remember anything. I wanted a build that had to track state and respond to user actions in real time, closer to how a real product behaves."
      },
      "approach": {
        "heading": "The Build",
        "body": "I rebuilt the core Twitter/X feed interface with HTML and CSS for the layout, then used JavaScript to handle interactions: composing a post, updating counts, and reflecting every state change in the DOM immediately instead of reloading anything. Around the feed I added a compose modal, a trending sidebar, an Explore page, and dark mode so it behaves like a small product and not a single screen."
      },
      "tradeoffs": {
        "heading": "The Trade-off",
        "body": "I kept state in memory in the browser instead of wiring up a backend or persistence layer. That let me focus on getting the interaction logic and DOM updates right first, but nothing is saved between page reloads, and a real social product would lose every post on refresh. This is a prototype of the interface, not of the data layer."
      },
      "outcome": {
        "heading": "The Result",
        "body": "It is my most functionally complete project so far: a feed that responds instantly to what the user does, which is the core experience any social or community product has to get right before anything else matters. It shows I can manage interface state without a framework. The next step is adding persistence, likely local storage first and an API later, so state survives a refresh."
      }
    },
    "tools": [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
      "Chrome DevTools"
    ],
    "team": null,
    "links": [
      {
        "label": "View Website",
        "href": "https://twitter-landing-page-three.vercel.app/",
        "kind": "primary",
        "internal": false
      },
      {
        "label": "View Code",
        "href": "https://github.com/KMukendi10/TwitterLandingPage.git",
        "kind": "outline",
        "internal": false
      }
    ]
  },
  "ihub-capstone": {
    "id": "ihub-capstone",
    "ariaLabel": "iHub Team Capstone case study",
    "image": "iHubWebsite.png",
    "imageAlt": "iHub Africa website prototype preview",
    "tag": "HTML, CSS & JavaScript — 6-person team",
    "title": "Six Builders, One Ship: iHub Capstone",
    "sections": {
      "problem": {
        "heading": "The Brief",
        "body": "When several developers work on one codebase, the expensive failures are rarely about code quality. They are about coordination: two people edit the same page, one merge overwrites the other, and the site breaks days before hand-over. Every project before this was solo, with one person, one repo, and no coordination needed. This capstone put six people on the same multi-page client website prototype at once, so the real problem was delivering a working site while keeping six people's changes from constantly breaking each other."
      },
      "approach": {
        "heading": "The Build",
        "body": "As Git Manager, I helped keep the team aligned through clear communication and a feature-branch workflow. Everyone worked on their own branch, opened a pull request, and I reviewed it before it merged into main. That gave us a single checkpoint to catch conflicts and layout regressions before they landed, instead of finding out after the fact, and it gave teammates one predictable way to get their work into the shared site."
      },
      "tradeoffs": {
        "heading": "The Trade-off",
        "body": "Requiring review before every merge slowed us down compared to everyone pushing straight to main, since a teammate's work couldn't go live until it had been looked at. But on a 6-person team touching the same pages, that checkpoint is what kept the site from breaking every other day. Slower and stable beat fast and broken for this team size, and it is the same trade-off engineering teams accept with code review and protected branches."
      },
      "outcome": {
        "heading": "The Result",
        "body": "Shipped a full multi-page site with zero unresolved merge conflicts reaching main. For a client, that means a prototype that arrives intact instead of breaking at the last minute, and for the team it meant a repeatable way of working together. The role taught me more about Git itself (rebasing, resolving conflicts, protecting a branch) than any solo project had. The next step is applying the same branch-protection workflow to my own solo repos going forward."
      }
    },
    "tools": [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
      "Pull Requests",
      "Team Communication"
    ],
    "team": "<strong>Team:</strong> Kazadi (Git Manager), Nonkululeko (Project Lead), Tina (Frontend Developer), Gcina (JavaScript Developer), Emily (Designer), Dido (QA Tester).",
    "links": [
      {
        "label": "View Website",
        "href": "https://client-website-prototype-i-hub.vercel.app/",
        "kind": "primary",
        "internal": false
      },
      {
        "label": "View Code",
        "href": "https://github.com/KMukendi10/Client-Website-Prototype-iHub.git",
        "kind": "outline",
        "internal": false
      }
    ]
  },
  "button-wave-style": {
    "id": "button-wave-style",
    "ariaLabel": "Button Wave Style case study",
    "image": "ButtonWave.png",
    "imageAlt": "Button Wave Style preview",
    "tag": "HTML & CSS",
    "title": "Making Motion Visible: Button Wave Style",
    "sections": {
      "problem": {
        "heading": "The Brief",
        "body": "Buttons are where a website asks for something: sign up, buy, send. When a button gives no feedback, users hesitate and wonder whether they clicked it. The problem was to make a button feel responsive and worth clicking using only CSS, with no JavaScript and no heavy component library to slow the page down or get in the way of reuse. As a group project, we aimed for a component small enough that any team could drop it into their own site."
      },
      "approach": {
        "heading": "The Build",
        "body": "Our group used layered CSS shapes and hover transitions to create the wave effect, keeping the markup small and the interaction easy to reuse. Because the motion is pure CSS, the button works anywhere plain HTML does with nothing to install, and the live demo is responsive across screen sizes."
      },
      "tradeoffs": {
        "heading": "The Trade-off",
        "body": "A focused animation keeps the component fast and portable, but motion has to earn its place. A wave that is too slow or too busy becomes an annoyance, and low-contrast text on a moving background is hard to read. It needs careful timing and contrast choices to stay readable across themes and screen sizes."
      },
      "outcome": {
        "heading": "The Result",
        "body": "A live, responsive button experiment that shows how much personality and feedback a call-to-action can carry with core CSS alone. For a business, small interaction details like this are what make a site feel polished and trustworthy, at almost no cost in page weight or dependencies. It also demonstrated collaborative delivery: several people contributing to one small, well-scoped component."
      }
    },
    "tools": [
      "HTML",
      "CSS",
      "Animations",
      "Responsive Design"
    ],
    "team": null,
    "links": [
      {
        "label": "View Website",
        "href": "https://button-wave-style.vercel.app/",
        "kind": "primary",
        "internal": false
      },
      {
        "label": "View Code",
        "href": "https://github.com/KMukendi10/Button-Wave--Style",
        "kind": "outline",
        "internal": false
      }
    ]
  },
  "error404": {
    "id": "error404",
    "ariaLabel": "Animated 404 Error Page case study",
    "image": "Error404.png",
    "imageAlt": "Animated 404 Error Page preview",
    "tag": "HTML, CSS & JavaScript — 3-person group",
    "title": "Turning an Error Into an Experience: Animated 404",
    "sections": {
      "problem": {
        "heading": "The Brief",
        "body": "Every site eventually sends someone to a page that doesn't exist, through a broken link, a mistyped address, or a removed page. A plain “Page Not Found” is a dead end, and visitors who hit one often just leave. Our group set out to turn that moment into one that still feels intentional and, more importantly, gives the visitor a clear way back: a responsive 404 page that is animated, on-brand, and useful."
      },
      "approach": {
        "heading": "The Build",
        "body": "We combined semantic HTML, responsive CSS, and keyframe animations for the glowing typography, and used JavaScript with <code>requestAnimationFrame()</code> to animate the flying paper plane smoothly. Two clear recovery actions, going home and reloading, connect the personality of the page to something the visitor can actually do next."
      },
      "tradeoffs": {
        "heading": "The Trade-off",
        "body": "Motion gives the error state more personality, but it needs restraint: on smaller screens the message and the recovery buttons must stay clear, and the animation shouldn't compete with them. The priority was that the page is a working error page first and a showpiece second."
      },
      "outcome": {
        "heading": "The Result",
        "body": "A live, responsive error page with animated typography, a flying paper plane, and clear recovery buttons. For a business, a good 404 page is a small but real retention tool, because it gives a lost visitor a reason and a route to stay on the site. The project also gave me practice collaborating across a shared frontend build."
      }
    },
    "tools": [
      "HTML",
      "CSS",
      "JavaScript",
      "CSS Animations",
      "Responsive Design",
      "Group Collaboration"
    ],
    "team": "<strong>Team:</strong> Genius Mathebula, Kazadi Mukendi, and Tina Ayanda Fezani.",
    "links": [
      {
        "label": "View Website",
        "href": "https://error404-jade.vercel.app/",
        "kind": "primary",
        "internal": false
      },
      {
        "label": "View Code",
        "href": "https://github.com/naledimathebula/error404",
        "kind": "outline",
        "internal": false
      }
    ]
  },
  "tic-tac-toe": {
    "id": "tic-tac-toe",
    "ariaLabel": "Tic Tac Toe case study",
    "image": "TicTacToe.png",
    "imageAlt": "Tic Tac Toe game screenshot",
    "tag": "React & useReducer",
    "title": "One Reducer, Every Move: Tic Tac Toe",
    "sections": {
      "problem": {
        "heading": "The Brief",
        "body": "Most bugs in interactive apps come from state that is changed in many places at once, so nobody can say how the screen got into its current condition. The same problem shows up in shopping carts, forms, and dashboards, and it gets worse with every feature added. This project uses a simple game to practise the fix: all state in one place, and every change going through one predictable path. The requirements were a 3x3 Tic Tac Toe with clean win/draw detection, one manual feature built without AI assistance, and one advanced feature on top."
      },
      "approach": {
        "heading": "The Build",
        "body": "All game state lives in one <code>useReducer</code> hook with four actions (MAKE_MOVE, JUMP_TO_MOVE, NEW_GAME, and RESET_SCORES), so every change to the board, scoreboard, or history runs through the same predictable path. Because every change is a named action, any bug can be traced back to the exact action that caused it, and adding a feature means adding an action instead of touching logic scattered across components."
      },
      "tradeoffs": {
        "heading": "The Trade-off",
        "body": "Routing every interaction through one reducer took more upfront action-design work than scattering useState calls across components. The payoff is that it kept the scoreboard, move history, and board state consistent as features were added, which is the trade that matters in any app expected to keep growing."
      },
      "outcome": {
        "heading": "The Result",
        "body": "A scoreboard that persists across new games and resets on demand, plus a move-history panel where clicking any past move jumps the board back to that state. Making a new move from a jumped-back point branches off and discards the old future, matching the official React tutorial's time-travel behaviour. Beyond the game, it is a small proof that I can design state so it stays debuggable as an app grows, which is what keeps maintenance costs down in real product work."
      }
    },
    "tools": [
      "React",
      "Vite",
      "useReducer",
      "State Management"
    ],
    "team": null,
    "links": [
      {
        "label": "View Website",
        "href": "https://kazadi-tic-tac-toe.vercel.app/",
        "kind": "primary",
        "internal": false
      },
      {
        "label": "View Code",
        "href": "https://github.com/KMukendi10/KazadiTicTacToe",
        "kind": "outline",
        "internal": false
      }
    ]
  },
  "shopping-clone": {
    "id": "shopping-clone",
    "ariaLabel": "Online Mall case study",
    "image": "ShoppingClone.png",
    "imageAlt": "Online Mall shopping app preview",
    "tag": "React, Context API & Vite — 6-person group",
    "title": "One Cart, Shared State: Online Mall",
    "sections": {
      "problem": {
        "heading": "The Brief",
        "body": "Online shoppers abandon purchases when the experience feels disjointed: the cart doesn't match what they picked, the price changes at checkout, or there's no clear view of the total. For a South African audience there is extra complexity, because prices involve VAT, delivery costs, different payment methods, and instalment plans. Our group needed to build a responsive shopping experience (a live product catalogue, filtering, pagination, a cart, and checkout) that behaves like one connected application and shows honest, local pricing."
      },
      "approach": {
        "heading": "The Build",
        "body": "We used React Context providers to share product and cart state across the navigation, catalogue, product cards, pagination, and checkout drawer, so every part of the app agrees on what's in the cart. Products come from DummyJSON, with a fallback list for failed requests so the shop never shows an empty page. Pricing handles South African VAT, delivery, payment methods, and instalment plans inside a multi-step checkout."
      },
      "tradeoffs": {
        "heading": "The Trade-off",
        "body": "Context kept the shared state understandable for a six-person group and avoided adding Redux setup, but the growing application still depends on clear provider boundaries and disciplined component responsibilities. If components start reaching into state they don't own, re-renders spread and bugs get harder to trace, so the group had to agree on who owns what."
      },
      "outcome": {
        "heading": "The Result",
        "body": "A deployed, responsive online mall with catalogue search, categories, pagination, theme persistence, cart calculations, and a multi-step checkout, built as a group. For a retailer, the value is a storefront where customers can see the real cost of an order before they commit, including VAT and delivery, which removes a common reason shoppers abandon a cart at the last step. Building it in a six-person team also meant sharing one codebase and agreeing on structure."
      }
    },
    "tools": [
      "React",
      "React Router",
      "Context API",
      "Vite",
      "DummyJSON API",
      "Group Collaboration"
    ],
    "team": "<strong>Contributors:</strong> Kazadi Mukendi, studentzero68-collab, naledimathebula, Ayandarrrr, cursoragent, and Ricardo-ngozo.",
    "links": [
      {
        "label": "View Website",
        "href": "https://studentzero68-collab.github.io/Shopping-clone/",
        "kind": "primary",
        "internal": false
      },
      {
        "label": "View Code",
        "href": "https://github.com/studentzero68-collab/Shopping-clone.git",
        "kind": "outline",
        "internal": false
      }
    ]
  },
  "pinboard": {
    "id": "pinboard",
    "ariaLabel": "PinBoard case study",
    "image": "PinBoard.png",
    "imageAlt": "PinBoard note-taking app preview",
    "tag": "HTML, CSS & JavaScript",
    "title": "A Board That Remembers: PinBoard",
    "sections": {
      "problem": {
        "heading": "The Brief",
        "body": "People jot things down constantly, whether tasks, ideas, or things to remember, and a notes tool that is awkward or that loses what you wrote quickly stops being used. A useful board has to cover the everyday actions of creating, editing, searching, archiving, restoring, and deleting notes, and it should forgive mistakes. The project needed to go beyond a static note layout and support that whole lifecycle without an account, a server, or an install."
      },
      "approach": {
        "heading": "The Build",
        "body": "I built the note board in vanilla HTML, CSS, and JavaScript, with a single state model rendered into the board and persisted to localStorage. The interface also includes colour selection so notes can be told apart at a glance, tooltips, a responsive sidebar, and an undo window after deletion so an accidental delete isn't permanent."
      },
      "tradeoffs": {
        "heading": "The Trade-off",
        "body": "Keeping the app fully static makes it simple to deploy and run without a backend, but localStorage means notes remain tied to the current browser instead of syncing across devices. That is acceptable for a lightweight personal tool, and it is the first thing I would change if more than one device mattered."
      },
      "outcome": {
        "heading": "The Result",
        "body": "A live, responsive note-taking app that covers the whole note lifecycle and demonstrates practical state management, persistence, filtering, and interaction design without a framework or build step. Because it needs no backend or sign-up, it is usable the moment it loads, which is a real advantage for lightweight tools where friction kills adoption. The obvious improvement is syncing notes across devices."
      }
    },
    "tools": [
      "HTML",
      "CSS",
      "JavaScript",
      "localStorage",
      "Responsive Design"
    ],
    "team": null,
    "links": [
      {
        "label": "View Website",
        "href": "https://pin-board-navy.vercel.app/",
        "kind": "primary",
        "internal": false
      },
      {
        "label": "View Code",
        "href": "https://github.com/KMukendi10/PinBoard",
        "kind": "outline",
        "internal": false
      }
    ]
  },
  "airbnb-clone": {
    "id": "airbnb-clone",
    "ariaLabel": "Airbnb Clone case study",
    "image": "Airbnb.png",
    "imageAlt": "Airbnb Clone frontend screenshot",
    "tag": "JavaScript, CSS & full-stack architecture",
    "title": "A Platform in Three Parts: Airbnb Clone",
    "sections": {
      "problem": {
        "heading": "The Brief",
        "body": "A short-term rental marketplace serves three different people at once: guests who want to find and book a place, hosts who list it, and operators who keep the platform running. A single landing page can't serve any of them. This project addresses what it takes to build a product where each group gets its own experience and only the right people can do the right things, such as an admin managing listings that guests should never be able to touch."
      },
      "approach": {
        "heading": "The Build",
        "body": "I organised the repository into independent frontend, backend, and admin applications so each part of the product has a clear responsibility and can evolve without turning the project into one large codebase. The guest frontend and the admin dashboard are React apps built to match Figma designs, including filter pills that filter listings on the client, and they talk to a Node.js/Express backend with MongoDB for the data. The backend handles authentication with user roles and image uploads, so what a person sees and can do depends on who they are."
      },
      "tradeoffs": {
        "heading": "The Trade-off",
        "body": "Separating the applications adds setup and coordination overhead: three things to run locally, separate environment variables, and cross-origin configuration (I had to resolve CORS issues to get the apps talking to each other). In return it reflects a more realistic product structure and keeps guest-facing, server, and administrative concerns isolated, so each can be deployed and secured on its own terms."
      },
      "outcome": {
        "heading": "The Result",
        "body": "The repository now provides a foundation for a full Airbnb-style platform with guest, host, and admin flows. For a marketplace business, that separation is what lets the public booking experience, the management tools, and the data layer each be owned, scaled, and secured independently. The guest frontend is deployed on Render; backend and admin deployment links will be added once those services are hosted and their environment variables are configured."
      }
    },
    "tools": [
      "JavaScript",
      "CSS",
      "Backend",
      "Admin Dashboard",
      "Git",
      "GitHub"
    ],
    "team": null,
    "links": [
      {
        "label": "View Website",
        "href": "https://airbnb-clone-frontend-46hl.onrender.com",
        "kind": "primary",
        "internal": false
      },
      {
        "label": "View Code",
        "href": "https://github.com/KMukendi10/Airbnb-Clone",
        "kind": "outline",
        "internal": false
      }
    ]
  }
};
