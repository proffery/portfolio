import { defaultLocale, locales } from '@/i18n/locales'

import 'server-only'

export type Locale = keyof typeof dictionaries

const dictionaries = {
  en: () => import('@/i18n/dictionaries/en').then(module => module.default),
  ru: () => import('@/i18n/dictionaries/ru').then(module => module.default),
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locales.includes(locale) ? locale : defaultLocale]()
