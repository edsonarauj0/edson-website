import React from 'react'
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();
    return (
        <>
            <div className="h-screen flex items-center justify-center bg-gray-100/20">{t('welcome')}</div>
        </>
    )
}

export default Home