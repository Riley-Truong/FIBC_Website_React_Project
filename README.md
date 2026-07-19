# Faith Independent Baptist Church Website

A production-ready, fully responsive church website built as a single-page application with **React 18**, **Vite**, and **React Router**, deployed on **Netlify**.

**Live site:** https://test-fibc-website.netlify.app/

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?logo=netlify&logoColor=white)

---

## Overview

This site serves Faith Independent Baptist Church of McDonough, Georgia as its public web presence.

The project emphasizes maintainability: page content lives in a separate data layer, the visual system is driven by CSS design tokens, and repeated UI is factored into shared components.

## Tech Stack

| Category | Technology |
|---|---|
| UI framework | React 18 |
| Build tool | Vite 5 |
| Routing | React Router 6 (client-side, `BrowserRouter`) |
| Styling | Bootstrap 5 + React Bootstrap, custom CSS with design tokens |
| Animation | Framer Motion |
| SEO | react-helmet-async (per-page meta tags) |
| Linting | ESLint 9 (flat config) with React Hooks + Refresh plugins |
| Hosting | Netlify (CI build + SPA redirects + security headers) |

## Project Structure

The app lives in the `fibc-react-project/` subdirectory:

```
fibc-react-project/
├── index.html               # SEO meta, fonts, theme-color
├── netlify.toml             # Build config, SPA redirects, security headers
├── vite.config.js           # Dev server + manual chunk splitting
├── eslint.config.js         # ESLint 9 flat config
└── src/
    ├── main.jsx             # Entry: StrictMode, HelmetProvider, BrowserRouter
    ├── App.jsx              # Route table, layout shell (nav/main/footer)
    ├── components/
    │   ├── Navigation.jsx   # Responsive navbar
    │   ├── Footer.jsx
    │   ├── ErrorBoundary.jsx
    │   ├── ScrollToTop.jsx
    │   └── shared/          # PageHero, SectionHeading, SEO
    ├── pages/               # One component per route (14 pages + 404)
    ├── data/                # Content as data: beliefs, ministries, services, staff
    ├── styles/              # design-tokens.css + per-page/component stylesheets
    └── assets/              # Logo and staff imagery
```

### Architecture Notes

- **Separation of content and presentation.** Anything a church admin might want to change (service times, staff bios, belief statements) lives in `src/data/`. Components are pure renderers over that data.
- **Shared page primitives.** `PageHero`, `SectionHeading`, and `SEO` keep the 14 pages visually and structurally consistent without copy-paste.
- **Netlify SPA handling.** `netlify.toml` rewrites all routes to `index.html` (status 200) so deep links and refreshes work with client-side routing, and adds `X-Frame-Options`, `X-Content-Type-Options`, and XSS protection headers.

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# Clone the repository
git clone https://github.com/Riley-Truong/FIBC_Website_React_Project.git
cd FIBC_Website_React_Project/fibc-react-project

# Install dependencies
npm install

# Start the dev server (opens http://localhost:5173)
npm run dev
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

## Deployment

The site deploys to Netlify. `netlify.toml` defines the build (`npm run build` → publish `dist/`), so a push to the connected branch triggers a build and deploy automatically — no manual steps.

## Author

**Riley Truong** — [GitHub](https://github.com/Riley-Truong)
