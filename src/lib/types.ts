export type Language = 'en' | 'ar';

export type QuestionType = 'toggle' | 'single' | 'multi' | 'text';

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface Option {
  id: string;
  label: LocalizedText;
  /** CSS color value (hex, rgb, etc.) — renders a color swatch circle in the badge */
  color?: string;
  /** Shown beneath the options once this option is selected */
  description?: LocalizedText;
}

export interface Question {
  id: string;
  type: QuestionType;
  label: LocalizedText;
  help?: LocalizedText;
  required?: boolean;
  /** Valid for single / multi / toggle */
  options?: Option[];
  /** Valid for text */
  placeholder?: LocalizedText;
  /** Pre-populated value shown before the user interacts */
  default?: AnswerValue;
  /** For multi questions: join selected labels with this string instead of ', ' */
  joinWith?: LocalizedText;
  /** For multi questions: cap the number of selections */
  maxSelect?: number;
}

export interface CategoryTemplate {
  en: string;
  ar: string;
}

export interface Category {
  id: string;
  label: LocalizedText;
  description?: LocalizedText;
  icon?: string;
  questions: Question[];
  /** Handlebars-style {{questionId}} placeholders */
  templates: CategoryTemplate;
}

export type AnswerValue = string | string[] | boolean;

export type Answers = Record<string, AnswerValue>;

export type WizardStep = 'language' | 'category' | 'questions' | 'result';

export interface WizardState {
  step: WizardStep;
  languages: Language[];
  categoryId: string | null;
  answers: Answers;
}
