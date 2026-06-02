import type { HomeRuleStep } from "../../types/site";

export const homeRuleSteps: HomeRuleStep[] = [
  {
    label: "Build the local case and review the law",
    summary:
      "Residents and local officials would need to define the problem, identify which offices might be covered, and review Massachusetts election law, the Melrose Charter, and home rule limits before petition language is treated as final.",
    status: "legal-review-placeholder",
    sourceIds: ["ma-constitution", "ma-ch43b", "melrose-charter"],
    reviewNote: "Requires Massachusetts municipal/election-law review.",
  },
  {
    label: "Draft a proposed special act",
    summary:
      "A petition would ask the Legislature to authorize a specific local RCV system or local option. The text would need to address office scope, counting method, election administration, and any voter-approval or effective-date provisions.",
    status: "legal-review-placeholder",
    sourceIds: ["ma-constitution", "ma-h4262-boston", "ma-s531"],
    reviewNote: "Do not publish final petition language without counsel.",
  },
  {
    label: "Local public consideration",
    summary:
      "The Melrose City Council and possibly other local actors would consider whether to approve or advance the petition. The exact local vote, mayoral role, and any resident-petition or ballot-question step remain open questions.",
    status: "legal-review-placeholder",
    sourceIds: ["melrose-charter-article-2", "ma-constitution", "ma-ballot-question"],
    reviewNote: "Exact Melrose local process is not yet verified.",
  },
  {
    label: "State legislative review",
    summary:
      "If locally approved for filing, the petition would move to the Massachusetts Legislature as a bill. It could receive a committee hearing, be amended, reported, studied, passed, or not advanced. State approval is not guaranteed.",
    status: "verified",
    sourceIds: ["ma-constitution", "ma-h4262-boston", "boston-rcv"],
    reviewNote: "Legislative status should be rechecked before launch.",
  },
  {
    label: "Governor and final authorization",
    summary:
      "If the Legislature passes a special act, the Governor is part of the normal approval path. The final law would control what authority Melrose receives and what additional local steps, if any, are required.",
    status: "legal-review-placeholder",
    sourceIds: ["ma-constitution"],
    reviewNote: "Requires legal review before public process diagrams are final.",
  },
  {
    label: "Implementation planning",
    summary:
      "Even after legal authorization, Melrose would still need election-administration planning: ballot design, equipment, tabulation, voter education, accessibility, results reporting, audits, recounts, staffing, and cost review.",
    status: "open-question",
    sourceIds: ["melrose-elections", "ncsl-implementation", "rcvrc", "center-civic-design-rcv"],
    reviewNote: "Requires official election-administration review.",
  },
];
