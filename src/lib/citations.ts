import type { ReviewStatus, SourceEntry } from "../types/site";

export const citationStandards = [
  "Use primary sources for legal, municipal, and election-administration claims.",
  "Do not invent citations or imply review that has not happened.",
  "Label unresolved items as assumptions, open questions, or legal-review placeholders.",
];

export function sourcesByStatus(sources: SourceEntry[], status: ReviewStatus) {
  return sources.filter((source) => source.status === status);
}
