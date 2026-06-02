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
}

export interface PlaceholderContent {
  title: string;
  summary: string;
  status: PlaceholderStatus;
  reviewStatus: ReviewStatus;
}

export interface HomeRuleStep {
  label: string;
  summary: string;
  status: ReviewStatus;
}
