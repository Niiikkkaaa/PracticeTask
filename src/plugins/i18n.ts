import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import translation from './translation/en.json';
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translation,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });