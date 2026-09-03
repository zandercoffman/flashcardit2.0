## Overview

Flashcardit is a multi-mode study app where users create sets, review with flashcards/quizzes/games, and manage study workflows from one dashboard.

## Features & Design

### Core Features

- Flashcard set creation from AI-assisted workflows and manual editing.
- Local set storage and fast set launch from the sidebar and dashboard.
- Multiple study experiences: flashcards, quiz, matching, speak-it, study path, and list-specific extensions.
- Export and sharing helpers (JSON/PDF/QR) and integrated notes/resources areas.

### UX Direction

- Mobile-first layout behavior with polished spacing and readable typography.
- Clear action hierarchy (primary actions surfaced first, supportive actions nearby).
- Progressive workflows with immediate validation and actionable error states.

## Current Task: UX, AI Workflow, Manual Creation, MCP Readiness

### Plan

1. Upgrade the Create page into two obvious paths: AI creation and manual creation.
2. Improve AI copy/open/paste workflow with auto-validation, preview, and draft persistence.
3. Build a polished manual editor with add/edit/delete/reorder/preview/save actions.
4. Fix key responsive issues in shared screens (create/list/flashcard readability).
5. Add MCP readiness scaffolding and document practical architecture constraints.
6. Validate with lint/build and security checks.

### Steps Implemented

1. Rebuilt `src/components/pages/Create.tsx` with clear creation method selection (AI vs manual), mobile-first layout, and stronger visual flow.
2. Implemented a full AI handoff workflow with prompt generation, copy/open assistant actions, source text import, autosaved drafts, paste detection, robust JSON validation, and live set preview.
3. Added a full manual flashcard editor (set title, card add/edit/delete/reorder, live preview, and save).
4. Improved responsiveness in key shared UI surfaces:
   - `src/app/page.tsx` main content/list screen spacing and card sizing.
   - `src/components/set/Flashcard.tsx` flashcard dimensions/text scaling for mobile and desktop readability.
   - `src/components/app-sidebar.tsx` logo/header sizing polish for smaller screens.
5. Added MCP preparation (without breaking existing behavior):
   - `src/lib/mcp/readiness.ts` documents constraints and next architecture steps.
   - `src/app/api/mcp/route.ts` exposes secure readiness endpoint + blocked mutation scaffold.
   - `.idx/mcp.json` now configures Firebase MCP server wiring for development tooling.
