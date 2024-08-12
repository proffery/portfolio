import { ChangeEvent, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { supportedLngs } from '@/i18n'

export const LangSelect = () => {
  const {
    i18n: { changeLanguage, language, resolvedLanguage },
    t,
  } = useTranslation()

  useEffect(() => {
    if (resolvedLanguage) {
      document.documentElement.lang = resolvedLanguage
    }
    document.title = t('app_title')
  }, [resolvedLanguage])

  const changeLangHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.currentTarget.value)
  }

  return (
    <div style={{ alignSelf: 'center', zIndex: 999999 }}>
      <select defaultValue={language} onChange={changeLangHandler} style={{ cursor: 'pointer' }}>
        {Object.entries(supportedLngs).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}
