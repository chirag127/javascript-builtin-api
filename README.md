# JavaScript Built-ins

Every JavaScript built-in MDN tracks — 94 objects, namespaces and global functions covering 929 members — with a one-paragraph description, its member names, the ECMAScript anchor and first-support versions for Chrome, Firefox, Safari, Edge and Node.js.

No authentication. No server. No rate limit. The committed JSON is the database.

    curl https://chirag127.github.io/javascript-builtin-api/api/v1/data.json

## What you get

| Field | Example | Notes |
| --- | --- | --- |
| `id` / `name` | `"Intl.DateTimeFormat"` | Dotted path in the global object; the same in both fields. |
| `kind` | `"class"` | MDN page type: 71 `class`, 11 `function`, 7 `namespace`, 4 `global-property`, 1 `unknown`. |
| `description` | `"The Array object … enables storing a collection of multiple items…"` | First paragraph of the MDN page. `null` for `Intl.Segments`, which has no page yet. |
| `memberCount` / `members` | `47` / `["at","concat",…]` | Names only, straight from browser-compat-data. No per-member support or description. |
| `status` | `"standard"` | 91 `standard`, 2 `deprecated` (`escape`, `unescape`), 1 `nonstandard` (`InternalError`). |
| `support.chrome.added` | `"1"` | First version, `false` when unsupported, `null` when unrecorded. Same shape for `nodejs`. |
| `specUrl` | `["https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array-objects"]` | Where the built-in is defined. |
| `mdnUrl` | `"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array"` | Where the description came from. |

## Endpoints

| Endpoint | Description | Size |
| --- | --- | --- |
| `/api/v1/data.json` | All 94 records, in name order | 112,430 bytes |
| `/api/v1/individual/{id}.json` | One record, e.g. `/api/v1/individual/Array.json` | 747–1,940 bytes each |
| `/api/v1/search-index.json` | The same records keyed by `id`, for a single-fetch lookup | 122,473 bytes |
| `/api/v1/meta.json` | Record count, source, retrieval time | 556 bytes |

## Data source and accuracy

Browser support, status, member names and spec links come from MDN browser-compat-data. BCD no longer ships a single `javascript/builtins.json` — the directory of one file per built-in is read instead, plus the two levels under `Intl` and `Temporal`, at commit `07c6595` (2026-11-10). 94 records, 929 members.

Descriptions are the first paragraph of the matching MDN page, fetched 2026-11-10 at commit `3116241`; markup and links are stripped, the wording is not otherwise edited.

Licences: browser-compat-data is CC0 1.0. MDN prose is CC-BY-SA 2.5 (© Mozilla and MDN contributors).

## Limits, stated plainly

- Members are names only. `Array.prototype.map` appears in `members`, but has no support data, syntax or description of its own here.
- Only what browser-compat-data tracks. Web APIs (DOM, `fetch`), Node-only globals and proposal-stage syntax are not in this dataset.
- `added` is the first *engine* version, not the first specification edition — a feature can be ES2015 and Chrome 45.
- `Intl.Segments` has no MDN page yet, so its `description` is `null` and its `kind` is `"unknown"` rather than a guess.
- `nonstandard` covers `InternalError`, which Firefox ships and the standard does not define. `deprecated` covers `escape` and `unescape`, still shipped everywhere.

## Contract

[openapi.yaml](./openapi.yaml) describes all four endpoints. The record type:

```ts
type JsBuiltin = {
  id: string;                 // "Intl.DateTimeFormat"
  name: string;
  kind: 'class' | 'function' | 'namespace' | 'global-property' | 'unknown';
  description: string | null;
  status: 'standard' | 'experimental' | 'nonstandard' | 'deprecated' | 'obsolete';
  memberCount: number;
  members: string[];
  specUrl: string[];
  mdnUrl: string | null;
  support: Record<'chrome' | 'firefox' | 'safari' | 'edge' | 'nodejs',
                   { added: string | boolean | null; removed: string | null }>;
};
```

## Licence

Code: MIT — see [LICENSE](./LICENSE). Data: browser-compat-data is CC0 1.0; MDN prose is [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/), © Mozilla and MDN contributors.

---

## About the author

**Chirag Singhal** — building free, open APIs and tools. Everything here is free, no
authentication, no rate limits, no telemetry. If it saves you time and you want to work
together, that is exactly what this is for.

- **Email — the fastest way to reach me:** [chirag@oriz.in](mailto:chirag@oriz.in)
- **GitHub:** [github.com/chirag127](https://github.com/chirag127)
- **LinkedIn:** [linkedin.com/in/chirag127](https://www.linkedin.com/in/chirag127/)
- **X:** [x.com/singhal127](https://x.com/singhal127)
- **YouTube:** [@ChiragSinghal127](https://www.youtube.com/@ChiragSinghal127)
- **Instagram:** [chiragsinghal127](https://www.instagram.com/chiragsinghal127/)
- **Reddit:** [Far_Macaron_9910](https://www.reddit.com/user/Far_Macaron_9910/)
- **Buy me a coffee:** [buymeacoffee.com/chirag127](https://buymeacoffee.com/chirag127)

**Hiring?** I build developer tooling, data APIs and web platforms. Email me — I reply to
everything.
