import type { PlaceholderContent } from "../../types/site";

export const faqs: PlaceholderContent[] = [
  {
    title: "What is ranked-choice voting?",
    category: "RCV basics",
    summary:
      "Ranked-choice voting, or RCV, lets voters rank candidates in order of preference instead of choosing only one. The exact counting method depends on the kind of election and the rules that apply.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["ncsl-rcv", "nyc-votes-rcv", "minneapolis-rcv"],
  },
  {
    title: "How does RCV work?",
    category: "RCV basics",
    summary:
      "In a single-winner RCV election, first choices are counted first. If no candidate meets the winning threshold, the candidate with the fewest votes is eliminated, and ballots for that candidate move to the next ranked continuing candidate. Rounds continue until a winner is determined under the rules.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["mit-irv", "ncsl-rcv", "boulder-rcv"],
  },
  {
    title: "Do I have to rank every candidate?",
    category: "Ballot marking",
    summary:
      "In most RCV voter education examples, voters may rank fewer candidates than the ballot allows. The tradeoff is that if every candidate you ranked is eliminated, your ballot may have no remaining continuing candidate in later rounds. Melrose-specific rules would need election-administration review.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["nyc-votes-rcv", "boulder-rcv", "ncsl-implementation"],
  },
  {
    title: "Can I vote for only one candidate?",
    category: "Ballot marking",
    summary:
      "Generally, yes: ranking only one candidate is still a valid way to express your first choice in RCV examples reviewed. If that candidate is eliminated, though, there may be no backup choice to count in later rounds. Melrose ballot rules would need official review before public instructions are final.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["nyc-votes-rcv", "fairvote-rcv", "boulder-rcv"],
  },
  {
    title: "Does ranking a second choice hurt my first choice?",
    category: "Ballot marking",
    summary:
      "No, not while your first-choice candidate remains in the count. In single-winner RCV, a later ranking is a backup choice that can matter if an earlier-ranked candidate is eliminated.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["nyc-votes-rcv", "boulder-rcv", "mit-irv"],
  },
  {
    title: "What happens if my first choice is eliminated?",
    category: "Counting",
    summary:
      "If your first choice is eliminated and your ballot has a valid next-ranked candidate who is still continuing, the ballot transfers to that candidate in the next round. If there is no valid continuing choice left, the ballot may become inactive or exhausted under the rules.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["mit-irv", "ncsl-implementation", "boulder-rcv"],
  },
  {
    title: "What is a home rule petition?",
    category: "Home rule",
    summary:
      "In Massachusetts, a home rule petition is a way for a city or town to ask the Legislature for a special law that applies locally. The exact local approval path depends on state law, the municipal charter, and the petition language.",
    status: "needs-review",
    reviewStatus: "legal-review-placeholder",
    sourceIds: ["ma-constitution", "ma-ch43b"],
  },
  {
    title: "Why does Melrose need a home rule petition for RCV?",
    category: "Home rule",
    summary:
      "The research indicates Melrose likely needs state authorization because the Massachusetts Home Rule Amendment does not give cities and towns broad local power to regulate elections. This must be reviewed by Massachusetts municipal or election counsel before final legal claims are published.",
    status: "needs-review",
    reviewStatus: "legal-review-placeholder",
    sourceIds: ["ma-constitution", "ma-ch43b", "ma-ballot-question"],
  },
  {
    title: "Has Melrose adopted RCV yet?",
    category: "Melrose status",
    summary:
      "No. The current website copy must not claim that Melrose has adopted or is implementing ranked-choice voting. Melrose RCV is a civic education and organizing effort exploring a possible pathway.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["melrose-elections", "melrose-charter", "ma-constitution"],
  },
  {
    title: "Could Melrose use RCV in the next local election?",
    category: "Melrose status",
    summary:
      "No specific timeline should be promised. A Melrose proposal would need legal review, local civic action, state legislative authorization if required, and an election-administration plan before any first use.",
    status: "needs-review",
    reviewStatus: "legal-review-placeholder",
    sourceIds: ["ma-constitution", "ncsl-implementation", "melrose-elections"],
  },
  {
    title: "Who approves a home rule petition?",
    category: "Home rule",
    summary:
      "A home rule petition involves both local and state action. Article LXXXIX describes special laws enacted on locally filed or approved petitions, and the Legislature and Governor are part of the state process. The exact Melrose local approval path needs legal review.",
    status: "needs-review",
    reviewStatus: "legal-review-placeholder",
    sourceIds: ["ma-constitution", "ma-ch43b"],
  },
  {
    title: "What role does the City Council play?",
    category: "Home rule",
    summary:
      "The City Council would likely be central to any local public process, but the exact required vote, mayoral role, petition language, and any voter-approval step need legal review. The campaign should not say Council approval alone would implement RCV.",
    status: "needs-review",
    reviewStatus: "legal-review-placeholder",
    sourceIds: ["melrose-charter-article-2", "ma-constitution"],
  },
  {
    title: "What role do Melrose's state legislators play?",
    category: "Home rule",
    summary:
      "If a local home rule petition is approved for filing, Melrose's state representative or senator could file it as legislation. Boston's RCV petition is an example of a local proposal moving to the Massachusetts Legislature, but Melrose's path would need its own review.",
    status: "needs-review",
    reviewStatus: "legal-review-placeholder",
    sourceIds: ["ma-h4262-boston", "boston-rcv", "ma-constitution"],
  },
  {
    title: "What role does the Governor play?",
    category: "Home rule",
    summary:
      "A special act passed by the Legislature generally would need the Governor's signature or another constitutionally valid route to become law. This should be stated only with legal review when petition language is ready.",
    status: "needs-review",
    reviewStatus: "legal-review-placeholder",
    sourceIds: ["ma-constitution"],
  },
  {
    title: "Would RCV apply to every local office?",
    category: "Implementation",
    summary:
      "That decision has not been made in this draft content. Mayor, ward councilor, councilor-at-large, and School Committee contests may raise different legal and counting-method questions, especially for multi-seat races.",
    status: "needs-review",
    reviewStatus: "open-question",
    sourceIds: ["melrose-charter-article-2", "cambridge-election", "mit-irv"],
  },
  {
    title: "Would RCV replace preliminary elections?",
    category: "Implementation",
    summary:
      "This is an open legal and policy question. Some RCV systems are described as runoff-like, but Melrose's charter provisions, any preliminary election rules, and special-act language must be reviewed before making a claim.",
    status: "needs-review",
    reviewStatus: "legal-review-placeholder",
    sourceIds: ["ncsl-rcv", "melrose-charter"],
  },
  {
    title: "How much would implementation cost?",
    category: "Implementation",
    summary:
      "No Melrose cost estimate has been verified. Costs could depend on equipment, ballot design, software, staff time, voter education, audits, recounts, and whether any election is replaced. The site should not claim RCV will save money.",
    status: "needs-review",
    reviewStatus: "open-question",
    sourceIds: ["mit-cost", "ncsl-implementation", "rcvrc"],
  },
  {
    title: "Would voting machines need to change?",
    category: "Implementation",
    summary:
      "Unknown. Melrose's current equipment, ballot scanners, exports, tabulation software, certification requirements, and state guidance need official election-administration review.",
    status: "needs-review",
    reviewStatus: "open-question",
    sourceIds: ["melrose-elections", "ncsl-implementation", "rcvrc"],
  },
  {
    title: "How would voters learn the new system?",
    category: "Voter education",
    summary:
      "Any serious proposal should include plain-language voter education, accessible materials, practice examples, poll-worker training, and clear results explanations. Official ballot instructions would need election-administration review.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["center-civic-design-rcv", "rcvrc", "ncsl-implementation"],
  },
  {
    title: "Is this partisan?",
    category: "Campaign",
    summary:
      "Melrose RCV is framed as a nonpartisan civic education and organizing effort. The site should not use partisan language or suggest RCV is meant to help any party, faction, or candidate.",
    status: "needs-review",
    reviewStatus: "assumption",
  },
  {
    title: "What happens if the Legislature does not approve the petition?",
    category: "Home rule",
    summary:
      "Then the petition would not provide authority for Melrose to implement RCV. Residents and local officials could revisit the proposal, seek changes, pursue broader legislation, or continue civic education, but implementation would not be automatic.",
    status: "needs-review",
    reviewStatus: "legal-review-placeholder",
    sourceIds: ["ma-constitution", "ma-h4262-boston", "ma-s531"],
  },
  {
    title: "How can I help?",
    category: "Campaign",
    summary:
      "You can join updates, volunteer, ask a question, share sourced information with neighbors, attend local meetings, or support the effort once donation and compliance details are verified.",
    status: "needs-review",
    reviewStatus: "assumption",
    ctaLabel: "Contact Melrose RCV",
    ctaHref: "/contact",
  },
];
