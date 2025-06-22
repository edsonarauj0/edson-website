import { useMemo } from 'react';
import { detectBrowserLocale, SupportedLanguage } from '../utils/locale';

export default function useBrowserLocale(): SupportedLanguage {
  return useMemo(() => detectBrowserLocale(), []);
}
