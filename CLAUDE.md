# CLAUDE.md

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **React 19**
- **Tailwind CSS v4** (configured via `globals.css`, no `tailwind.config.js`)
- **ESLint** (Next.js recommended) · **Prettier** + `prettier-plugin-tailwindcss`
- **pnpm** package manager

## Scripts

```
pnpm dev       # Turbopack dev server
pnpm build     # Production build
pnpm lint      # ESLint
pnpm format    # Prettier (write)
```

## Project Purpose

AI Prompt Generator for marketers. Fully client-side wizard (no backend):
1. Select output language(s): English / Arabic / both
2. Pick a content category
3. Answer structured questions (toggle / single-select / multi-select / free text)
4. View the assembled prompt as plain text (no AI API call in v1)

## Architecture

Config-driven: adding a category means adding one file in `src/config/categories/` and
importing it in `src/config/index.ts`. No code changes elsewhere.

## Key paths

| Path | Role |
|---|---|
| `src/lib/types.ts` | All shared TypeScript types |
| `src/lib/prompt-assembler.ts` | `{{placeholder}}` template renderer |
| `src/lib/validation.ts` | Runtime category config validation |
| `src/config/categories/` | One file per category |
| `src/config/index.ts` | Category registry (validates at load) |
| `src/hooks/useWizard.ts` | Wizard state machine |
| `src/components/ui/` | Button, Toggle primitives |
| `src/app/page.tsx` | Wizard orchestrator (single-page) |

## Adding a new category

1. Create `src/config/categories/<id>.ts` — export a `Category` object matching the type.
2. Import it in `src/config/index.ts` and add to the `raw` array.
3. Templates use `{{questionId}}` placeholders — one each for `en` and `ar`.

## RTL

Arabic output is rendered with `dir="rtl"`. Question forms flip direction when
`primaryLanguage === 'ar'`. The `[dir="rtl"]` selector in `globals.css` sets an
appropriate system font stack.
