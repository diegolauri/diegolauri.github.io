# Contact Form Setup

This repository currently includes a static contact form UI only.
The form is intentionally configured with `data-form-provider="pending-approval"` and does not submit data to any external endpoint.

## Option A — Recommended: Formspree

- Use Formspree to receive form submission notifications in Diego’s Gmail account.
- Formspree can also send an automatic confirmation response to the visitor.
- Requires Diego to create and approve a Formspree account and endpoint.
- The form must include an `email` field named exactly `email`.
- The endpoint must be approved before the form is activated.
- Do not add the Formspree endpoint or any service URL until Diego explicitly approves and provides the endpoint.

## Option B — Google Apps Script

- A Google Apps Script web app can receive form data and send email through an authorized Google account.
- This option requires careful server-side validation, rate limiting, and secure configuration.
- No Gmail credentials, OAuth secrets, or other private data may be stored in this GitHub repository.
- The Apps Script deployment must be explicitly approved by Diego before use.
- Do not activate or publish any Apps Script endpoint unless Diego explicitly approves the deployment and provides the public endpoint.

## Important Notes

- GitHub Pages is a static hosting environment.
- Do not attempt to send Gmail directly from frontend JavaScript.
- Do not expose Gmail credentials, API keys, passwords, tokens, OAuth secrets, or Apps Script secrets in the repository.
- Do not add an active external form endpoint until the setup is approved.
- This file is documentation only; the contact form remains a disabled UI until a provider is chosen.
