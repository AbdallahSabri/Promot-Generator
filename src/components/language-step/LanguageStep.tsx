'use client';

import type { Language } from '@/lib/types';
import { Button } from '@/components/ui';

const OPTIONS: { id: Language; native: string; english: string; flag: string }[] = [
  { id: 'en', native: 'English', english: 'English', flag: '🇬🇧' },
  { id: 'ar', native: 'العربية', english: 'Arabic', flag: '🇸🇦' },
];

interface Props {
  selected: Language[];
  onChange: (languages: Language[]) => void;
  onNext: () => void;
}

export function LanguageStep({ selected, onChange, onNext }: Props) {
  function toggle(lang: Language) {
    onChange(
      selected.includes(lang) ? selected.filter((l) => l !== lang) : [lang],
      // selected.includes(lang) ? selected.filter((l) => l !== lang) : [...selected, lang], // revert them later
    );
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-slate-900">AI Prompt Generator</h1>
        <p className="text-slate-500">
          Choose the language(s) your prompt should be generated in.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        {OPTIONS.map(({ id, native, english, flag }) => {
          const active = selected.includes(id);
          return (
            <button
              key={id}
              type="button"
              onClick={() => {
                toggle(id);
                onNext();
              }}
              aria-pressed={active}
              className={`flex w-48 flex-col items-center gap-2 rounded-2xl border-2 px-6 py-8 text-center transition-all ${
                active
                  ? 'border-indigo-600 bg-indigo-50 shadow-md'
                  : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/30'
              }`}
            >
              <span className="text-4xl">{flag}</span>
              <span
                className="text-xl font-semibold text-slate-900"
                dir={id === 'ar' ? 'rtl' : 'ltr'}
              >
                {native}
              </span>
              <span className="text-sm text-slate-500">{english}</span>
              {active && (
                <span className="mt-1 rounded-full bg-indigo-600 px-2 py-0.5 text-xs font-medium text-white">
                  Selected
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/*<Button onClick={onNext} disabled={selected.length === 0} size="lg">*/}
      {/*  Continue →*/}
      {/*</Button>*/}
    </div>
  );
}
