---
name: dht-qa-verify
description: Boundary-verification checklist for the DHT water-monitoring system - cross-checks GraphQL typeDefs against resolvers, models, client .graphql operations, generated hooks, and pages. MUST be used when verifying a feature, reviewing integration correctness, checking "does the client match the server", or before declaring any full-stack change complete. Also for follow-ups like "re-verify", "check my changes", "did anything break".
---

# DHT QA Verification

QA here means **cross-boundary shape comparison**, not existence checks. Each check opens both sides of a boundary and diffs them. Run checks incrementally — after backend lands, run B1-B2; after frontend lands, run B3-B5.

## B1: typeDefs ↔ resolver

For each new/changed SDL field on `Query`/`Mutation`:

- A resolver function with the **exact same name** exists in some `server/schema/resolvers/*.resolver.js`
- That resolver file is registered in `resolvers/index.js` (most common miss — grep the index)
- Resolver destructured arg names match SDL argument names (`{ status }` vs `status: DeviceStatusUpdateInput`)

Quick commands (from `server/`):

```
node -e "require('./schema/typeDefs')"     # SDL parses
node -e "require('./schema/resolvers')"    # resolver merge loads
```

## B2: resolver ↔ model

- Every model function a resolver calls exists in the model file (`GetAll`, `Insert`, `Update`, `Delete`…)
- Model returns documents whose **PascalCase field names match the SDL type's fields** — there is no mapping layer; a mismatch returns silent nulls on the client, not an error. Diff SDL type fields against the model's constructor / projection.
- `_id` conversions use `new ObjectId(id)` where the model queries by id

## B3: typeDefs ↔ client operations

For each new/changed `client/src/graphql/*.graphql`:

- Operation field names, argument names, and input type names exist in `server/schema/typeDefs.js` **exactly** (grep the SDL for each)
- Nullability matches — an operation passing a variable declared `$x: Foo!` to a `Foo` arg is fine; the reverse breaks codegen
- Selected fields exist on the SDL return type

## B4: operation ↔ page

- The page imports the **generated** hook (`use{Name}Query/Mutation` from `__generated__/graphql.ts`), not a hand-rolled `gql` document
- Fields the page reads off the result are actually selected in the operation file (unselected fields are `undefined` at runtime, typed-as-present at compile time only when codegen is stale)
- `npx tsc --noEmit` in `client/` passes — run it; do not assume

## B5: server-upload ↔ client (only when uploads touched)

- Route path + method in `server-upload/routers/` matches the axios URL in the client page
- multer field name matches the FormData key the client appends

## Reporting

Write `_workspace/{phase}_qa_report.md`:

| # | Boundary | Location | Expected | Actual | Owner |
|---|----------|----------|----------|--------|-------|

- Empty table = pass; still list **which checks ran** so a pass is auditable
- A check that could not run (server down, codegen stale) is **blocked**, never passed — include the unblock step
- Route findings to the owning agent (backend: B1/B2 + SDL side of B3; frontend: B3 op side, B4; upload: B5)

## Known bug patterns in this codebase's shape

- Resolver written but not registered in `resolvers/index.js` → runtime null errors
- Model field renamed but SDL not updated (or vice versa) → silent nulls, no error anywhere
- Codegen run against the **deployed** schema while the change is only local → hooks missing/stale (check `graphql.config.yaml` schema URL)
- Mantine 7 syntax pasted into this Mantine 6 client → type errors or silently ignored props
