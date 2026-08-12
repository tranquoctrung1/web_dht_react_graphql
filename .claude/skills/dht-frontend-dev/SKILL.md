---
name: dht-frontend-dev
description: Client-side development conventions for the DHT water-monitoring React app - pages, Mantine 6 UI, Redux Toolkit slices, GraphQL operation files, and the graphql-codegen workflow. MUST be used for any change under client/, including new pages, tables, forms, maps, chart/report screens, wiring a new query or mutation, or fixing UI. Also applies to follow-ups like "update the page", "add a column", "hook up the mutation".
---

# DHT Frontend Development

## Architecture

```
client/src/
├── main.tsx / App.tsx       app entry + react-router-dom v6 routes
├── pages/*.tsx              route screens (~40, one per feature)
├── components/, layout/     shared UI, sidebar/shell
├── features/*.ts            Redux Toolkit slices → registered in store.ts
├── graphql/*.graphql        ONE operation per file
├── __generated__/graphql.ts codegen output - NEVER edit by hand
├── hooks/, utils/, types/
```

Stack pins that matter: **Mantine 6** (not 7 — different styling API), **TypeScript 4.9**, Apollo Client 3, react-router-dom 6, react-data-table-component for tables, react-hook-form for forms, sweetalert2 for dialogs, react-leaflet 4 for maps, dayjs for dates.

## GraphQL data flow (the golden path)

1. Create `src/graphql/{OperationName}.graphql` — one operation per file, operation name in PascalCase matching the file:

```graphql
mutation DeleteDeviceStatus($status: DeviceStatusUpdateInput) {
    DeleteDeviceStatus(status: $status)
}
```

2. Run codegen: `pnpm codegen` in `client/` (watch mode) — regenerates `src/__generated__/graphql.ts` with typed hooks (`useDeleteDeviceStatusMutation`, `useGetAllDeviceStatusQuery`, refetch fns included via `withRefetchFn`).

3. Import the generated hook in the page. **Never** hand-write operation types, never `gql` inline in components, never edit `__generated__/`.

**Schema source caveat:** `graphql.config.yaml` points at the deployed endpoint (`http://14.161.22.76:6001`), with a commented localhost line. If you're building against a backend change that isn't deployed yet, start the local server and switch the yaml to the localhost line temporarily — otherwise codegen will not see the new fields and hooks will be missing. Say this explicitly in your summary if you couldn't run codegen.

## Adding a page

1. Copy the structure of the nearest existing page:
   - data table / report screen → any `quantity*.tsx` or `statistic*.tsx`
   - CRUD form screen → `changeMeter.tsx` / `changeLogger.tsx` pattern
   - map feature → `map.tsx` (react-leaflet)
2. Register the route in the router (see `App.tsx` / router setup) and add the sidebar entry in `layout/` if it's user-navigable.
3. Auth: login state comes through the existing login flow (`login.tsx`, JWT from `LoginAction`); follow how existing protected pages consume it.

## Redux slices

Small single-purpose slices in `features/` (e.g. `currentPreciousId.ts`, `openSidebar.ts`). New cross-page state gets its own small slice + registration in `store.ts`. Do not grow a god-slice; the codebase convention is one concern per file.

## UI conventions

- Mantine 6 components + `@tabler/icons-react` icons; `@emotion/react` styling as in existing pages
- Tables: react-data-table-component (+ extensions for export); Excel export via `react-html-table-to-excel`; print via `react-to-print` (`formPrinter.tsx`)
- Alerts/confirmations: sweetalert2, matching existing usage
- Dates: dayjs + `@mantine/dates`

## Verification before handoff

- `npx tsc --noEmit` in `client/` — the real build runs `tsc &&
  vite build`, so type errors are ship-blockers
- Confirm the generated hook exists in `__generated__/graphql.ts` for every new operation
- Write `_workspace/{phase}_frontend_summary.md`: operations added, pages/routes added, slices added
