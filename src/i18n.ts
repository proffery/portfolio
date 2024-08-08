import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { en } from './locales/en'
import { ru } from './locales/ru'

export const supportedLngs = {
  en: 'Eng',
  ru: 'Рус',
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { ...en },
      ru: { ...ru },
    },
    supportedLngs: Object.keys(supportedLngs),
  })
