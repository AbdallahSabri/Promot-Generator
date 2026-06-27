# Category File Standard

This folder holds one **category** per file. Each category powers a guided prompt builder: a set of questions the user answers, plus a bilingual template that assembles the answers into a final prompt. Follow this standard for every new category file.

## File rules

- **One category per file.** File name is the category `id` in `kebab-case` (e.g. `product-video-production.ts`).
- **Language:** TypeScript, typed against the shared `Category` type.
- **Bilingual everywhere:** every user-facing string is an object `{ en, ar }`. Never ship a label, option, help, placeholder, or template in only one language.
- **Default export** is the category object; the `const` is `camelCase` of the id.

```ts
import type { Category } from '@/lib/types';

const productVideoProduction: Category = {
  /* ... */
};

export default productVideoProduction;
```

## Category shape

| Field | Type | Required | Notes |
|---|---|---|---|
| `id` | `string` | yes | `kebab-case`, must match the file name. |
| `label` | `{ en, ar }` | yes | Short display name. |
| `description` | `{ en, ar }` | yes | One sentence on what the category produces. |
| `icon` | `string` | yes | A single emoji. |
| `questions` | `Question[]` | yes | Ordered; rendered top to bottom. |
| `templates` | `{ en, ar }` | yes | Prompt templates with `{{placeholders}}`. |

## Question shape

| Field | Type | Required | Applies to | Notes |
|---|---|---|---|---|
| `id` | `string` | yes | all | `snake_case`. Used as `{{id}}` in templates. Unique within the category. |
| `type` | `'single' \| 'multi' \| 'text' \| 'toggle'` | yes | all | See types below. |
| `label` | `{ en, ar }` | yes | all | The question text. May be `''` when the UI shows it differently (rare). |
| `options` | `Option[]` | yes for `single`/`multi` | choice types | The selectable answers. |
| `required` | `boolean` | no | all | Defaults to falsy. |
| `default` | `string \| string[]` | no | all | `string` for `single`/`text`/`toggle`; `string[]` for `multi`. |
| `help` | `{ en, ar }` | no | all | Guidance shown under the label. Use it to explain *why* a choice matters. |
| `placeholder` | `{ en, ar }` | no | `text` | Example input. |
| `joinWith` | `{ en, ar }` | no | `multi` | Connector when multiple values are rendered (e.g. `{ en: ' and ', ar: ' و ' }`). |
| `maxSelect` | `number` | no | `multi` | Cap on selections. |

### Question types

- **`single`** — one choice from `options`. Provide a `default`.
- **`multi`** — many choices from `options`. `default` is an array; `maxSelect` and `joinWith` are optional.
- **`text`** — free text. Provide a `placeholder`. May also carry a swatch-style `options` list (see color pattern below).
- **`toggle`** — boolean. `default: true | false`.

## Option shape

```ts
{ id: 'low_key', label: { en: 'low-key dramatic light', ar: 'إضاءة منخفضة المفتاح درامية' } }
```

| Field | Type | Required | Notes |
|---|---|---|---|
| `id` | `string` | yes | Stable value substituted into the template. |
| `label` | `{ en, ar }` | yes | Display text. |
| `description` | `{ en, ar }` | no | Longer explanation shown with the option (e.g. lens feel). |
| `color` | `string` | no | Hex swatch, for color-picker style `text` questions. |

### Color / swatch pattern (optional)

For an exact-color `text` question, attach `options` where each carries a `color` hex and a short `label`. Keep an `IMG` / "from attached image" option first so users can defer to a reference photo:

```ts
{
  id: 'product_color',
  type: 'text',
  options: [
    { id: 'from attached image', color: '#1C1C1C', label: { en: 'IMG', ar: 'من الصورة' } },
    { id: 'Red (#C0392B)',        color: '#C0392B', label: { en: 'Red', ar: 'أحمر' } },
    // ...
  ],
  label: { en: 'Exact brand color (hex / Pantone)', ar: 'لون العلامة الدقيق (Hex / Pantone)' },
  help: { en: '...', ar: '...' },
  placeholder: { en: 'e.g. #C8102E…', ar: 'مثال: #C8102E…' },
  required: true,
}
```

## Templates

- Two keys: `en` and `ar`. Both must exist and cover the same placeholders.
- Reference an answer with `{{question_id}}` — the id of the question, not the option.
- Every question id used in the template must exist in `questions`, and every important question should appear in the template.
- Keep a closing **Constraints** line for production categories (what must stay fixed across a campaign).
- Mirror the English structure in Arabic; do not translate placeholder names.

```ts
templates: {
  en: `Act as {{role}}.
... {{product_color}} ...`,
  ar: `تصرّف بصفتك {{role}}.
... {{product_color}} ...`,
}
```

## Conventions

- Group questions with section comment banners in source order, e.g.
  `// ── 1. Product fidelity ───────────────────────────────`.
- Order questions logically: role → subject/identity → fidelity → scene → lighting → motion → camera → brand → engine.
- Arabic strings are real translations, not transliterations.
- IDs (`id`, option ids, question ids) are English `snake_case`/`kebab-case` regardless of language.

## Registering a new category

After creating the file, the category must be added to the category registry/index that imports and lists all categories (outside this folder, e.g. a parent `config` index). Import the default export and include it in the exported list, following the existing pattern.

> Note: the registry file lives outside this folder and isn't covered by this standard. Confirm the exact import location in the parent `config` directory when adding a new category.

## New-category checklist

- [ ] File named `<id>.ts`, `id` in `kebab-case`, matches the file name.
- [ ] `label`, `description` (one sentence), and `icon` (emoji) set, all bilingual.
- [ ] Every string is `{ en, ar }` with a real Arabic translation.
- [ ] Questions ordered and grouped with section banners.
- [ ] `single`/`multi` questions have `options` and a sensible `default`.
- [ ] `text` questions have a `placeholder`; `toggle` questions have a `default`.
- [ ] `templates.en` and `templates.ar` exist, mirror each other, and only use existing question ids.
- [ ] Default export named `camelCase` of the id.
- [ ] Category registered in the parent index.

## Reference

`ai-video-production.ts` and `product-video-production.ts` are the most complete examples — copy their structure for any new production-style category.
