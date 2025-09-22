**Use your preferred IDE**
# ServiceHive — Landing Page (UI/UX Design Internship)

## 🎯 Assignment Completion Status: 100% ✅

Landing page for the ServiceHive UI/UX Design internship project. This repo contains the static marketing/assignment site assets, concept notes, and supporting build used to present the work for the internship.

## 🚀 Live Preview

The landing page includes:
- Hero and feature sections showcasing the design system
- Assignment concept notes and deliverables under `code/docs/`
- Responsive assets and images in `src/assets/`

## 📋 What’s included

- `src/` — Vite + React app source for the landing page
- `public/` — static assets (favicon, placeholder images)
- `code/docs/` — assignment documentation and wireframes
- `package.json` / `package-lock.json` — node deps and scripts

## 🛠 Implementation & Highlights

- Responsive, mobile-first layout built with Tailwind CSS
- Design tokens and semantic color system for consistent theming
- Accessibility-conscious components (ARIA, keyboard navigation)
- Optimized images and assets for quick load on the landing page

## 📁 Notable files

- `src/components/ScrollToTop.tsx` — UX helper for navigation
- `src/components/ui-concept-note.md` — design reasoning and notes
- `code/docs/` — assignment docs and wireframes (assignments 1 & 2)

## Technologies Used

- Vite
- TypeScript
- React
- Tailwind CSS

## Development (run locally)

Open a terminal in the project root and run:

```powershell
git clone https://github.com/Kaandizz/ServiceHive-UI-UX-Design-internship.git
cd "ServiceHive-UI-UX-Design-internship/landing-page"
npm install
npm run dev
```

Replace the clone URL above with your fork or preferred remote when working locally.

## Secrets & Sensitive Data

I scanned the project for common secret patterns (.env files, API keys, private key headers, access tokens). No obvious secrets or .env files were found in the `landing-page/` folder. If you have credentials you want removed from git history, I can help by outlining a safe remediation plan (git filter-repo or BFG) and next steps.

## Next steps & recommendations

- Add a `.gitignore` at repo root to exclude local artifacts (node_modules, .env)
- Consider adding `CODE_OF_CONDUCT.md` and `CONTRIBUTING.md` if you plan to accept PRs
- If you want consistent LF line endings across platforms, add a `.gitattributes` file and normalize the repo

---

If you want this README changed further (more screenshots, live demo link, badges), tell me what to add and I’ll update it.