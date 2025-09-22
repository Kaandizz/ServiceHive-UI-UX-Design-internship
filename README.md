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
