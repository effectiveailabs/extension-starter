# extension-starter

Minimal Chrome MV3 side-panel extension scaffold for building against the
EffectiveAI public API.

## Prerequisites

- Node 20+
- pnpm 9+
- Chrome / Chromium

## Setup

```bash
pnpm install
cp .env.example .env   # then paste your API key
pnpm dev
```

`pnpm dev` runs `openapi-ts` first to generate `src/api-client/` from the
public OpenAPI spec at
`https://effectiveai-staging.app/api/v1/swagger-v1.json`, then starts Vite
with HMR.

## Load the extension in Chrome

1. `pnpm build` (or `pnpm dev` — both write to `dist/`)
2. Open `chrome://extensions`
3. Toggle **Developer mode**
4. Click **Load unpacked** and select the `dist/` folder

The extension ID is pinned via `manifest.key` so it stays the same on
every machine that loads this unpacked. Click the toolbar icon to open
the side panel.

## Reference

- API docs (Swagger UI): <https://effectiveai-staging.app/api/v1/docs>
- OpenAPI spec: <https://effectiveai-staging.app/api/v1/swagger-v1.json>
- Auth: `Authorization: Bearer <EFFECTIVE_API_KEY>`

## Layout

```
src/
├── api-client/       # generated from the OpenAPI spec (do not edit)
├── background/       # service worker
├── content-script/   # runs in page context
├── panel/            # side panel UI
└── manifest.ts       # MV3 manifest (pinned key)
```
