# ServiceHive — UI/UX Design Internship

Comprehensive front-end deliverables created during the ServiceHive UI/UX Design internship. This repository contains two closely-related projects:

- `chatbot/` — a high-fidelity AI service chatbot UI built with React + TypeScript. Implements persona-driven conversation flows, error escalation, feedback capture, accessible components, and an animation system.
- `landing-page/` — the accompanying marketing and assignment presentation site (also in React + Vite) used to showcase concepts, wireframes, and assignment documentation.

Overview
--------

Both folders are self-contained Vite + TypeScript projects. The `chatbot/` folder houses the interactive UI components and UX deliverables for Assignment 2, while `landing-page/` contains the presentation site and assignment docs (under `code/docs/`). The projects share design tokens and follow a consistent design system (semantic color tokens, accessible typography, 8px grid baseline).

Credit
------

This work was implemented by Hamza Hilal (Kaandizz). All design, implementation, and documentation in this repository were created by Hamza during the internship. If you reuse or adapt this work, please credit Hamza Hilal (Kaandizz).

Quick start
-----------

These instructions assume you have Node.js and npm installed.

To run the chatbot locally:

```powershell
cd chatbot
npm install
npm run dev
```

To run the landing page locally:

```powershell
cd landing-page
npm install
npm run dev
```

Folder layout
-------------

- `chatbot/`
	- `src/` — React + TS source files, key components in `src/components/`
	- `public/` — static assets
	- `ASSIGNMENT_DOCUMENTATION.md` — implementation notes and reasoning

- `landing-page/`
	- `src/` — landing page source and assets (`src/assets/`)
	- `code/docs/` — assignment documentation, wireframes, and concept notes

Why track lockfiles
-------------------

This repository includes `package-lock.json` files (application lockfiles). Keeping lockfiles tracked for app projects is recommended because they ensure reproducible installs across environments and CI. If you prefer not to track lockfiles for library code, that's a separate decision; for app repos, keep them committed.

Detailed README for GitHub
--------------------------

This section is intended for the GitHub project's main README (the file you're viewing). It expands on the quick start with implementation details, build steps, environment variables, testing, and deployment suggestions.

Prerequisites
-------------

- Node.js (LTS recommended, e.g., 18.x or 20.x)
- npm (comes with Node.js) or pnpm/yarn if you prefer (adjust commands accordingly)
- A modern browser for testing (Chrome, Edge, Firefox, Safari)

Repository structure
--------------------

Root
- `README.md` — this file
- `.gitignore` — local ignores
- `chatbot/` — interactive assignment app
- `landing-page/` — presentation site and docs

Chatbot (implementation notes)
------------------------------

- Tech: React + TypeScript + Vite + Tailwind CSS
- Key components: `src/components/Chatbot.tsx`, `ChatMessage.tsx`, `PersonaSelector.tsx`, `ErrorHandoff.tsx` and `ConversationFlow.tsx`.
- Behavior: persona selection => conversation flow => feedback/escalation. The project includes accessibility considerations (keyboard, ARIA) and micro-interactions (typing, animations).

How to develop (chatbot)
------------------------

1. Open a terminal.
2. Change directory into the chatbot app and install deps:

```powershell
cd chatbot
npm install
```

3. Run the dev server:

```powershell
npm run dev
```

4. Build for production:

```powershell
npm run build
```

5. Preview the production build locally:

```powershell
npm run preview
```

Landing page (implementation notes)
-----------------------------------

- Tech: React + TypeScript + Vite + Tailwind CSS
- Purpose: marketing, concept notes and assignment documentation. See `code/docs/` for wireframes and deliverables.

How to develop (landing page)
-----------------------------

```powershell
cd landing-page
npm install
npm run dev
```

Build:

```powershell
npm run build
```

Deployment suggestions
----------------------

- Landing page: GitHub Pages, Netlify, or Vercel are good options. For GitHub Pages, use the Vite build output (`landing-page/dist`) and enable Pages from the repository settings.
- Chatbot: Deploy on Vercel/Netlify as a static site if it doesn’t require a backend. For server interactions or persistence, host the backend (Supabase, Firebase, or any server) and wire up environment variables.

Environment variables and secrets
---------------------------------

- This repository does not include `.env` files. If you need to add secrets or API keys for a real backend, create a `.env` or `.env.local` and add that filename to `.gitignore`.
- Example `.env` entries (do NOT commit values):

```
# .env.example
VITE_API_BASE_URL=https://api.example.com
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

Testing, linting & formatting
-----------------------------

- If the repo uses ESLint or prettier, run those via the project scripts (check `package.json` in each subfolder for exact commands).
- Add tests as needed (Jest, Vitest). Currently the project focuses on UI and documentation; add unit tests for critical components if you plan to expand the codebase.

Security note
-------------

- I scanned the repository history for common secret patterns and did not find obvious matches. If you find a secret in a commit, rotate it immediately and I can help prepare a git-history scrub plan using `git-filter-repo` or BFG (I will provide exact commands and collaborator instructions).

Contributing
------------

- If you want to accept contributions, add `CONTRIBUTING.md` and PR templates under `.github/` directory.
- Use feature branches and PRs; include a small checklist for reviewers (build locally, run lint/tests).

License
-------

If you want this repo to be reusable by others, add a LICENSE file. Common choices: MIT (permissive) or Apache 2.0. Tell me which license you prefer and I will add it.

Credits
-------

Implemented and documented by Hamza Hilal (Kaandizz).

Contact
-------

For questions, history scrub requests, or help deploying, contact Hamza Hilal (Kaandizz) or ask me here and I will prepare the next steps.
Security & secrets
------------------

I scanned the repository for common secret patterns (.env, private keys, access tokens) and did not find obvious matches in the history. If you do have secrets that were committed, rotate them immediately and tell me the filename or exact value; I will prepare a safe git-history scrub plan (git-filter-repo or BFG) and collaborator instructions.

Best practices and recommendations
---------------------------------

- Add a `.gitattributes` to normalize line endings if multiple OS contributors will work on this repo.
- Keep `package-lock.json` tracked for reproducible installs.
- Add `.github/ISSUE_TEMPLATE` and `PULL_REQUEST_TEMPLATE.md` if you expect external contributions.
- Consider a pre-commit secret-scanning hook (detect-secrets or husky + custom script) to prevent future leaks.

License
-------

Add a license file if you want others to reuse the work. If you want, I can add an MIT or other license and include contributor guidelines.

Contact
-------

For questions about this implementation, credit, or to request history scrubbing, contact Hamza Hilal (Kaandizz) or ask me to prepare the next steps here.
