# Melrose RCV Website

Melrose RCV is a nonpartisan civic education and community organizing website about bringing ranked-choice voting to Melrose municipal elections through a Massachusetts home rule petition.

This first phase is intentionally a scaffold. It creates the project structure, starter routes, placeholder components, documentation, and contribution guidance needed before research, legal review, visual design, and production content are added.

## Project Purpose

- Explain ranked-choice voting in plain language for Melrose residents.
- Describe the home rule petition pathway without implying adoption is automatic.
- Support respectful civic organizing across political viewpoints.
- Keep verified facts separate from assumptions, open questions, and legal-review placeholders.

The site must never claim that Melrose has already adopted RCV unless that becomes a verified fact in the future.

## Setup

```bash
npm install
npm run dev
```

The local Astro dev server will usually run at `http://localhost:4321`.

## Commands

- `npm run dev` starts the local development server.
- `npm run build` builds the static site and checks for build errors.
- `npm run preview` previews the most recent production build.
- `npm run astro` runs Astro CLI commands.

## Folder Structure

- `.codex/` contains project instructions and context for Codex.
- `.agents/skills/` contains repo-scoped agent guidance.
- `docs/` contains dated planning, research, launch, and roadmap notes.
- `public/` contains static assets served as-is.
- `src/components/` contains reusable layout, section, UI, and diagram components.
- `src/content/pages/` contains page-level content placeholders.
- `src/content/data/` contains starter structured content and citation placeholders.
- `src/pages/` contains Astro routes.
- `src/styles/` contains global CSS, design tokens, and utility helpers.
- `src/lib/` contains shared constants, SEO, form, and citation helpers.
- `tests/` contains manual accessibility, content review, and launch QA checklists.

## Content Standards

- Use plain, respectful, local language.
- Avoid partisan framing.
- Distinguish facts from assumptions and open questions.
- Do not overstate the home rule petition process.
- Do not imply implementation is automatic after any single local vote or petition step.
- Treat skeptical questions as legitimate civic concerns.

## Citation Standards

- Do not invent citations, statistics, quotes, timelines, or legal claims.
- Add source entries only after a source has been reviewed.
- Prefer primary sources for legal, municipal, and election-administration claims.
- Label unresolved items as assumptions, open questions, or legal-review placeholders.
- Keep `docs/20260602_Source-Log.md` and `src/content/data/sources.ts` aligned.

## Accessibility Standards

- Use semantic HTML landmarks and headings.
- Maintain visible focus states.
- Use descriptive link text.
- Keep color contrast accessible.
- Avoid relying on color alone to communicate meaning.
- Test keyboard navigation before launch.

## Phased Workflow

1. Scaffold the site and documentation.
2. Research Massachusetts and Melrose source material.
3. Draft source-grounded content.
4. Review legal and election-administration claims.
5. Add polished visual design and diagrams.
6. Run accessibility, content, and launch QA.
7. Publish only after placeholders are resolved or clearly labeled.

## Current Status

This repository is in scaffold phase. Most content is placeholder material and should not be treated as final public guidance.
