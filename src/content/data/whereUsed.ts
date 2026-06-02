import type { PlaceholderContent } from "../../types/site";

export const whereUsed: PlaceholderContent[] = [
  {
    title: "Cambridge, Massachusetts",
    summary:
      "Cambridge uses proportional representation with ranked ballots for City Council and School Committee. It is a useful Massachusetts example, but it is not identical to a single-winner instant-runoff proposal for Melrose.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["cambridge-election", "mit-irv"],
  },
  {
    title: "Maine",
    summary:
      "Maine uses RCV for certain statewide, federal, and primary elections under Maine law. Its official resources are helpful examples of voter education, rules, and recount documentation, not Massachusetts legal authority.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["maine-sos-rcv", "ncsl-rcv"],
  },
  {
    title: "New York City",
    summary:
      "New York City uses RCV in primary and special elections for covered local offices. NYC Votes and the NYC Board of Elections provide clear examples of plain-language voter education and official scope language.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["nyc-votes-rcv", "nyc-boe-rcv"],
  },
  {
    title: "Minneapolis and Boulder",
    summary:
      "Minneapolis and Boulder County offer official municipal RCV education that explains ranking, counting, and common ballot-marking issues. Their local rules should not be copied into Melrose instructions without review.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["minneapolis-rcv", "boulder-rcv"],
  },
  {
    title: "Massachusetts proposals",
    summary:
      "Recent Massachusetts legislative examples include a statewide local-option bill and Boston's RCV home rule petition. Bill status can change, and those examples do not settle Melrose's legal path.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["ma-s531", "ma-h4262-boston", "boston-rcv"],
  },
];
