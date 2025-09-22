# ServiceHive — UI/UX Design Internship

Professional, portfolio-ready front-end deliverables from the ServiceHive UI/UX Design internship. This repository showcases two related projects:

- `chatbot/` — a high-fidelity AI service chatbot UI built with React + TypeScript (assignment work). Implements persona-driven conversation flows, human-handoff, accessibility features, and polished micro-interactions.
- `landing-page/` — a responsive marketing and assignment presentation site (Vite + React) that contains concept notes, wireframes, and final deliverables.

Why this repo is portfolio-ready
--------------------------------

- Complete UI implementations with a clear UX rationale and documentation
- Accessible components and keyboard-first interactions
- Production-friendly Vite builds and clear run/build instructions
- Design system tokens and consistent styling across projects

Highlights
----------

- Persona-driven chatbot with configurable conversation flows
- Error handoff and feedback collection components
- Mobile-first responsive landing page with assignment documentation

Technology stack
----------------

- Frontend: React + TypeScript + Vite
- Styling: Tailwind CSS (with design tokens)
- Tooling: npm, ESLint (if present), Prettier (optional)

Getting started (developer)
---------------------------

Prerequisites

- Node.js LTS (18.x or later recommended)
- npm (or pnpm/yarn if you prefer)

Run locally — Chatbot

```powershell
cd chatbot
npm install
npm run dev
```

Run locally — Landing page

```powershell
cd landing-page
npm install
npm run dev
```

Build for production (example for each project)

```powershell
cd chatbot
npm run build

cd ../landing-page
npm run build
```

Preview production build

```powershell
cd chatbot
npm run preview
```

Recommended .env usage
----------------------

- Add runtime secrets in `.env` or `.env.local` and never commit those files. Use `.env.example` to document required variables.

Example `.env.example` (do NOT commit real values):

```
# .env.example
VITE_API_BASE_URL=https://api.example.com
VITE_SUPABASE_URL=https://<your-supabase>.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

Project structure overview
--------------------------

- `chatbot/` — main interactive application
	- `src/components/` — core components (Chatbot, ChatMessage, PersonaSelector, QuickReplies, ErrorHandoff)
	- `ASSIGNMENT_DOCUMENTATION.md` — requirements mapping and design notes

- `landing-page/` — presentation site and assignment docs
	- `code/docs/` — concept notes, flows, personas, and wireframes
	- `src/assets/` — hero and other images used in the site

Deployment suggestions
----------------------

- Landing page: deploy to GitHub Pages / Vercel / Netlify. For GitHub Pages, publish the `landing-page/dist` folder.
- Chatbot: deploy to Vercel or Netlify for a static front-end. If you need persistence or real AI back-ends, use Supabase/Firebase/AWS and store secrets in the deployment provider's environment variable storage.

Testing, linting and CI
----------------------

- Add ESLint and Prettier if not present to maintain code quality.
- Add tests with Vitest or Jest for core components (optional but recommended for a professional repo).
- Add a basic GitHub Actions workflow to run lint and build on PRs (I can scaffold this if you want).

Security & secrets
------------------

- I scanned the repository for common secrets and did not find obvious matches in history. That reduces risk but is not a guarantee. If you ever commit credentials accidentally, rotate them immediately and we can remove them from git history using `git-filter-repo` or the BFG tool.

Showcase and screenshots (recommended)
-------------------------------------

- Add a `docs/` or `screenshots/` folder with high-quality images of the UI (desktop and mobile). Use the README to embed a few key screenshots and a short demo GIF to make the repo stand out to reviewers.

Contribution and license
------------------------

- If you want others to contribute, add `CONTRIBUTING.md` and PR templates under `.github/`.
- Choose a license (MIT recommended for portfolios). I can add `LICENSE` for you.

Credits
-------

Implemented and documented by Hamza Hilal (Kaandizz).

Contact & next steps
--------------------

- If you'd like, I can:
	- Add an MIT license and `CONTRIBUTING.md`
	- Create `.env.example` files in each project
	- Add a GitHub Actions workflow to run lint/build on PRs
	- Add a `screenshots/` folder and update the README with embedded images

Reach out with which of these you'd like next and I'll implement it.

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
