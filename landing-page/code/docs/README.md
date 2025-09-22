# Docs — AI Service Landing Page & AI Chatbot

This `code/docs/` folder contains UX deliverables and presentation material for both assignments.

Location

- Assignment 1 code: `code/assignment1_landing_page/` (your development files)
- Assignment 2 code: `code/assignment2_chatbot/` (your development files)
- This documentation: `code/docs/`

Included files

- `assignment1_personas.md`
- `assignment1_flows.md`
- `assignment1_wireframes.md`
- `assignment1_concept_note.md`
- `assignment2_personas.md`
- `assignment2_flows.md`
- `assignment2_wireframes.md`
- `assignment2_concept_note.md`
- `final_presentation.md`

How to use

1. Review personas, flows, and wireframes to ensure they match your implementation and copy.
2. Replace `[TODO: Insert Screenshot]` with screenshots of running apps (use high-resolution images).
3. Build slides using `final_presentation.md` as the script. Paste screenshots in slide placeholders.

Exporting docs to PDF

Option A — Manual slides (recommended):
- Copy slide content into Google Slides / PowerPoint, paste screenshots, Export → PDF.

Option B — Pandoc (Markdown → PDF):
- Install Pandoc and wkhtmltopdf or LaTeX distribution.

Example (PowerShell):

```powershell
pandoc .\final_presentation.md -o final_presentation.pdf --pdf-engine=wkhtmltopdf
```

Notes
- Keep screenshots in `assets/` or a `docs/screenshots/` folder and reference them when building slides.
- For recruiter submissions, prepare a 1–2 page highlights PDF with 2–3 annotated screenshots and short bullets.

Contact

If you want, I can also assemble the slides into a PDF for you — paste the screenshots here or point me to the running site.
