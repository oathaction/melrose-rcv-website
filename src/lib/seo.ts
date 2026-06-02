import type { RouteMeta } from "../types/site";
import { DEFAULT_DESCRIPTION, SITE_NAME } from "./constants";

export const defaultMeta: RouteMeta = {
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  path: "/",
};

export const pageMeta: Record<string, RouteMeta> = {
  "/": {
    title: "Melrose Ranked-Choice Voting | Learn About RCV",
    description:
      "Learn about ranked-choice voting, why Melrose residents are discussing it, and the Massachusetts home rule petition path that would require legal and civic review.",
    path: "/",
  },
  "/what-is-rcv": {
    title: "What Is Ranked-Choice Voting? | Melrose RCV",
    description:
      "A plain-language explanation of ranked-choice voting, instant-runoff voting, and how ranked ballots differ from choose-one elections.",
    path: "/what-is-rcv",
  },
  "/how-it-works": {
    title: "How Ranked-Choice Voting Works | Melrose RCV",
    description:
      "Learn how ranked-choice voting counts first choices, transfers ballots in rounds, and handles backup rankings.",
    path: "/how-it-works",
  },
  "/why-melrose": {
    title: "Why Consider Ranked-Choice Voting In Melrose?",
    description:
      "Explore why Melrose residents may consider ranked-choice voting, what supporters hope it could improve, and what questions need review.",
    path: "/why-melrose",
  },
  "/home-rule-petition": {
    title: "Massachusetts Home Rule Petition Path For Melrose RCV",
    description:
      "Learn why a Melrose ranked-choice voting proposal would need legal review, local civic action, and likely state legislative authorization.",
    path: "/home-rule-petition",
  },
  "/melrose-elections": {
    title: "Melrose Elections And Ranked-Choice Voting Context",
    description:
      "Review verified Melrose municipal election context and the local questions that would need review before any RCV proposal.",
    path: "/melrose-elections",
  },
  "/myths-and-facts": {
    title: "Ranked-Choice Voting Myths, Facts, And Concerns",
    description:
      "A respectful guide to common RCV misconceptions, real implementation concerns, and what Melrose would still need to verify.",
    path: "/myths-and-facts",
  },
  "/faq": {
    title: "Ranked-Choice Voting FAQ For Melrose Residents",
    description:
      "Answers to common questions about ranked-choice voting, Melrose elections, home rule petitions, and implementation concerns.",
    path: "/faq",
  },
  "/about": {
    title: "About",
    description:
      "Learn about the nonpartisan civic education and organizing effort exploring ranked-choice voting for Melrose municipal elections.",
    path: "/about",
  },
  "/contact": {
    title: "Contact",
    description:
      "Ask a question, join updates, or volunteer with the Melrose ranked-choice voting civic education effort.",
    path: "/contact",
  },
  "/donate": {
    title: "Support Melrose RCV",
    description:
      "Support the Melrose RCV civic education effort, or learn other ways to help once donation details are verified.",
    path: "/donate",
  },
  "/sources": {
    title: "Sources For Melrose RCV Research",
    description:
      "Review the official, research, civic-design, and advocacy sources used to ground the Melrose RCV website.",
    path: "/sources",
  },
};

export function getPageMeta(path: string): RouteMeta {
  return pageMeta[path] ?? defaultMeta;
}
