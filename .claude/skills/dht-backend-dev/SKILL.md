---
name: dht-backend-dev
description: Server-side development conventions for the DHT water-monitoring system - how to add or change GraphQL types, resolvers, MongoDB models in server/, and upload endpoints in server-upload/. MUST be used for any change under server/ or server-upload/, including new queries/mutations, schema edits, new collections, data fixes, or upload handling. Also applies to follow-up requests like "update the resolver", "add a field", "fix the mutation".
---

# DHT Backend Development

## Architecture

```
server/
├── index.js                 Apollo Server 5 on Express 5, port from .env (default 3001)
├── db/connect.js            ConnectDB.Connect class - the only MongoDB entry point
├── schema/
│   ├── typeDefs.js          ONE file, all SDL in a gql`` template
│   └── resolvers/
│       ├── index.js         merges all *.resolver.js
│       └── {Entity}.resolver.js
└── models/{Entity}.model.js one file per collection

server-upload/               separate Express 4 REST service (multer uploads)
├── routers/ → controllers/ → models/
```

Strict layering: **resolver → model → MongoDB**. Resolvers never touch the driver. Models never import resolver code. This keeps resolvers thin pass-throughs and makes shapes auditable.

Everything is **CommonJS** (`require` / `module.exports`). No ESM, no TS on the server — `pkg` packaging (node18-win-x64) depends on static requires.

## Adding a new entity (full recipe)

Work in this order — the SDL is the contract, so it goes first:

### 1. typeDefs.js

Add type + input + Query/Mutation fields inside the existing gql template. Follow existing naming exactly:

- Type/field names: PascalCase (`DeviceStatus`, `Serial`, `ReceiptDate`)
- Queries: `GetAll{Entity}`, `Get{Entity}ById`, …
- Mutations: `Insert{Entity}`, `Update{Entity}`, `Delete{Entity}`
- Inputs: `{Entity}Input` / `{Entity}UpdateInput`
- `Date` custom scalar already exists — use it for dates

### 2. models/{Entity}.model.js

Template (mirrors every existing model):

```js
const ConnectDB = require('../db/connect');
const { ObjectId } = require('mongodb');

const {Entity}Collection = 't_{Area}_{Entities}'; // e.g. t_Devices_Loggers

module.exports.{Entity} = class {Entity} {
    constructor(FieldA, FieldB) {
        this.FieldA = FieldA;
        this.FieldB = FieldB;
    }
};

module.exports.GetAll = async () => {
    let Connect = new ConnectDB.Connect();
    let collection = await Connect.connect({Entity}Collection);
    return await collection.find().sort({ FieldA: 1 }).toArray();
};
```

Collection naming: `t_{Area}_{Plural}` — check `db`/existing models for the real collection name before inventing one; many collections already exist in the shared database.

Document fields are PascalCase and must match the SDL field names one-to-one — GraphQL default resolvers map them directly, there is no mapping layer.

### 3. schema/resolvers/{Entity}.resolver.js

Thin delegation only:

```js
const {Entity}Model = require('../../models/{Entity}.model');

module.exports = {
    Query: {
        GetAll{Entity}: async (parent, {}, context, info) =>
            await {Entity}Model.GetAll(),
    },
    Mutation: {
        Insert{Entity}: async (parent, { entity }, context, info) =>
            await {Entity}Model.Insert(entity),
    },
};
```

### 4. resolvers/index.js

Register the new resolver in the merge. Forgetting this compiles fine and fails at runtime with "Cannot return null for non-nullable field" or missing-resolver errors — always verify registration.

## Changing an existing entity

1. Read the current model + resolver + SDL section for that entity first.
2. SDL change → check `client/src/graphql/*.graphql` for operations selecting the affected fields. Renaming or removing a field that an operation uses breaks the client at codegen time. If a client operation is affected, flag it — don't silently break it.
3. `_id` handling: MongoDB `_id` is `ObjectId`; SDL sometimes declares it `String!` (e.g. `Site`) and sometimes `ID!`. Match whatever the existing type declares; convert with `new ObjectId(id)` in the model when querying by id.

## server-upload service

Separate process (Express 4, own `.env`, own db config in `config/`). Pattern: `routers/{x}.router.js` → `controllers/{x}.controller.js` → `models/{x}.model.js`, multer for multipart, files land under `public/`. `express-async-errors` is loaded — controllers may throw; don't wrap everything in try/catch.

Only touch this service for file upload/download features (`MeterFile`, `SiteFile`).

## Verification before handoff

- `node -e "require('./schema/typeDefs')"` in `server/` — catches SDL syntax errors instantly
- `node -e "require('./schema/resolvers')"` — catches broken requires / registration
- Start locally with `pnpm start` (nodemon) if a live check is needed; port 3001
- Write the contract summary to `_workspace/` (see agent protocol) so frontend/QA get the field list without re-reading the SDL
