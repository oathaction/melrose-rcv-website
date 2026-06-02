import type { RouteMeta } from "../types/site";
import { DEFAULT_DESCRIPTION, SITE_NAME } from "./constants";

export const defaultMeta: RouteMeta = {
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  path: "/",
};

export const pageMeta: Record<string, RouteMeta> = {
  "/": defaultMeta,
  "/what-is-rcv": {
    title: "What Is RCV?",
    description: "A plain-language placeholder introduction to ranked-choice voting.",
    path: "/what-is-rcv",
  },
  "/how-it-works": {
    title: "How It Works",
    description: "Placeholder diagrams and steps for explaining an RCV count.",
    path: "/how-it-works",
  },
  "/why-melrose": {
    title: "Why Melrose?",
    description: "Placeholder framing for local civic questions and context.",
    path: "/why-melrose",
  },
  "/home-rule-petition": {
    title: "Home Rule Petition",
    description: "Placeholder overview of a Massachusetts home rule petition pathway.",
    path: "/home-rule-petition",
  },
  "/melrose-elections": {
    title: "Melrose Elections",
    description: "Placeholder section for source-grounded Melrose election context.",
    path: "/melrose-elections",
  },
  "/myths-and-facts": {
    title: "Myths And Facts",
    description: "Placeholder space for respectful, source-grounded answers.",
    path: "/myths-and-facts",
  },
  "/faq": {
    title: "FAQ",
    description: "Starter questions for future source-grounded answers.",
    path: "/faq",
  },
  "/about": {
    title: "About",
    description: "Placeholder information about the Melrose RCV organizing project.",
    path: "/about",
  },
  "/contact": {
    title: "Contact",
    description: "Placeholder contact page for future community outreach.",
    path: "/contact",
  },
  "/donate": {
    title: "Donate",
    description: "Placeholder donation page pending campaign and compliance setup.",
    path: "/donate",
  },
  "/sources": {
    title: "Sources",
    description: "Placeholder source log and citation standards.",
    path: "/sources",
  },
};

export function getPageMeta(path: string): RouteMeta {
  return pageMeta[path] ?? defaultMeta;
}
