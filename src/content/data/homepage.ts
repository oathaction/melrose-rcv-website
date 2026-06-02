import type { PlaceholderContent } from "../../types/site";

export const homepageSections: PlaceholderContent[] = [
  {
    title: "Hero",
    summary:
      "Melrose RCV is a nonpartisan civic education and organizing effort working to build public understanding and support for bringing ranked-choice voting to Melrose municipal elections through a Massachusetts home rule petition.",
    status: "needs-review",
    reviewStatus: "assumption",
    ctaLabel: "Learn how RCV works",
    ctaHref: "/how-it-works",
  },
  {
    title: "Trust bar",
    summary:
      "Nonpartisan. Source-grounded. Melrose-focused. Not an official City of Melrose election resource. Not legal advice.",
    status: "needs-review",
    reviewStatus: "assumption",
    sourceIds: ["melrose-elections", "ma-constitution"],
  },
  {
    title: "What is RCV?",
    summary:
      "Ranked-choice voting lets voters rank candidates in order of preference instead of choosing only one. Later rankings are backup choices if an earlier-ranked candidate is eliminated.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["ncsl-rcv", "mit-irv"],
    ctaLabel: "Read the plain-language guide",
    ctaHref: "/what-is-rcv",
  },
  {
    title: "How RCV works",
    summary:
      "First choices are counted first. If no candidate reaches the winning threshold, the lowest candidate is eliminated and ballots can transfer to the next ranked continuing candidate.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["mit-irv", "boulder-rcv"],
    ctaLabel: "See the counting steps",
    ctaHref: "/how-it-works",
  },
  {
    title: "Melrose-themed example",
    summary:
      "Use a fictional neighborhood example, such as ranking community event ideas, to show transfers without implying a real Melrose election result or official ballot rule.",
    status: "needs-review",
    reviewStatus: "assumption",
    sourceIds: ["center-civic-design-rcv"],
  },
  {
    title: "Why RCV for Melrose?",
    summary:
      "Supporters believe RCV could give voters more expressive ballots and reduce vote-splitting pressure in crowded local races. The site should also say clearly that benefits are not guaranteed.",
    status: "needs-review",
    reviewStatus: "assumption",
    sourceIds: ["ncsl-rcv", "mit-irv"],
    ctaLabel: "Why consider it here?",
    ctaHref: "/why-melrose",
  },
  {
    title: "Home rule petition pathway",
    summary:
      "Because Massachusetts local election authority is limited, a Melrose RCV proposal likely needs state authorization through a home rule petition. Local approval would not make implementation automatic.",
    status: "needs-review",
    reviewStatus: "legal-review-placeholder",
    sourceIds: ["ma-constitution", "ma-ch43b", "ma-ballot-question"],
    ctaLabel: "Understand the path",
    ctaHref: "/home-rule-petition",
  },
  {
    title: "Questions worth asking",
    summary:
      "Which offices would be covered? What would it cost? Would equipment need to change? How would voters learn the system? How would audits, recounts, and results reporting work?",
    status: "needs-review",
    reviewStatus: "open-question",
    sourceIds: ["ncsl-implementation", "rcvrc", "melrose-elections"],
  },
  {
    title: "Myths and facts preview",
    summary:
      "RCV does not let anyone vote more than once, ranking a backup choice does not hurt a continuing first choice, and implementation concerns deserve serious answers.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["mit-irv", "boulder-rcv", "center-civic-design-rcv"],
    ctaLabel: "Read myths and facts",
    ctaHref: "/myths-and-facts",
  },
  {
    title: "Where RCV is used preview",
    summary:
      "RCV is used in several U.S. jurisdictions, including Maine, New York City, Cambridge, Minneapolis, and Boulder in different forms. Any national status count should be rechecked before launch.",
    status: "needs-review",
    reviewStatus: "verified",
    sourceIds: ["ncsl-rcv", "maine-sos-rcv", "nyc-votes-rcv", "cambridge-election"],
    ctaLabel: "Review examples",
    ctaHref: "/sources",
  },
  {
    title: "Join the effort",
    summary:
      "Join updates, volunteer, ask a question, share source-backed information, or support the effort once donation and compliance details are verified.",
    status: "needs-review",
    reviewStatus: "assumption",
    ctaLabel: "Contact Melrose RCV",
    ctaHref: "/contact",
  },
  {
    title: "Footer CTA",
    summary:
      "Melrose deserves a careful, transparent conversation before deciding whether RCV belongs in local elections. Start with the FAQ or send a question.",
    status: "needs-review",
    reviewStatus: "assumption",
    ctaLabel: "Read the FAQ",
    ctaHref: "/faq",
  },
];
