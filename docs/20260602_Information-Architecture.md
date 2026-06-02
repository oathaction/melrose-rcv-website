# Information Architecture

Date: 2026-06-02

Purpose: define the planned site structure, navigation model, page relationships, and content hierarchy for the Melrose RCV website.

This document is planning only. It does not require production page changes.

## IA Goals

- Help residents learn in a natural sequence: what RCV is, how it works, why Melrose might consider it, and what process would be required.
- Keep trust and source review visible.
- Give skeptical residents direct routes to concerns, FAQs, and sources.
- Give supporters clear routes to join, volunteer, donate, ask questions, and share.
- Keep legal and implementation uncertainty visible.

## Recommended Sitemap

- `/`
- `/what-is-rcv/`
- `/how-it-works/`
- `/why-melrose/`
- `/home-rule-petition/`
- `/melrose-elections/`
- `/myths-and-facts/`
- `/faq/`
- `/sources/`
- `/about/`
- `/contact/`
- `/donate/`

## Navigation Strategy

### Primary Header Navigation

Recommended primary nav:

- Home
- What Is RCV?
- How It Works
- Why Melrose?
- Home Rule Petition
- Melrose Elections
- FAQ
- Contact
- Donate

Rationale:

- This matches the current lightweight scaffold nav.
- It keeps the header focused on the main learning and action path.
- It avoids overloading first-time visitors.

### Secondary Or Footer Navigation

Recommended secondary/footer links:

- Myths And Facts
- Sources
- About
- Contact
- Donate
- FAQ

Rationale:

- Skeptical and source-checking users need these pages, but not every page needs all of them in the top nav.
- Footer can carry trust and transparency links without crowding the header.

### Contextual Links

Every educational page should include contextual links to:

- The next learning step.
- FAQ.
- Sources.
- Contact or ask-a-question path.

Example:

- `/what-is-rcv/` should link to `/how-it-works/`, `/faq/`, and `/sources/`.
- `/home-rule-petition/` should link to `/melrose-elections/`, `/sources/`, and `/contact/`.
- `/myths-and-facts/` should link to `/faq/` and `/sources/`.

## Content Hierarchy

### Level 1: Orientation

Pages:

- `/`
- `/what-is-rcv/`
- `/how-it-works/`

User question:

"What is this, and can I understand it quickly?"

Content priorities:

- Plain-language definition.
- Simple counting steps.
- Clear disclaimer.
- Visual examples planned for later design.

### Level 2: Local Relevance

Pages:

- `/why-melrose/`
- `/melrose-elections/`

User question:

"Why would Melrose consider this, and which local elections are relevant?"

Content priorities:

- Verified Melrose municipal structure.
- Local questions and context.
- Avoid invented examples or unsupported claims.
- Clearly distinguish verified facts from campaign interpretation.

### Level 3: Process And Legitimacy

Pages:

- `/home-rule-petition/`
- `/sources/`
- `/about/`

User question:

"Is this a real, lawful, serious civic process?"

Content priorities:

- Home rule petition explanation.
- Legal-review placeholders.
- Source log.
- Campaign identity and nonpartisan posture.

### Level 4: Concerns And Trust

Pages:

- `/myths-and-facts/`
- `/faq/`

User question:

"What are the tradeoffs, risks, and common misunderstandings?"

Content priorities:

- Respect skepticism.
- Separate false claims from valid concerns.
- Link to implementation questions.
- Avoid overpromising benefits.

### Level 5: Action

Pages:

- `/contact/`
- `/donate/`

User question:

"What can I do next?"

Content priorities:

- Email signup.
- Volunteer interest.
- Ask a question.
- Donate/support once compliance language is verified.
- Share with neighbors.

## Recommended Page Relationships

Primary learning path:

`/` -> `/what-is-rcv/` -> `/how-it-works/` -> `/why-melrose/` -> `/home-rule-petition/` -> `/faq/` -> `/contact/`

Skeptic path:

`/` -> `/myths-and-facts/` -> `/faq/` -> `/sources/` -> `/home-rule-petition/` -> `/contact/`

Municipal stakeholder path:

`/` -> `/home-rule-petition/` -> `/melrose-elections/` -> `/sources/` -> `/about/` -> `/contact/`

Supporter path:

`/` -> `/why-melrose/` -> `/home-rule-petition/` -> `/contact/` or `/donate/`

Source-checking path:

Any page -> `/sources/` -> source-linked claim -> `/contact/` for corrections/questions.

## Homepage IA

Recommended order:

1. Hero.
2. Trust bar.
3. What is RCV?
4. How RCV works.
5. Melrose-themed example.
6. Why RCV for Melrose?
7. Home rule petition pathway.
8. Questions worth asking.
9. Myths and facts preview.
10. Where RCV is used preview.
11. Join the effort.
12. Footer.

Rationale:

- Starts with orientation, not persuasion.
- Introduces process before action.
- Gives skeptical users a visible route to concerns.
- Converts only after trust-building.

## Route-Level Roles

`/`:

- Orientation and conversion hub.

`/what-is-rcv/`:

- Definition and concept page.

`/how-it-works/`:

- Mechanics and examples page.

`/why-melrose/`:

- Case-for-consideration page.

`/home-rule-petition/`:

- Legal/civic pathway page.

`/melrose-elections/`:

- Local election context page.

`/myths-and-facts/`:

- Misconceptions and concerns page.

`/faq/`:

- Practical Q&A page.

`/sources/`:

- Claim-audit and trust page.

`/about/`:

- Campaign identity and governance page.

`/contact/`:

- Ask, volunteer, and email signup page.

`/donate/`:

- Support path with compliance placeholders.

## Information Scent

Link labels should use plain resident language:

- "Learn how RCV works."
- "See the home rule path."
- "Read common questions."
- "Check the sources."
- "Ask a question."
- "Join updates."
- "Volunteer."
- "Support the campaign."

Avoid:

- "Tabulation architecture."
- "Governance conversion."
- "Legislative enablement."
- "Majoritarian reform."

## Search And SEO Structure

Primary keyword themes:

- ranked choice voting Melrose MA
- Melrose ranked choice voting
- what is ranked choice voting
- how ranked choice voting works
- Massachusetts home rule petition
- Melrose elections

SEO pages:

- `/what-is-rcv/` should answer broad RCV searches.
- `/home-rule-petition/` should answer Massachusetts process searches.
- `/melrose-elections/` should answer local Melrose election context searches.
- `/faq/` should answer practical questions.

## Governance Notes

- The IA assumes source pages and FAQ pages remain easy to reach.
- Any future top-nav expansion should be tested against header clutter.
- If `/sources/` and `/about/` are not in the top nav, they must be prominent in footer and contextual trust sections.
- The site must always include a visible disclaimer or status note somewhere near the beginning of the homepage and relevant process pages.

## Current Navigation Assessment

The existing scaffold navigation already includes the core learning and action pages:

- Home.
- What Is RCV?
- How It Works.
- Why Melrose?
- Home Rule Petition.
- Melrose Elections.
- FAQ.
- Contact.
- Donate.

No navigation data update is required for this strategy phase. Future design work may add a secondary/footer navigation treatment for Myths and Facts, Sources, and About.
