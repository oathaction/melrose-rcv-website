# Best-In-Class Civic UX Patterns

Date accessed: 2026-06-02

Purpose: document civic UX patterns for a future Melrose RCV website. This is research and planning material only, not final website copy or polished UI direction.

## Design Principles

### Start With Local Scope

Best-in-class RCV sites quickly answer:

- Which elections use or would use RCV?
- Which elections do not use RCV?
- Is this current law, a proposal, or an advocacy campaign?
- What decisions still need to happen?

Model sources: NYC Votes, NYC Board of Elections, Minneapolis Elections, Alameda County, Multnomah County.

Melrose adaptation:

- First-screen language should clearly state that Melrose has not adopted RCV unless verified in the future.
- Use "for Melrose municipal elections" only if the proposed scope is legally reviewed.
- Include a "would not affect" list for state, federal, ballot-question, and other elections once confirmed.

### Separate "How To Mark" From "How Counting Works"

Residents need two different explanations:

- Ballot marking: how to rank candidates correctly.
- Tabulation: how votes transfer through rounds.

Model sources: Boulder County, NYC Votes, Minneapolis, Alameda County.

Melrose adaptation:

- Future diagrams should first show a ballot grid with one candidate per rank.
- Counting diagrams should be a second step, not the first explanation.
- Include "ranking another candidate does not hurt your first choice" only with precise instant-runoff context.

### Use Practice Before Theory

NYC Votes, Boulder, Cambridge, Alameda County, and Minneapolis all use practice ballots or practice-oriented material. Practice lowers anxiety and helps residents learn by doing.

Melrose adaptation:

- Future interactive practice ballot should use fictional neutral examples.
- Do not use real Melrose candidates, parties, offices, or issue groups in mock ballots.
- Test the practice ballot for keyboard use, screen readers, and mobile layouts.

### Make Errors Visible And Non-Shaming

Good voter education names common mistakes plainly:

- Ranking the same candidate more than once.
- Giving the same rank to multiple candidates.
- Skipping rankings, where relevant.
- Ranking fewer candidates than allowed.

Model sources: Boulder County, Alameda County, NYC Votes.

Melrose adaptation:

- Error treatment must be reviewed under applicable Massachusetts law, local ballot rules, and voting-system behavior.
- Future copy should say "This needs election-administration review" until verified.
- Use neutral language: "This may affect how your ballot is counted" rather than blame-oriented language.

### Build Trust Through Process Transparency

Best pages explain not only what RCV is, but how elections would be run:

- Who administers elections.
- How ballots are designed.
- How votes are tabulated.
- How preliminary and final results are reported.
- How audits, recounts, and public verification work.
- What voter education happens before first use.

Model sources: Maine Secretary of State, RCV Resource Center, FairVote implementation resources, NCSL implementation report, Multnomah County implementation report.

Melrose adaptation:

- Create a future "Implementation Questions" page rather than burying these issues in FAQs.
- Identify the Melrose Elections Office and City Clerk responsibilities only from official sources.
- Treat equipment, tabulation software, recounts, audits, costs, and timeline as open questions until reviewed.

### Respect Skepticism

Good civic UX does not treat questions as bad faith. The future site should help residents ask better questions.

Recommended sections:

- "What supporters hope RCV would improve."
- "What concerns deserve review."
- "What would need to be decided before implementation."
- "What this proposal would not change."
- "Claims we are not making."

Balanced sources: NCSL, MIT Election Lab, ballot-error research, local implementation reports, official election pages.

Melrose adaptation:

- Keep advocacy calls to action separate from factual explainer pages.
- Include critical terms such as exhausted ballot, ballot marking errors, tabulation timing, voter education costs, and trust in results.
- Avoid dismissive labels such as "myth" for concerns that are partly valid or implementation-dependent.

## Recommended Future Site Information Architecture

This is a research recommendation, not an implementation task.

### Home

Role:

- Identify the campaign goal.
- State current status.
- Invite residents into learning.

Must include:

- Visible disclaimer: Melrose has not adopted RCV unless later verified.
- A local pathway summary.
- Links to "Learn," "Home rule path," "Questions," and "Get involved."

Avoid:

- Making adoption sound inevitable.
- Leading with national partisan claims.
- Using uncited benefits as hero copy.

### What Is RCV?

Role:

- Explain ranked ballots and instant-runoff counting.

Must include:

- Single-winner vs multi-winner distinction.
- "RCV" as umbrella terminology.
- Short glossary.

Avoid:

- Using Cambridge as if it is the same system as a proposed Melrose mayoral or ward-council election.

### How Would It Work In Melrose?

Role:

- Explain the proposed local election scope once legally reviewed.

Must include:

