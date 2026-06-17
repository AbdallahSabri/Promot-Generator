'use client';

import { useState } from 'react';
import type { Category, Answers, Language } from '@/lib/types';
import { assemblePrompt } from '@/lib/prompt-assembler';
import { Button } from '@/components/ui';

interface Props {
  category: Category;
  answers: Answers;
  languages: Language[];
  onBack: () => void;
  onReset: () => void;
}

export function ResultView({ category, answers, languages, onBack, onReset }: Props) {
  const [copied, setCopied] = useState<Language | null>(null);
  const [copyFailed, setCopyFailed] = useState<Language | null>(null);
  const [edits, setEdits] = useState<Partial<Record<Language, string>>>({});

  function getText(lang: Language) {
    return edits[lang] ?? assemblePrompt(category, answers, lang);
  }

  async function copy(lang: Language) {
    try {
      await navigator.clipboard.writeText(getText(lang));
      setCopied(lang);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopyFailed(lang);
      setTimeout(() => setCopyFailed(null), 2000);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900">Your Generated Prompt</h2>
        <p className="text-slate-500">Edit the prompt below, then copy it into your favourite AI tool.</p>
      </div>

      <div className="flex flex-col gap-6">
        {languages.map((lang) => {
          const isRtl = lang === 'ar';
          return (
            <div key={lang} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                <span className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {lang === 'en' ? '🇬🇧 English' : '🇸🇦 Arabic'}
                </span>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => copy(lang)}
                >
                  {copied === lang ? '✓ Copied!' : copyFailed === lang ? '✗ Failed' : 'Copy'}
                </Button>
              </div>
              <textarea
                dir={isRtl ? 'rtl' : 'ltr'}
                value={getText(lang)}
                onChange={(e) => setEdits((prev) => ({ ...prev, [lang]: e.target.value }))}
                rows={10}
                className={`w-full resize-y rounded-b-2xl px-4 py-4 text-sm leading-relaxed text-slate-800 outline-none focus:ring-2 focus:ring-inset focus:ring-slate-300 ${isRtl ? 'font-arabic text-right' : ''}`}
              />
            </div>
          );
        })}
      </div>

      <div className="flex gap-3">
        <Button variant="ghost" onClick={onBack}>
          ← Edit Answers
        </Button>
        <Button variant="secondary" onClick={onReset}>
          Start Over
        </Button>
      </div>
    </div>
  );
}
