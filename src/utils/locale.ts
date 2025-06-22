export const SUPPORTED_LANGUAGES = ['pt', 'en', 'es', 'fr'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];
export const DEFAULT_LANGUAGE: SupportedLanguage = 'en';

export function detectBrowserLocale(): SupportedLanguage {
  if (typeof navigator === 'undefined') return DEFAULT_LANGUAGE;
  const stored = localStorage.getItem('locale');
  const candidates = [stored, navigator.language, ...(navigator.languages || [])];

  for (const lang of candidates) {
    if (!lang) continue;
    const match = SUPPORTED_LANGUAGES.find((l) => lang.startsWith(l));
    if (match) return match;
  }

  return DEFAULT_LANGUAGE;
}
