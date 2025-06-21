import clsx from 'clsx';
import { FC } from 'react';
import DarkmodeIcon from '../../components/darkmode-icon';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SelectLanguage from '../../components/selectLanguage';
import { useDarkMode } from '../../hooks/useDarkMode';
import { ArrowDown } from 'lucide-react';

type ProfileNavProps = {
  showNav: boolean;
};

export const ProfileNav: FC<ProfileNavProps> = ({ showNav }) => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const { t, i18n } = useTranslation();

  const currentLocale = i18n.language; // <- idioma atual
  const resumePath =
    currentLocale === 'pt'
      ? '/docs/pt/Curriculo-Edson-Araujo.pdf'
      : '/docs/en/English-Curriculo-EdsonAraujo.pdf';

  return (
    <nav className="z-10 ml-auto flex gap-1 pl-4">
      <SelectLanguage />

      <button
        type="button"
        className={clsx(
          "rounded p-2 text-gray-500 transition-colors dark:text-gray-300 dark:hover:text-gray-50 md:hover:text-gray-900",
          showNav ? "hover:text-gray-200" : "hover:text-gray-900"
        )}
        onClick={toggleDarkMode}
      >
        <span className="sr-only">Switch Color Theme</span>
        <DarkmodeIcon />
      </button>

      <a
        href={resumePath}
        target="_blank"
        rel="noopener noreferrer"
        download="Curriculo-Edson-Araujo.pdf"
        aria-label="Download Resume"
        data-tip={t('Header.Curriculo')}
        className={clsx(
          "rounded p-2 text-gray-500 transition-colors dark:text-gray-300 dark:hover:text-gray-50 md:hover:text-gray-900",
          showNav ? "hover:text-gray-200" : "hover:text-gray-900"
        )}
      >
        <span className="sr-only">Curriculo</span>
        <ArrowDown className="h-5 w-5" />
      </a>

      <Link
        target="_blank"
        to="mailto:edsonaraujo.dev@gmail.com"
        className="button-rainbow ml-4 hidden whitespace-nowrap px-4 py-1.5 text-sm font-medium tracking-tight text-gray-500 md:flex"
      >
        {t('Header.ContactMe')}
      </Link>
    </nav>
  );
};
