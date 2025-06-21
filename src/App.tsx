import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams, Outlet } from 'react-router-dom';
import i18n from './i18n/i18n';
import Home from './pages/[locale]/home/home';
import Header from './features/Header/header';
import useBrowserLocale from './hooks/useBrowserLocale';

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


const NotFoundRedirect: React.FC = () => {
  const { locale } = useParams<{ locale: string }>();
  const browserLang = useBrowserLocale();
  const lang = locale || browserLang;
  return <Navigate to={`/${lang}/home`} replace />;
};


const App: React.FC = () => {
  const browserLanguage = useBrowserLocale();

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
