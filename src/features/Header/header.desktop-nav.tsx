import React from 'react';
import clsx from 'clsx';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HoverEffect } from './header.desktop-nav.hover-effect';
import { HEADER } from '../../content/pages';

const removeLocalePrefix = (path: string, locale: string) => {
    const regex = new RegExp(`^/${locale}`);
    return path.replace(regex, '') || '/';
};

function DesktopNav() {
    const { locale } = useParams<{ locale: string }>();
    const location = useLocation();
    const { t } = useTranslation('Header');

    const pathname = location.pathname;

    if (!pathname || !locale) {
        return null;
    }

    return (
        <nav className="header-nav group relative isolate mt-auto hidden h-full md:flex">
            <HoverEffect />
            {HEADER.nav
                .filter(({ desktop }) => desktop)
                .map((link, i) => {
                    const currentPath = removeLocalePrefix(pathname.split(/[#?]/)[0], locale);
                    const isActive = currentPath === link.href;

                    return (
                        <div
                            className="my-auto flex h-full items-center px-2"
                            key={link.href + link.title + i}
                        >
                            <Link
                                to={`/${locale}${link.href}`}
                                className={clsx(
                                    "relative z-10 flex rounded-md border-2 border-transparent py-1.5 px-3 text-gray-500 transition-all hover:text-gray-900",
                                    isActive && "border-gray-700/5 bg-gray-100"
                                )}
                            >
                                <span className="text-sm font-medium">
                                    {t(link.title)}
                                </span>
                            </Link>
                        </div>
                    );
                })}
        </nav>
    );
}

export default DesktopNav;
