import React from 'react'
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();
  return (
    <div>{t('welcome')}</div>
  )
}

export default Index
