'use client';

import { useWizard } from '@/hooks/useWizard';
import { getCategoryById } from '@/config';
import { LanguageStep } from '@/components/language-step';
import { CategoryStep } from '@/components/category-step';
import { QuestionForm } from '@/components/question-form';
import { ResultView } from '@/components/result';

const STEP_LABELS = ['Language', 'Category', 'Questions', 'Result'] as const;
const STEP_KEYS = ['language', 'category', 'questions', 'result'] as const;

export default function Home() {
  const { state, setLanguages, goToStep, selectCategory, setAnswers, reset } = useWizard();
  const { step, languages, categoryId, answers } = state;

  function handleCategorySelect(id: string) {
    if (id !== categoryId && Object.keys(answers).length > 0) {
      if (!window.confirm('Changing category will clear your current answers. Continue?')) return;
    }
    selectCategory(id);
  }

  const category = categoryId ? getCategoryById(categoryId) : undefined;
  const currentStepIndex = STEP_KEYS.indexOf(step);
  const primaryLanguage = languages[0] ?? 'en';

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12">
      {/* Progress bar */}
      <nav className="mb-10 flex items-center gap-2" aria-label="Progress">
        {STEP_LABELS.map((label, i) => {
          const done = i < currentStepIndex;
          const active = i === currentStepIndex;
          return (
            <div key={label} className="flex items-center gap-2">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                  done
                    ? 'bg-indigo-600 text-white'
                    : active
                      ? 'border-2 border-indigo-600 text-indigo-600'
                      : 'border-2 border-slate-300 text-slate-400'
                }`}
              >
                {done ? '✓' : i + 1}
              </div>
              <span
                className={`hidden text-sm sm:block ${active ? 'font-semibold text-slate-900' : 'text-slate-400'}`}
              >
                {label}
              </span>
              {i < STEP_LABELS.length - 1 && (
                <div className={`h-px w-6 ${done ? 'bg-indigo-600' : 'bg-slate-200'}`} />
              )}
            </div>
          );
        })}
      </nav>

      {step === 'language' && (
        <LanguageStep
          selected={languages}
          onChange={setLanguages}
          onNext={() => goToStep('category')}
        />
      )}

      {step === 'category' && (
        <CategoryStep
          language={primaryLanguage}
          selectedId={categoryId}
          onSelect={handleCategorySelect}
          onNext={() => goToStep('questions')}
          onBack={() => goToStep('language')}
        />
      )}

      {step === 'questions' && category && (
        <QuestionForm
          category={category}
          language={primaryLanguage}
          initialAnswers={answers}
          onSubmit={(a) => {
            setAnswers(a);
            goToStep('result');
          }}
          onBack={() => goToStep('category')}
          onReset={reset}
        />
      )}

      {step === 'result' && category && (
        <ResultView
          category={category}
          answers={answers}
          onBack={() => goToStep('questions')}
          onReset={reset}
        />
      )}
    </main>
  );
}
