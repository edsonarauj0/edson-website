import { useMemo } from 'react';

const SUPPORTED_LANGUAGES = ['pt', 'en', 'es', 'fr'] as const;

export default function useBrowserLocale(): string {
  return useMemo(() => {
    const browserLanguage =
      localStorage.getItem('locale') || navigator.language || navigator.languages[0];
    const detected = SUPPORTED_LANGUAGES.find((lang) =>
      browserLanguage.startsWith(lang)
    );
    return detected || 'en';
  }, []);
}
