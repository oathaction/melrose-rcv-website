import type { HomeRuleStep } from "../../types/site";

export const homeRuleSteps: HomeRuleStep[] = [
  {
    label: "Research local authority",
    summary: "Confirm the legal and municipal pathway using primary sources.",
    status: "legal-review-placeholder",
  },
  {
    label: "Draft petition language",
    summary: "Prepare language only with appropriate legal and municipal review.",
    status: "legal-review-placeholder",
  },
  {
    label: "Local consideration",
    summary: "Document local approval requirements after source review.",
    status: "open-question",
  },
  {
    label: "State review",
    summary: "Document state-level filing and approval steps after source review.",
    status: "open-question",
  },
];
