import type { PlaceholderContent } from "../../types/site";

export const benefits: PlaceholderContent[] = [
  {
    title: "More ways to express voter preferences",
    summary:
      "RCV lets voters rank a favorite candidate and backup choices on the same ballot. That can be especially useful in races with more than two candidates, while still letting a voter rank only one candidate if they prefer.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["ncsl-rcv", "nyc-votes-rcv", "minneapolis-rcv"],
    ctaLabel: "Learn how ranking works",
    ctaHref: "/how-it-works",
  },
  {
    title: "Less pressure around vote splitting",
    summary:
      "Supporters argue RCV can reduce the pressure to choose only between the candidates who seem most likely to win, because backup choices can count if a favorite candidate is eliminated. This should be described as a design goal, not a guarantee.",
    status: "needs-review",
    reviewStatus: "assumption",
    sourceIds: ["mit-irv", "fairvote-rcv"],
  },
  {
    title: "Runoff-style counting without a separate runoff election",
    summary:
      "Single-winner RCV is often described as an instant runoff because counting can proceed in rounds from one ballot. Whether this would replace or change any Melrose preliminary election process is a legal and policy question.",
    status: "needs-review",
    reviewStatus: "assumption",
    sourceIds: ["ncsl-rcv", "mit-irv", "melrose-charter"],
  },
  {
    title: "A reason to strengthen voter education",
    summary:
      "A serious RCV proposal would require plain-language explanations, accessible ballot examples, and clear results reporting. That work can make the whole election conversation more transparent, even for residents who are skeptical.",
    status: "needs-review",
    reviewStatus: "assumption",
    sourceIds: ["center-civic-design-rcv", "ncsl-implementation", "rcvrc"],
  },
];
