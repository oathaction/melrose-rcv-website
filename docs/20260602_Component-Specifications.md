# Component Specifications

Date: 2026-06-02

Purpose: specify reusable UI and layout component behavior for the Melrose RCV design system.

## Button

File: `src/components/ui/Button.astro`

Props:

- `href?: string`
- `variant?: "primary" | "secondary" | "ghost" | "support" | "donation"`
- `size?: "sm" | "md" | "lg"`
- `type?: "button" | "submit" | "reset"`
- `class?: string`
- `ariaLabel?: string`

Usage:

- Use `primary` for main education CTAs.
- Use `secondary` for paired CTAs.
- Use `ghost` for low-emphasis actions.
- Use `support` for volunteer/community actions.
- Use `donation` only when donation compliance language is verified.

Accessibility:

- Buttons have visible focus styles through `.focus-ring`.
- Text should remain short enough to fit on mobile.
- Native `type` is supported for forms.

## Card

File: `src/components/ui/Card.astro`

Props:

- `tone?: "plain" | "blue" | "green" | "gold" | "rust" | "lilac"`
- `variant?: "standard" | "source" | "myth-fact" | "benefit" | "step" | "timeline"`
- `class?: string`

Usage:

- `standard`: default content module.
- `source`: source/citation card.
- `myth-fact`: misconception or concern card.
- `benefit`: campaign benefit/argument card with caveats.
- `step`: home rule or counting step.
- `timeline`: pathway/timeline entry.

Rules:

- Do not nest cards inside cards.
- Use cards for repeated items and framed tools, not every section.
- Keep factual claims sourced in card content.

## Badge

File: `src/components/ui/Badge.astro`

Props:

- `label: string`
- `tone?: "blue" | "green" | "gold" | "rust" | "lilac" | "neutral"`

Usage:

- Use badges for status, nonpartisan posture, source status, or review state.
- Keep labels short.

Accessibility:

- Badge meaning should be repeated in adjacent text if important.
- Do not rely on badge color alone.

## SectionHeading

File: `src/components/ui/SectionHeading.astro`

Props:

- `eyebrow?: string`
- `title: string`
- `summary?: string`
- `align?: "left" | "center"`
- `level?: 1 | 2 | 3`

Usage:

- Use one section heading at the start of major sections.
- Keep summaries short and plain-language.
- Use `level={1}` only for page-level preview/demo contexts if appropriate.

## SourceNote

File: `src/components/ui/SourceNote.astro`

Props:

- `status?: string`
- `tone?: "pending" | "verified" | "legal" | "caution"`

Usage:

- Use near claims that need review or source context.
- Use `legal` for legal-review placeholders.
- Use `verified` only when source review is complete.

## Disclaimer

File: `src/components/ui/Disclaimer.astro`

Usage:

- Global civic/legal disclaimer.
- Must remain visible before public launch unless replaced by an equivalent reviewed notice.

## Alert

File: `src/components/ui/Alert.astro`

Props:

- `title?: string`
- `tone?: "note" | "caution" | "legal" | "success"`

Usage:

- Use for placeholders, legal review notes, and implementation cautions.
- Do not use alerts for decorative emphasis.

## Header

File: `src/components/layout/Header.astro`

Purpose:

- Primary navigation and lightweight wordmark.

Rules:

- Do not imply official City of Melrose status.
- Keep nav labels resident-friendly.
- Do not add every secondary page to the header unless usability testing supports it.

## Footer

File: `src/components/layout/Footer.astro`

Purpose:

- Trust and transparency navigation.
- Contact path.
- Campaign-not-official note.

Required:

- Sources link.
- Contact link.
- Clear non-official disclaimer.

## MainLayout

File: `src/components/layout/MainLayout.astro`

Purpose:

- Global HTML shell, skip link, header, main region, disclaimer, footer.

Accessibility:

- Skip link is visible on focus.
- Main content has `id="main-content"`.

## SEO

File: `src/components/layout/SEO.astro`

Purpose:

- Meta title/description/canonical/open graph basics.

Rules:

- SEO copy must not imply adoption or guaranteed implementation.
- Social descriptions must follow the claims policy.

## RankedBallot

File: `src/components/diagrams/RankedBallot.astro`

Purpose:

- Demonstrate visual style for future ballot examples.

Rules:

- Use fictional candidates.
- Mark as not official voter instruction.
- Keep table semantics.
- Do not finalize ballot layout without election-administration review.

## CountingRounds

File: `src/components/diagrams/CountingRounds.astro`

Purpose:

- Demonstrate visual style for counting round explanation.

Rules:

- Use careful wording.
- Avoid "vote counted multiple times."
- Avoid "guaranteed majority winner."

## TransferFlow

File: `src/components/diagrams/TransferFlow.astro`

Purpose:

- Demonstrate how backup rankings can transfer conceptually.

Rules:

- Keep it conceptual until local rules are reviewed.
- Include caution text for public contexts.
