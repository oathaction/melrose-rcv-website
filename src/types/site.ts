export type ReviewStatus =
  | "verified"
  | "assumption"
  | "open-question"
  | "legal-review-placeholder";

export type PlaceholderStatus = "draft-placeholder" | "needs-research" | "needs-review";

export interface NavItem {
  label: string;
  href: string;
}

export interface RouteMeta {
  title: string;
  description: string;
  path: string;
}

export interface SourceEntry {
  id: string;
  title: string;
  publisher: string;
  url: string;
  status: ReviewStatus;
  note: string;
  accessed?: string;
  reliability?: "high" | "medium-high" | "medium" | "use-with-caution";
  supports?: string;
}

export interface PlaceholderContent {
  title: string;
  summary: string;
  status: PlaceholderStatus;
  reviewStatus: ReviewStatus;
  category?: string;
  sourceIds?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface HomeRuleStep {
  label: string;
  summary: string;
  status: ReviewStatus;
  sourceIds?: string[];
  reviewNote?: string;
}
