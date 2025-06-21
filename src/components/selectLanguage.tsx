import React, { FC, useState, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';

const SUPPORTED_LOCALES = ['en', 'fr', 'pt', 'es'] as const;

const SelectLanguage: FC = () => {
  const [selectedLocale, setSelectedLocale] = useState<string>('en');
  const [page, setPage] = useState<string>('home');

  useEffect(() => {
    debugger

  }, []);

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale');
    const pathLocale = window.location.pathname.split('/')[2];
    setPage(pathLocale);

    if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale as typeof SUPPORTED_LOCALES[number])) {
      setSelectedLocale(savedLocale);
    }
  }, []);

  const changeLocale = (locale: string) => {

    setSelectedLocale(locale);
    localStorage.setItem('locale', locale);
    window.location.href = `/${locale}/${page}`;
  };

  const renderFlag = (locale: string) => {
    const localeToCountryCode: Record<string, string> = {
      en: 'US',
      fr: 'FR',
      pt: 'BR',
      es: 'ES',
    };

    const countryCode = localeToCountryCode[locale];

    return (
      <ReactCountryFlag
        countryCode={countryCode}
        svg
        title={countryCode}
        style={{ width: '20px', height: '15px' }}
      />
    );
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="cursor-pointer">
        <div className="flex items-center justify-center p-2">
          {renderFlag(selectedLocale)}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={5}
        align="center"
        className="mt-2 w-12 border border-gray-800/10 dark:border-gray-800 bg-white/50 backdrop-blur dark:bg-gray-900/40 shadow-lg rounded-md"
      >
        {SUPPORTED_LOCALES.map((locale) => (
          <DropdownMenuItem
            key={locale}
            className="flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer"
            onClick={() => changeLocale(locale)}
          >
            {renderFlag(locale)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SelectLanguage;
