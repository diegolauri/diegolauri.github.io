# Analytics Setup Guidance

This repository does not include any analytics or tracking code. A future approved analytics setup should be implemented privately, with minimal data collection and strong respect for visitor privacy.

## Recommended options

Preferred provider:
- Cloudflare Web Analytics

Alternative provider:
- Umami

## Where to add analytics

Add the approved analytics snippet only after the site content, immediately before the closing `</body>` tag in `index.html` and any additional HTML files that require tracking.

For a shared static site, the script can also be loaded via `assets/js/site.js` only after the site has rendered.

## What not to commit

Do not commit any analytics account identifiers, site IDs, secret tokens, API keys, or config values. Keep all credentials out of the repository.

## Metrics to review privately

Track only aggregated, non-identifying information such as:
- Total visits
- Top pages
- Most visited portfolio areas
- Referral sources
- Broad location only if aggregate and non-specific
- Device category
- Language selection only if possible without profiling
- Future approved outbound platform-click events

## Monthly decision questions

- Which portfolio areas are visited most?
- Which pages need stronger evidence?
- Which external platform receives the most interest?
- Which language version is used more?
- Which referral sources bring relevant visitors?

## Privacy rules

- No visible visitor counter
- No personal profiling or user-level tracking
- No public dashboard
- No unnecessary cookies
- No invasive tracking
- No analytics snippet should load before the page content or interfere with accessibility
