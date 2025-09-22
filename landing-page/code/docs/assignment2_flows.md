# Assignment 2 — Chatbot Interaction Flows

This file documents primary conversational flows and edge handling strategies.

## Primary flow (happy path)

Greeting → Present options (Intent selection: Troubleshooting, FAQ, Book Demo, Other) → User selects intent → Chatbot asks 1–2 clarifying questions → Provide response (answer/snippet/next steps) → Offer CTA (Open docs / Book demo / Escalate) → End or Handoff to human

Flow diagram (markdown):

- Greeting
  - → Show intents: [Troubleshoot] [FAQ] [Book Demo] [Talk to human]
  - → User taps [Troubleshoot]
    - → Bot: "Which SDK or endpoint are you using?"
    - → User: selects SDK
    - → Bot: provides snippet or diagnostic steps
    - → Bot: "Did that solve your issue?" → [Yes] → End, [No] → Offer escalation

## Edge cases
- Unknown intent: Bot asks clarifying question or suggests human handoff
- Repeated failures: offer contact with support + ticket creation
- Sensitive data: bot warns and provides secure link for logs upload
