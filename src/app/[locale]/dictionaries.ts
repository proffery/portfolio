import { defaultLocale, locales } from '@/common/constants/locales'

import 'server-only'

export type Locale = keyof typeof dictionaries

const dictionaries = {
  en: () => import('../../../public/dictionaries/en.json').then(module => module.default),
  ru: () => import('../../../public/dictionaries/ru.json').then(module => module.default),
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locales.includes(locale) ? locale : defaultLocale]()
