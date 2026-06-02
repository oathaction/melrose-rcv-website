# Design System

Date: 2026-06-02

Purpose: define the visual design system, tokens, layout rules, and interaction patterns for the Melrose RCV website.

This document is implementation guidance for future page-building work.

## System Principles

- Clarity over decoration.
- Source-grounded civic trust over campaign spectacle.
- Warm local character without official-government impersonation.
- Accessible contrast and visible focus states.
- Reusable components over one-off page styling.
- Calm, purposeful interactions.

## Color System

Core tokens live in `src/styles/tokens.css`.

### Primary Colors

- `--color-blue-700`: primary civic blue for main CTAs, header mark, and trusted action.
- `--color-green-700`: community/volunteer support color.
- `--color-gold-500`: attention, process, source review, and support/donation accents.

### Supporting Colors

- `--color-rust-600`: caution, risk, myth/fact contrast.
- `--color-lilac-600`: legal/process complexity and review placeholders.
- `--color-paper`: warm page background.
- `--color-surface`: cards and elevated content.
- `--color-ink`: primary text.
- `--color-ink-soft`: secondary text.
- `--color-line`: borders and dividers.

### Contrast Guidance

Use dark text on light color washes:

- Blue wash with blue-900 text.
- Green wash with green-900 text.
- Gold wash with gold-900 text.
- Rust wash with rust-800 text.
- Lilac wash with lilac-800 text.

Use white text only on darker fills:

- Blue-700 or blue-900.
- Green-700 or green-900.
- Ink.

Do not place soft gray text on color washes without testing contrast.

## Typography

Tokens:

- Sans: Atkinson Hyperlegible, Inter, system UI.
- Serif: Source Serif 4, Georgia, serif.
- Mono: IBM Plex Mono, system mono.

Usage:

- Sans for all primary UI and body copy.
- Serif only for optional editorial quotes or callouts.
- Mono only for code-like config names or URLs.

Type scale:

- `--text-xs`: labels.
- `--text-sm`: metadata, source notes.
- `--text-base`: body.
- `--text-lg`: summaries.
- `--text-xl` through `--text-5xl`: headings.

Rules:

- No negative letter spacing.
- Do not scale font size with viewport width except controlled `clamp()` headings.
- Keep compact panel headings smaller than hero headings.
- Use uppercase only for short labels.

## Spacing

Spacing tokens:

- `--space-1` through `--space-24`.

Page sections:

- Use `.section-band` for major vertical rhythm.
- Use `.section-shell` for standard content width.
- Use `.section-shell-wide` for previews and diagrams.
- Use `.prose-shell` for long reading content.

Rules:

- Avoid nested cards.
- Use full-width bands or plain constrained layouts for page sections.
- Use cards for repeated items, callouts, diagrams, and individual content modules.

## Border Radius

Tokens:

- `--radius-1`: tiny controls.
- `--radius-2`: buttons and compact controls.
- `--radius-3`: cards and alerts.
- `--radius-4`: diagram panels.
- `--radius-pill`: badges and status dots.

Guidance:

- Keep cards at 8px or less unless a diagram panel needs a slightly softer container.
- Avoid bubbly rounded UI.

## Shadows

Tokens:

- `--shadow-xs`: subtle card/button separation.
- `--shadow-sm`: raised skip links or modest panels.
- `--shadow-md`: rare large emphasis.

Guidance:

- Shadows should be quiet.
- Prefer borders and spacing over heavy elevation.

## Containers And Breakpoints

Tokens:

- `--container-sm`: prose.
- `--container-md`: focused content.
- `--container-lg`: standard page shell.
- `--container-xl`: wide diagrams/previews.
- `--breakpoint-sm`, `--breakpoint-md`, `--breakpoint-lg`, `--breakpoint-xl`.

Rules:

- Diagrams must have stable dimensions and responsive overflow.
- Text must not overflow buttons or cards.
- Mobile should keep diagrams legible, often with horizontal scroll for table-like ballot examples.

## Motion

Tokens:

- `--motion-fast`.
- `--motion-base`.
- `--motion-slow`.
- `--ease-standard`.

Rules:

- Use subtle hover/focus transitions only.
- Respect `prefers-reduced-motion`.
- Do not animate counting diagrams unless future testing confirms it improves comprehension.

## Z-Index

Tokens:

- `--z-base`.
- `--z-raised`.
- `--z-header`.
- `--z-overlay`.
- `--z-modal`.
- `--z-toast`.

Guidance:

- Header uses `--z-header`.
- Skip link uses `--z-toast`.
- Avoid ad hoc z-index numbers.

## CTA Hierarchy

Primary:

- Filled civic blue.

Secondary:

- White surface with civic blue text/border.

Ghost:

- Transparent, used for low-emphasis navigation actions.

Support/donation:

- Green or gold variants depending on context.
- Use only after compliance placeholders are resolved.

## Diagram Style

### Ranked Ballots

- Use a table for semantics.
- Use selected dots/marks that do not rely on color alone.
- Include screen-reader labels.
- Include explicit "fictional/not official" notes.

### Counting Rounds

- Use step cards.
- Use labels like "Round 1" instead of abstract icons.
- Include summaries below headings.

### Transfer Flow

- Use three-step flow cards.
- Explain the concept without final legal/admin rules.

### Home Rule Pathway

- Use timeline/step card variant.
- Distinguish local review, local approval, state filing, committee review, legislative action, and implementation review.
- Avoid dates until verified.

## Internal Preview

`src/pages/design-system.astro` is an internal/dev preview page.

Rules:

- Mark it clearly as internal.
- Do not link it in public navigation.
- Remove or hide before launch.

## Common Design Mistakes To Avoid

- Partisan red/blue palettes.
- Heavy campaign graphics.
- Clip art.
- Generic SaaS cards everywhere.
- Academic/legal document austerity.
- Decorative animations.
- Color-only meaning.
- Overcrowded election imagery.
- Official City of Melrose visual impersonation.
