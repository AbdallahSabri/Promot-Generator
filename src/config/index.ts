import type { Category } from '@/lib/types';
import { validateCategory } from '@/lib/validation';
import socialMedia from './categories/social-media';
import emailMarketing from './categories/email-marketing';
import aiVideoProduction from './categories/ai-video-production';
import foodVideoProduction from './categories/food-video-production';
import beverageVideoProduction from './categories/beverage-video-production';
import clincura from './categories/clincura';

const raw: unknown[] = [foodVideoProduction, beverageVideoProduction, aiVideoProduction, socialMedia, emailMarketing, clincura];

export const categories: Category[] = raw.map((c, i) => {
  try {
    return validateCategory(c);
  } catch (err) {
    throw new Error(`Invalid category at index ${i}: ${(err as Error).message}`);
  }
});

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
