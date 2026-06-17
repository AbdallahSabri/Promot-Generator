'use client';

import { useState, useCallback } from 'react';
import type { WizardState, WizardStep, Language, Answers, AnswerValue } from '@/lib/types';

const initial: WizardState = {
  step: 'language',
  languages: [],
  categoryId: null,
  answers: {},
};

export function useWizard() {
  const [state, setState] = useState<WizardState>(initial);

  const setLanguages = useCallback((languages: Language[]) => {
    setState((s) => ({ ...s, languages }));
  }, []);

  const goToStep = useCallback((step: WizardStep) => {
    setState((s) => ({ ...s, step }));
  }, []);

  const selectCategory = useCallback((categoryId: string) => {
    setState((s) => ({
      ...s,
      categoryId,
      answers: s.categoryId === categoryId ? s.answers : {},
    }));
  }, []);

  const setAnswer = useCallback((questionId: string, value: AnswerValue) => {
    setState((s) => ({ ...s, answers: { ...s.answers, [questionId]: value } }));
  }, []);

  const setAnswers = useCallback((answers: Answers) => {
    setState((s) => ({ ...s, answers }));
  }, []);

  const reset = useCallback(() => setState(initial), []);

  return { state, setLanguages, goToStep, selectCategory, setAnswer, setAnswers, reset };
}
