---
name: verify
description: Runtime verification recipe for the DHT stack — how to launch server + client locally and drive them for end-to-end evidence.
---

# DHT verify recipe

## Backend (GraphQL surface)

- `server/.env`: PORT=3001, MONGO_URL=mongodb://127.0.0.1:27017/, DB=dht (local Mongo — safe to seed/test).
- Start: `cd server && node index.js` (background). Ready when log shows `🚀 Server ready at http://localhost:3001/`.
- Auth: JWT in `token` **header** (not Authorization). Get one via `LoginAction(username, password){ token }`.
- Users collection: `t_User_Users`, fields `Uid, Pwd (bcryptjs, salt 12), Role, Company, LogCount, Active`.
- Seeded test accounts (local db only): `testadmin` / `teststaff`, password `Test@1234`, roles `admin` / `staff`.
- Drive with a node script using `fetch` POST `{query, variables}` — cleaner than curl quoting on Windows.

## Frontend (GUI surface)

- `client/src/client/client.ts` hardcodes the prod URL; temporarily swap the commented `localhost:3001` line, **revert after**.
- Start: `cd client && npx vite --port 5199 --strictPort` (background). First page compile can take >30s — use Playwright `waitUntil: 'domcontentloaded', timeout: 120000` and wait for a selector.
- Login page selectors: placeholder `Tài khoản`, placeholder `Mật khẩu`, button `Đăng nhập`. Successful login navigates to `/quantityCompanyWaterSupply` and sets localStorage `Uid/token/Company/Role`.
- Playwright is not a repo dep — `npm i playwright && npx playwright install chromium` in the scratchpad, run scripts from there.

## Gotchas

- Bash tool cwd persists between calls — don't repeat `cd server`.
- `UpdateActiveUser` mutation fires on every page load (heartbeat) — expect it in network traffic and in ActivityLog MUTATION rows.