- A verified list of Melrose offices.
- "Would affect / would not affect."
- Legal-review placeholders for multi-winner offices such as at-large City Council and School Committee.

Avoid:

- Claiming automatic implementation.

### Home Rule Petition Path

Role:

- Explain the Massachusetts civic/legal process.

Must include:

- Local approval step.
- Filing with the Massachusetts Legislature.
- Committee/hearing process.
- Possible state approval.
- Possible local acceptance/referendum if included or required.

Avoid:

- Treating state passage as guaranteed.
- Giving timelines without current legal review.

### Questions And Concerns

Role:

- Respect undecided or skeptical residents.

Must include:

- Complexity and voter education.
- Costs and equipment.
- Ballot exhaustion.
- Results timing.
- Audits/recounts.
- Accessibility.
- Candidate strategy and public trust.

Avoid:

- Framing every concern as misinformation.

### Sources

Role:

- Let residents audit claims.

Must include:

- Official Melrose and Massachusetts sources.
- Election administration sources.
- Civic-design sources.
- Advocacy sources clearly labeled as advocacy.
- Research and criticism sources.

Avoid:

- Citation dumping without saying what each source supports.

## Visual Patterns To Adapt

### Ranked Ballot Diagram

Use:

- Candidate rows and rank columns.
- One filled oval per column.
- Clear "1st choice, 2nd choice, 3rd choice" labels.

Accessibility:

- Diagram must have equivalent text.
- Do not rely on color alone.
- Ensure the grid works on mobile without tiny text.

Legal-review note:

- Final ballot examples must be reviewed by someone familiar with Massachusetts ballot rules and Melrose's voting system.

### Counting Rounds Diagram

Use:

- Round 1: count first choices.
- If no one reaches the required threshold, eliminate the lowest candidate.
- Transfer ballots to next continuing ranked choice.
- Repeat until the winning condition is met.

Avoid:

- Saying "your vote is counted multiple times." Better framing: each ballot counts for one continuing candidate at a time.
- Saying "majority winner" without specifying majority of continuing ballots or the legally defined threshold.

### Scope Box

Use:

- "Current status."
- "Proposed local offices."
- "Not included unless changed by law."
- "Still needs review."

This is the most important trust-building pattern for Melrose.

### Process Timeline

Use:

- Draft local petition.
- Local legal review.
- City Council consideration.
- State legislative filing.
- Committee review/hearing.
- Legislature and Governor action.
- Local acceptance or implementation steps, if required.

Label all timing as "example pathway" or "subject to legal and legislative review."

## CTA Patterns

### Good CTAs For Research-Grounded Civic Site

- Learn how RCV works.
- Read the home rule path.
- See questions we still need answered.
- Join updates.
- Volunteer for voter education.
- Share a question.
- Attend a public meeting.

### CTA Risks

- "Bring RCV to Melrose now" can be acceptable as campaign language only if separated from factual education.
- "Make every vote count" is common advocacy language but can overstate the mechanics of exhausted ballots.
- "Guarantee majority winners" is risky and should be avoided.

## Plain-Language Glossary Candidates

- Ranked-choice voting: a way to let voters rank candidates in order of preference.
- Instant-runoff voting: a single-winner RCV counting method that simulates runoff rounds using ranked ballots.
- Proportional representation: a multi-winner ranked-ballot method designed to elect a group in proportion to voter support.
- Continuing candidate: a candidate still eligible in the current counting round.
- Eliminated candidate: a candidate removed from later rounds under the counting rules.
- Exhausted ballot: a ballot that has no remaining ranked continuing candidate.
- Overvote: marking more than one candidate for the same rank; final definition needs local review.
- Skip: leaving a rank blank before later ranks; final effect needs local review.

## Content Tone Patterns

Use:

- "Here is what is verified."
- "Here is what supporters argue."
- "Here is what election officials would need to review."
- "Here is what we do not know yet."
- "Here is how to ask a good question."

Avoid:

- "RCV fixes democracy."
- "RCV is simple" as a standalone claim.
- "Opponents are confused."
- "Melrose will use RCV."
- "The Legislature only needs to approve it."

## Future Accessibility Checklist

- Keyboard-accessible practice ballot.
- Screen-reader text for ballot diagrams.
- High contrast.
- No color-only meaning.
- Clear focus states.
- Short paragraphs.
- Resident-facing glossary.
- Multilingual plan if campaign capacity allows.
- Print-friendly one-pagers.
- Mobile-first ballot education.
- Tested with residents unfamiliar with RCV.

## Key UX Takeaway

The future Melrose site should feel calm, local, transparent, and practical. The best civic UX pattern is not persuasion by polish; it is trust through clarity.
