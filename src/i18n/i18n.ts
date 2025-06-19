import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const locale = window.location.pathname.split('/')[1] || 'pt';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: locale,
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en', 'es', 'fr'],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/traducao.json', // Carrega os namespaces via HTTP dinamicamente
    },
    ns: ['Header', 'Home', 'About', 'Footer', 'Hero', 'SelectLanguage'],  // Todos os namespaces que você pode usar
    defaultNS: 'Header',  // Namespace padrão quando você não passar nada no useTranslation()
  });

export default i18n;
