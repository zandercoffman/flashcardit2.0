export const MCP_READINESS = {
  status: "planned",
  summary:
    "MCP is not production-ready yet because user flashcard sets currently live in browser localStorage and are not available to server-side tools.",
  requiredArchitecture: [
    "Server-side persistence for flashcard sets (database + user ownership)",
    "Authenticated API tokens/scopes for MCP clients",
    "Document ingestion pipeline for PDFs/text uploads",
    "Queued background processing for long PDF summarization jobs",
  ],
  recommendedNextSteps: [
    "Move set CRUD from localStorage to authenticated server APIs",
    "Store uploaded files in object storage and extract text server-side",
    "Add MCP server endpoints mapped to create/find/update flashcard actions",
    "Add audit logging and per-user rate limits for AI + MCP actions",
  ],
} as const

export type MCPAction =
  | "summarize_pdf"
  | "generate_flashcards"
  | "append_to_set"
  | "create_set"
