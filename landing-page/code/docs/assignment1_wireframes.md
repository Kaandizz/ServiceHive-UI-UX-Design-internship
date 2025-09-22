# Assignment 1 — Wireframes (Low-fidelity + Handoff Notes)

This file describes low-fidelity wireframes for the AI Service Landing Page and guidance for high-fidelity mockups.

## Page scaffold (global)
- Header: logo, product name, nav (Features, Pricing, Use Cases, Docs), primary CTA (Book a demo)
- Main content: stacked sections (Hero → Features → Use cases → Testimonials → Pricing → Footer)

## Hero (low-fi)
- Elements: headline, 1–2 line subheading, primary CTA, secondary CTA (Watch demo / Learn more), hero illustration placeholder
- Layout: two-column on desktop (text left, visual right), stacked on mobile
- [TODO: Insert Screenshot]

## Features grid
- Elements: 3–4 feature cards per row (desktop), each card: icon placeholder, title, 1–2 line summary, link to detail
- Interaction: hover for quick preview, click to open modal

## Use-case carousel
- Elements: horizontally scrollable cards with industry label, customer outcome, and CTA to read case study
- Mobile: swipe support and pagination indicators

## Testimonials
- Elements: quote, customer name, role, company logo, measurable KPI (e.g., "+32% conversion")
- Layout: grid or carousel depending on content density

## Pricing
- Elements: tiered pricing cards, feature comparison table, CTA per tier, link to billing FAQ
- Interaction: toggle between monthly/annual pricing

## Footer
- Elements: sitemap, legal links, social, newsletter signup, contact

---

## High-fidelity improvements
- Color: apply brand palette to the hero and CTAs for hierarchy; use neutral backgrounds for content rhythm
- Typography: introduce 2–3 type scales (H1, H2/H3, body) with adequate line-height for accessibility
- Icons & imagery: replace placeholders with concise icons and an illustrative hero image to communicate the product domain
- Responsiveness: stack sections vertically on small screens, use collapsible accordions for long content
- Micro-interactions: subtle hover and focus states for buttons, accessible animations for carousel and modal

Accessibility notes:
- Ensure 4.5:1 contrast on primary CTAs and 3:1 for UI components where appropriate
- Keyboard focus order: header CTAs → hero → features → footer
- ARIA labels for modals, carousel controls, and form fields
