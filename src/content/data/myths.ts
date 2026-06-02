import type { PlaceholderContent } from "../../types/site";

export const myths: PlaceholderContent[] = [
  {
    title: "RCV is too confusing.",
    category: "Concern with a real implementation question",
    summary:
      "RCV is different from choose-one voting, so voters deserve clear examples, accessible instructions, and time to learn. Other cities use RCV, but Melrose should not treat voter education as optional.",
    status: "needs-review",
    reviewStatus: "assumption",
    sourceIds: ["center-civic-design-rcv", "ncsl-implementation", "pettigrew-radley"],
  },
  {
    title: "RCV lets some people vote more than once.",
    category: "Misconception",
    summary:
      "In single-winner RCV, each ballot counts for one continuing candidate at a time. Transfers are not extra votes; they are a way to count a voter's next valid choice if an earlier choice is eliminated.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["mit-irv", "nyc-boe-rcv", "boulder-rcv"],
  },
  {
    title: "RCV is partisan.",
    category: "Misconception",
    summary:
      "RCV is an election method, not a party platform. It is used in different places under different political conditions. A Melrose proposal should be evaluated on local rules, voter education, cost, transparency, and public trust.",
    status: "needs-review",
    reviewStatus: "assumption",
    sourceIds: ["ncsl-rcv", "maine-sos-rcv", "nyc-votes-rcv"],
  },
  {
    title: "RCV guarantees better candidates.",
    category: "Overclaim",
    summary:
      "No election method can guarantee better candidates. Supporters hope RCV can reduce vote-splitting pressure and encourage broader outreach, but candidate quality depends on people, campaigns, institutions, and voters.",
    status: "needs-review",
    reviewStatus: "assumption",
    sourceIds: ["mit-irv", "fairvote-rcv"],
  },
  {
    title: "RCV is a silver bullet.",
    category: "Overclaim",
    summary:
      "RCV is one possible election reform, not a cure-all. It does not replace good candidates, local accountability, campaign transparency, accessible voter education, or careful election administration.",
    status: "needs-review",
    reviewStatus: "assumption",
    sourceIds: ["ncsl-implementation", "center-civic-design-rcv"],
  },
  {
    title: "RCV always takes too long to count.",
    category: "Concern with a real implementation question",
    summary:
      "RCV can require more explanation and may require later round-by-round reporting, especially with mail ballots or close races. That does not mean results must always be slow, but Melrose should verify how preliminary and certified results would work.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["ncsl-implementation", "center-civic-design-rcv", "maine-sos-rcv"],
  },
  {
    title: "RCV is impossible to audit.",
    category: "Concern with a real implementation question",
    summary:
      "RCV can be audited, but the procedures depend on ballots, cast vote records, tabulation software, state rules, recount law, and local capacity. Melrose should not claim audits are solved until election administrators and counsel review the plan.",
    status: "needs-review",
    reviewStatus: "open-question",
    sourceIds: ["rcvrc", "maine-sos-rcv", "ncsl-implementation"],
  },
  {
    title: "The candidate with the most first-choice votes should always win.",
    category: "Civic judgment question",
    summary:
      "That is a fair value question. Choose-one plurality elections emphasize first choices. Single-winner RCV asks whether a winner should also survive runoff-style rounds when no one starts with enough support under the rules.",
    status: "needs-review",
    reviewStatus: "assumption",
    sourceIds: ["ncsl-rcv", "mit-irv"],
  },
  {
    title: "Melrose can just switch to RCV on its own.",
    category: "Legal misconception",
    summary:
      "The research indicates Melrose likely needs state authorization because Massachusetts home rule does not give municipalities broad power over election regulation. The exact path requires legal review.",
    status: "needs-review",
    reviewStatus: "legal-review-placeholder",
    sourceIds: ["ma-constitution", "ma-ch43b", "ma-ballot-question"],
  },
];
