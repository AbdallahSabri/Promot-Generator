'use client';

import { categories } from '@/config';
import type { Language } from '@/lib/types';
import { Button } from '@/components/ui';

interface Props {
  language: Language;
  selectedId: string | null;
  onSelect: (id: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function CategoryStep({ language, selectedId, onSelect, onNext, onBack }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900">Choose a category</h2>
        <p className="text-slate-500">What type of marketing content do you need?</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => {
          const active = selectedId === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                onSelect(cat.id);
                onNext();
              }}
              aria-pressed={active}
              dir={language === 'ar' ? 'rtl' : 'ltr'}
              className={`rounded-2xl border-2 p-5 text-start transition-all ${
                active
                  ? 'border-indigo-600 bg-indigo-50 shadow-md'
                  : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/30'
              }`}
            >
              {cat.icon && <span className="text-3xl">{cat.icon}</span>}
              <p className="mt-2 font-semibold text-slate-900">{cat.label[language]}</p>
              {cat.description && (
                <p className="mt-1 text-sm text-slate-500">{cat.description[language]}</p>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        <Button variant="ghost" onClick={onBack}>
          ← Back
        </Button>
        {/*<Button onClick={onNext} disabled={!selectedId}>*/}
        {/*  Continue →*/}
        {/*</Button>*/}
      </div>
    </div>
  );
}
