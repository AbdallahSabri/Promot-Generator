'use client';

import { useState } from 'react';
import type { Category, Language, Answers, AnswerValue } from '@/lib/types';
import { Toggle, Button } from '@/components/ui';

interface Props {
  category: Category;
  language: Language;
  initialAnswers?: Answers;
  onSubmit: (answers: Answers) => void;
  onBack: () => void;
  onReset: () => void;
}

function buildDefaults(category: Category, initialAnswers: Answers): Answers {
  const defaults: Answers = {};
  for (const q of category.questions) {
    if (q.default !== undefined) defaults[q.id] = q.default;
  }
  return { ...defaults, ...initialAnswers };
}

function isEmpty(val: AnswerValue | undefined): boolean {
  return val === undefined || val === '' || (Array.isArray(val) && val.length === 0);
}

export function QuestionForm({ category, language, initialAnswers = {}, onSubmit, onBack, onReset }: Props) {
  const [answers, setAnswers] = useState<Answers>(() => buildDefaults(category, initialAnswers));
  const [attempted, setAttempted] = useState(false);
  const isRtl = language === 'ar';

  function set(id: string, value: AnswerValue) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function toggleMulti(id: string, optionId: string) {
    const current = (answers[id] as string[] | undefined) ?? [];
    const next = current.includes(optionId)
      ? current.filter((v) => v !== optionId)
      : [...current, optionId];
    set(id, next);
  }

  function toggleTextOption(id: string, optId: string) {
    const current = (answers[id] as string) ?? '';
    const parts = current ? current.split(', ') : [];
    const next = parts.includes(optId)
      ? parts.filter((p) => p !== optId).join(', ')
      : [...parts, optId].join(', ');
    set(id, next);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAttempted(true);
    const hasErrors = category.questions
      .filter((q) => q.required)
      .some((q) => isEmpty(answers[q.id]));
    if (!hasErrors) onSubmit(answers);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900">{category.label[language]}</h2>
        <p className="text-slate-500">Answer a few questions to generate your prompt.</p>
      </div>

      <div className="flex flex-col gap-6">
        {category.questions.map((q) => {
          const label = q.label[language];
          const help = q.help?.[language];
          const showError = attempted && q.required && isEmpty(answers[q.id]);

          return (
            <fieldset key={q.id} className="flex flex-col gap-2">
              <legend className="text-sm font-semibold text-slate-800">
                {label}
                {q.required && <span className="ms-1 text-red-500">*</span>}
              </legend>
              {help && <p className="text-xs text-slate-500">{help}</p>}

              {q.type === 'toggle' && (
                <Toggle
                  checked={Boolean(answers[q.id])}
                  onChange={(v) => set(q.id, v)}
                  id={q.id}
                />
              )}

              {q.type === 'single' && (
                <>
                  <div className="flex flex-wrap gap-2">
                    {(q.options ?? []).map((opt) => {
                      const active = answers[q.id] === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => set(q.id, opt.id)}
                          aria-pressed={active}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm transition-colors ${
                            active
                              ? 'border-indigo-600 bg-indigo-600 text-white'
                              : 'border-slate-300 text-slate-700 hover:border-indigo-400'
                          }`}
                        >
                          {opt.color && (
                            <span
                              className="inline-block h-3.5 w-3.5 shrink-0 rounded-full ring-1 ring-black/20"
                              style={{ backgroundColor: opt.color }}
                            />
                          )}
                          {opt.label[language]}
                        </button>
                      );
                    })}
                  </div>
                  {(() => {
                    const selected = q.options?.find((opt) => opt.id === answers[q.id]);
                    const description = selected?.description?.[language];
                    return description ? (
                      <p className="text-xs text-slate-500">{description}</p>
                    ) : null;
                  })()}
                  {answers[q.id] === 'text_only' && (
                    <textarea
                      rows={3}
                      value={(answers[`${q.id}_description`] as string) ?? ''}
                      onChange={(e) => set(`${q.id}_description`, e.target.value)}
                      placeholder={
                        language === 'ar'
                          ? 'أدخل وصفًا نصيًا للمنتج…'
                          : 'Describe the subject in detail…'
                      }
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  )}
                </>
              )}

              {q.type === 'multi' && (
                <>
                  {q.maxSelect && (
                    <p className="text-xs text-slate-500">
                      {language === 'ar'
                        ? `اختر ما يصل إلى ${q.maxSelect}`
                        : `Pick up to ${q.maxSelect}`}
                      {` (${((answers[q.id] as string[]) ?? []).length}/${q.maxSelect})`}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {(q.options ?? []).map((opt) => {
                      const selected = ((answers[q.id] as string[]) ?? []).includes(opt.id);
                      const atMax =
                        q.maxSelect !== undefined &&
                        ((answers[q.id] as string[]) ?? []).length >= q.maxSelect;
                      const disabled = !selected && atMax;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => !disabled && toggleMulti(q.id, opt.id)}
                          aria-pressed={selected}
                          disabled={disabled}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm transition-colors ${
                            selected
                              ? 'border-indigo-600 bg-indigo-600 text-white'
                              : disabled
                                ? 'cursor-not-allowed border-slate-200 text-slate-300'
                                : 'border-slate-300 text-slate-700 hover:border-indigo-400'
                          }`}
                        >
                          {opt.color && (
                            <span
                              className="inline-block h-3.5 w-3.5 shrink-0 rounded-full ring-1 ring-black/20"
                              style={{ backgroundColor: opt.color }}
                            />
                          )}
                          {opt.label[language]}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}

              {q.type === 'text' && (
                <>
                  <div className="flex flex-wrap gap-2">
                    {(q.options ?? []).map((opt) => {
                      const active = ((answers[q.id] as string) ?? '').split(', ').includes(opt.id);
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => toggleTextOption(q.id, opt.id)}
                          aria-pressed={active}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm transition-colors ${
                            active
                              ? 'border-indigo-600 bg-indigo-600 text-white'
                              : 'border-slate-300 text-slate-700 hover:border-indigo-400'
                          }`}
                        >
                          {opt.color && (
                            <span
                              className="inline-block h-3.5 w-3.5 shrink-0 rounded-full ring-1 ring-black/20"
                              style={{ backgroundColor: opt.color }}
                            />
                          )}
                          {opt.label[language]}
                        </button>
                      );
                    })}
                  </div>
                <textarea
                  id={q.id}
                  rows={3}
                  value={(answers[q.id] as string) ?? ''}
                  onChange={(e) => set(q.id, e.target.value)}
                  placeholder={q.placeholder?.[language]}
                  aria-describedby={showError ? `${q.id}-error` : undefined}
                  className={`w-full rounded-lg border px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 ${
                    showError
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
                      : 'border-slate-300 focus:border-indigo-500 focus:ring-indigo-500'
                  }`}
                />
                </>
              )}

              {showError && (
                <p id={`${q.id}-error`} role="alert" className="text-xs text-red-600">
                  This field is required.
                </p>
              )}
            </fieldset>
          );
        })}
      </div>

      <div className="flex gap-3">
        <Button type="button" variant="ghost" onClick={onBack}>
          ← Back
        </Button>
        <Button type="submit">Generate Prompt →</Button>
        <Button variant="secondary" onClick={onReset}>
          Start Over
        </Button>
      </div>
    </form>
  );
}
