import type { Category, Question, Option, LocalizedText } from './types';

const QUESTION_TYPES = new Set(['toggle', 'single', 'multi', 'text']);

function assertString(val: unknown, path: string): asserts val is string {
  if (typeof val !== 'string') throw new Error(`${path} must be a string`);
}

function assertLocalizedText(val: unknown, path: string): asserts val is LocalizedText {
  if (!val || typeof val !== 'object') throw new Error(`${path} must be an object`);
  const o = val as Record<string, unknown>;
  assertString(o.en, `${path}.en`);
  assertString(o.ar, `${path}.ar`);
}

function validateOption(val: unknown, path: string): Option {
  if (!val || typeof val !== 'object') throw new Error(`${path} must be an object`);
  const o = val as Record<string, unknown>;
  assertString(o.id, `${path}.id`);
  assertLocalizedText(o.label, `${path}.label`);
  return o as unknown as Option;
}

function validateQuestion(val: unknown, path: string): Question {
  if (!val || typeof val !== 'object') throw new Error(`${path} must be an object`);
  const q = val as Record<string, unknown>;
  assertString(q.id, `${path}.id`);
  if (!QUESTION_TYPES.has(q.type as string))
    throw new Error(`${path}.type must be one of: ${[...QUESTION_TYPES].join(', ')}`);
  assertLocalizedText(q.label, `${path}.label`);
  if (q.help !== undefined) assertLocalizedText(q.help, `${path}.help`);
  if (q.placeholder !== undefined) assertLocalizedText(q.placeholder, `${path}.placeholder`);
  if (q.options !== undefined) {
    if (!Array.isArray(q.options)) throw new Error(`${path}.options must be an array`);
    q.options = (q.options as unknown[]).map((o, i) => validateOption(o, `${path}.options[${i}]`));
  }
  // `default` is an optional AnswerValue — pass through as-is; callers are responsible for type correctness
  return q as unknown as Question;
}

export function validateCategory(raw: unknown): Category {
  if (!raw || typeof raw !== 'object') throw new Error('Category must be an object');
  const c = raw as Record<string, unknown>;
  assertString(c.id, 'Category.id');
  assertLocalizedText(c.label, 'Category.label');
  if (c.description !== undefined) assertLocalizedText(c.description, 'Category.description');
  if (!Array.isArray(c.questions)) throw new Error('Category.questions must be an array');
  c.questions = (c.questions as unknown[]).map((q, i) => validateQuestion(q, `questions[${i}]`));
  if (!c.templates || typeof c.templates !== 'object')
    throw new Error('Category.templates must be an object');
  const t = c.templates as Record<string, unknown>;
  assertString(t.en, 'templates.en');
  assertString(t.ar, 'templates.ar');
  return c as unknown as Category;
}
