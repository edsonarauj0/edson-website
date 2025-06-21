import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams, Outlet } from 'react-router-dom';
import i18n from './i18n/i18n';
import Home from './pages/[locale]/home/home';
import Header from './features/Header/header';

const LocaleWrapper: React.FC = () => {
  const { locale } = useParams<{ locale: string }>();

  useEffect(() => {
    if (locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const detectBrowserLanguage = (): string => {
  const browserLanguage = localStorage.getItem('locale') || navigator.language || navigator.languages[0];
  const supportedLanguages = ['pt', 'en', 'es', 'fr'];
  const detectedLanguage = supportedLanguages.find((lang) => browserLanguage.startsWith(lang));
  return detectedLanguage || 'en';
};

const NotFoundRedirect: React.FC = () => {
  const { locale } = useParams<{ locale: string }>();
  const lang = locale || detectBrowserLanguage();
  return <Navigate to={`/${lang}/home`} replace />;
};


const App: React.FC = () => {
  const browserLanguage = detectBrowserLanguage();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/${browserLanguage}/home`} replace />} />
        <Route path="*" element={<NotFoundRedirect />} />
        <Route path="/:locale/*" element={<LocaleWrapper />}>
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NotFoundRedirect />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
