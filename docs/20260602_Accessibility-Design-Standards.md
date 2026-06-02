# Accessibility Design Standards

Date: 2026-06-02

Purpose: define accessibility standards for future Melrose RCV design and implementation work.

## Accessibility Principles

- Design for residents who are unfamiliar with RCV.
- Use plain language before technical vocabulary.
- Do not rely on color alone.
- Preserve keyboard access.
- Keep source and legal caveats readable.
- Make diagrams understandable with text alternatives.

## Contrast

Minimum:

- Body text should meet WCAG AA contrast.
- Interactive controls should meet WCAG AA contrast.
- Focus indicators must be visible against both light and dark backgrounds.

Preferred:

- Use dark ink on light surfaces for long-form reading.
- Use white text only on dark blue, dark green, or ink backgrounds.
- Avoid soft gray on gold, green, blue, or lilac washes unless tested.

## Focus And Keyboard Navigation

Requirements:

- Every interactive element must be reachable by keyboard.
- Focus state must be visible.
- Skip link must remain available.
- Do not remove outlines.
- Buttons and links must have distinguishable semantics.

Current pattern:

- `.focus-ring` and global `:focus-visible` use gold focus outline.

## Motion

Requirements:

- Respect `prefers-reduced-motion`.
- Avoid heavy animation.
- Do not animate ballot/counting explanations unless it improves comprehension and can be paused or reduced.

## Typography And Readability

Requirements:

- Use readable sans-serif typography.
- Keep line length comfortable.
- Avoid all-caps paragraphs.
- Use uppercase only for short labels.
- Avoid negative letter spacing.
- Do not make body text smaller than 16px.

## Diagram Accessibility

Ranked ballot diagrams:

- Use semantic table structure when showing a ballot grid.
- Include row and column labels.
- Provide text explaining selected ranks.
- Do not rely on fill color alone.
- Use fictional candidates.
- Include review disclaimers.

Counting diagrams:

- Use ordered steps.
- Keep connector arrows decorative with `aria-hidden`.
- Provide text summaries.

Timeline/pathway diagrams:

- Use ordered lists where possible.
- Mark legal-review placeholders clearly.
- Avoid date promises.

## Forms

Requirements:

- Every input needs a visible label.
- Required fields must be clear.
- Error messages must be text, not color only.
- Form purpose must be clear.
- Privacy and data use placeholders must be resolved before launch.

Recommended:

- Keep signup fields minimal.
- Let residents ask questions without declaring support.
- Distinguish campaign contact from official election help.

## Link And Button Labels

Use:

- "Learn how RCV works."
- "Read common questions."
- "Check the sources."
- "Ask a question."
- "Join updates."

Avoid:

- "Click here."
- Ambiguous icon-only controls.
- Pressure-driven labels.

## Content Accessibility

Requirements:

- Explain terms before relying on them.
- Define RCV, instant-runoff voting, exhausted ballot, and home rule petition.
- Distinguish verified facts, campaign interpretation, open questions, legal-review placeholders, and election-administration placeholders.
- Treat skepticism respectfully.

## Mobile Standards

Requirements:

- No horizontal page overflow except intentional diagram/table scroll containers.
- Text must fit inside buttons and cards.
- Touch targets should be at least 44px high.
- Header navigation must wrap cleanly.
- Diagrams must remain legible on small screens.

## Internal Review Checklist

Before launch or major page updates:

- Keyboard-test all navigation and forms.
- Check focus visibility.
- Check contrast on all color combinations.
- Test diagrams without color.
- Confirm text alternatives.
- Confirm source notes and disclaimers are readable.
- Check mobile layout at narrow widths.
- Confirm no claim implies Melrose has adopted RCV.
- Confirm no official City of Melrose endorsement is implied.

## Known Future Needs

- Screen-reader QA of interactive ballot examples.
- Plain-language resident testing.
- Legal review of any ballot instruction.
- Election-administration review of diagrams.
- Privacy review of forms and analytics.
