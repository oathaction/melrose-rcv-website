import type { PlaceholderContent } from "../../types/site";

export const rcvExamples: PlaceholderContent[] = [
  {
    title: "A fictional Melrose parks example",
    summary:
      "Imagine neighbors ranking three ideas for a community event: a park cleanup, a concert, and a volunteer fair. First choices are counted first. If no option reaches the winning threshold, the lowest option is eliminated and those ballots move to each voter's next ranked continuing option. This example is for learning only; it is not an official ballot rule or a real Melrose election.",
    status: "needs-review",
    reviewStatus: "assumption",
    sourceIds: ["mit-irv", "ncsl-rcv", "center-civic-design-rcv"],
  },
  {
    title: "What the example should teach",
    summary:
      "The point is simple: later rankings are backup choices, and a ballot counts for one continuing option at a time. Any public practice ballot for Melrose elections would need legal and election-administration review before launch.",
    status: "needs-review",
    reviewStatus: "legal-review-placeholder",
    sourceIds: ["boulder-rcv", "nyc-votes-rcv", "ncsl-implementation"],
  },
];
