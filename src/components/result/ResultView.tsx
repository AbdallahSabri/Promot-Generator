'use client';

import { useState } from 'react';
import type { Category, Answers } from '@/lib/types';
import { assemblePrompt } from '@/lib/prompt-assembler';
import { Button } from '@/components/ui';

type CopyKey = 'en' | 'ar' | 'both';
type CopyStatus = 'idle' | 'copied' | 'failed';

interface Props {
  category: Category;
  answers: Answers;
  onBack: () => void;
  onReset: () => void;
}

const LANGS = [
  { id: 'en' as const, label: '🇬🇧 English', rtl: false },
  { id: 'ar' as const, label: '🇸🇦 Arabic', rtl: true },
];

export function ResultView({ category, answers, onBack, onReset }: Props) {
  const [edits, setEdits] = useState<Partial<Record<'en' | 'ar', string>>>({});
  const [copyStatus, setCopyStatus] = useState<Record<CopyKey, CopyStatus>>({
    en: 'idle',
    ar: 'idle',
    both: 'idle',
  });

  function getText(lang: 'en' | 'ar') {
    return edits[lang] ?? assemblePrompt(category, answers, lang);
  }

  async function copy(key: CopyKey, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus((s) => ({ ...s, [key]: 'copied' }));
      setTimeout(() => setCopyStatus((s) => ({ ...s, [key]: 'idle' })), 2000);
    } catch {
      setCopyStatus((s) => ({ ...s, [key]: 'failed' }));
      setTimeout(() => setCopyStatus((s) => ({ ...s, [key]: 'idle' })), 2000);
    }
  }

  function copyLabel(key: CopyKey, defaultLabel: string) {
    if (copyStatus[key] === 'copied') return '✓ Copied!';
    if (copyStatus[key] === 'failed') return '✗ Failed';
    return defaultLabel;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">Your Generated Prompt</h2>
          <p className="text-slate-500">Edit the prompts below, then copy into your favourite AI tool.</p>
        </div>
        <Button
          variant="secondary"
          onClick={() =>
            copy('both', `${getText('en')}\n\n${'─'.repeat(40)}\n\n${getText('ar')}`)
          }
        >
          {copyLabel('both', 'Copy Both')}
        </Button>
      </div>

      <div className="flex flex-col gap-6">
        {LANGS.map(({ id, label, rtl }) => (
          <div key={id} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <span className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {label}
              </span>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => copy(id, getText(id))}
              >
                {copyLabel(id, 'Copy')}
              </Button>
            </div>
            <textarea
              dir={rtl ? 'rtl' : 'ltr'}
              value={getText(id)}
              onChange={(e) => setEdits((prev) => ({ ...prev, [id]: e.target.value }))}
              rows={10}
              className={`w-full resize-y rounded-b-2xl px-4 py-4 text-sm leading-relaxed text-slate-800 outline-none focus:ring-2 focus:ring-inset focus:ring-slate-300 ${rtl ? 'font-arabic text-right' : ''}`}
            />
          </div>
        ))}
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
