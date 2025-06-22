import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HoverEffect } from './header.desktop-nav.hover-effect';
import { HEADER } from '../../content/pages';
import clsx from 'clsx';

function DesktopNav() {
    const { locale } = useParams<{ locale: string }>();
    const location = useLocation();
    const { t } = useTranslation();

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
                    debugger
                    const isActive = pathname === "/" + locale + link.href;

                    return (
                        <div
                            className="my-auto flex h-full items-center px-2"
                            key={link.href + link.title + i}
                        >
                            <Link
                                to={`/${locale}${link.href}`}
                                className={clsx(
                                    "relative z-10 flex rounded-md border-2 border-transparent py-1.5 px-3 text-gray-500 outline-none transition-all hfa:text-gray-900 hfa:outline-none d:text-gray-300 d:hfa:text-gray-50",
                                    isActive &&
                                    "border-gray-700/5 bg-gray-100 bg-clip-padding d:border-gray-50/10 d:bg-gray-800 group-hfa:bg-gray-200/30"
                                )}
                            >
                                <span className="text-sm font-medium">
                                    {t('Header.' + link.title)}
                                </span>
                            </Link>
                        </div>
                    );
                })}
        </nav>
    );
}

export default DesktopNav;
