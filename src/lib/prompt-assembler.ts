import type { Category, Answers, Language, Question, AnswerValue } from './types';

function resolveValue(
  value: AnswerValue | undefined,
  question: Question | undefined,
  language: Language,
): string {
  if (value === undefined || value === null) return '';

  // toggle: true → inject localized question label; false → omit
  if (typeof value === 'boolean') {
    if (!value) return '';
    return question?.label[language] ?? '';
  }

  // multi: map IDs to localized option labels
  if (Array.isArray(value)) {
    if (value.length === 0) return '';
    const separator = question?.joinWith ? question.joinWith[language] : ', ';
    if (question?.options) {
      return value
        .map((id) => question.options!.find((o) => o.id === id)?.label[language] ?? id)
        .join(separator);
    }
    return value.join(separator);
  }

  // single: resolve ID to localized option label
  if (question?.options) {
    const opt = question.options.find((o) => o.id === value);
    if (opt) return opt.label[language];
  }

  // text: raw input
  return value;
}

export function assemblePrompt(category: Category, answers: Answers, language: Language): string {
  const questionMap = new Map(category.questions.map((q) => [q.id, q]));
  const template = category.templates[language];
  const raw = template.replace(/\{\{(\w+)\}\}/g, (_, key: string) =>
    resolveValue(answers[key], questionMap.get(key), language),
  );
  // Collapse 3+ consecutive newlines to 2 so empty toggle/multi lines don't leave gaps
  return raw.replace(/\n{3,}/g, '\n\n').trim();
}
