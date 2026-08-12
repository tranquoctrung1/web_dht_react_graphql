---
name: dht-feature
description: Orchestrator for full-stack feature work on the DHT water-monitoring system. Coordinates dht-backend-engineer, dht-frontend-engineer, and dht-qa-engineer through schema → resolver/model → client operation → codegen → page → QA. MUST be used for any feature request touching both client/ and server/, any new entity or report screen, and for follow-ups - "re-run", "update the feature", "fix what QA found", "redo just the frontend part", "improve the previous result". Single-layer trivial edits may skip this and use the layer skill directly.
---

# DHT Feature Orchestrator

Coordinates the agent team for full-stack changes. Architecture pattern: **pipeline + generate-verify** (backend → frontend, QA verifying incrementally after each stage).

**Execution mode: agent team** (backend, frontend, QA coordinate via task list and messages). For a strictly single-layer task with no cross-boundary risk, a single sub-agent call is acceptable — note the mode chosen.

## Phase 0: Context check

Before anything, decide the run mode:

- `_workspace/` exists + user asks partial fix ("QA finding #2", "just the page") → **partial re-run**: re-invoke only the owning agent with the existing summaries as input
- `_workspace/` exists + user provides a new feature request → **new run**: move `_workspace/` to `_workspace_prev/`, start fresh
- No `_workspace/` → **initial run**

## Phase 1: Scope split

Read the request and classify each piece:

| Touches | Owner | Skill |
|---------|-------|-------|
| `server/` schema, resolvers, models | dht-backend-engineer | dht-backend-dev |
| `server-upload/` | dht-backend-engineer | dht-backend-dev |
| `client/` pages, slices, operations | dht-frontend-engineer | dht-frontend-dev |
| Verification | dht-qa-engineer | dht-qa-verify |

Produce a task list with dependencies. Typical shape:

1. Backend: SDL + model + resolver (no deps)
2. QA: B1-B2 boundary check (depends on 1)
3. Frontend: operation files + codegen + page (depends on 1; can draft UI in parallel with 2)
4. QA: B3-B5 boundary check + `tsc --noEmit` (depends on 3)
5. Fix round: findings routed to owners (depends on 4)

## Phase 2: Execution

- Spawn agents with `model: "opus"`.
- Data handoff is **file-based** through `_workspace/` at the repo root:
  - `01_backend_contract.md` — new/changed GraphQL fields, args, return types
  - `02_frontend_summary.md` — operations, pages, routes, slices added
  - `03_qa_report.md` — findings table (or explicit pass + checks run)
  - Naming: `{phase}_{agent}_{artifact}.md`
- QA runs **incrementally**: after backend completes, before frontend consumes the contract. Cheaper to fix the SDL before the client is built on it.
- Codegen constraint (critical sequencing): frontend can only generate hooks against a schema the codegen endpoint serves. If the backend change is local-only, the local server must be started and `client/graphql.config.yaml` pointed at localhost before step 3 completes. The orchestrator owns making this call and telling the frontend agent which endpoint to use.

## Phase 3: Fix loop

- Each QA finding goes to its owner; owner fixes; QA re-verifies **only failed findings + touched boundaries**
- Max 2 fix rounds; unresolved findings after that are surfaced to the user with expected-vs-actual, not silently dropped

## Phase 4: Completion

- Summarize to the user: files changed per layer, contract delta, QA verdict, anything blocked (e.g. codegen not run — with the exact command to run)
- Keep `_workspace/` for audit; do not delete
- Ask for feedback; route it per the harness evolution table in `CLAUDE.md` history

## Error handling

- Agent fails → retry once; on second failure, proceed without that piece and mark it **missing** in the completion summary
- Conflicting shapes between layers → never pick silently; report both with sources and let QA's boundary rule (SDL is the contract) decide
- Blocked verification (server down, codegen stale) → report blocked + unblock step; never report as passed

## Test scenarios

**Normal flow:** "Add a 'battery voltage' field to loggers and show it on the logger page."
→ backend adds `BatteryVoltage: Float` to `DeviceLogger` SDL + model; QA checks B1-B2; frontend adds field to the relevant operation, runs codegen, adds table column in `logger.tsx`; QA checks B3-B4 + tsc; done.

**Error flow:** frontend reports the generated hook lacks `BatteryVoltage`.
→ QA flags blocked B3: codegen ran against deployed schema (`graphql.config.yaml` remote URL) without the local change. Orchestrator instructs: start local server, switch yaml to localhost, re-run `pnpm codegen`, restore yaml. Re-verify, proceed.
