'use client'
import { ChangeEvent, ComponentPropsWithoutRef, useEffect } from 'react'

import { locales } from '@/common/locales'
import { useActions } from '@/common/use-actions'
import withRedux from '@/common/with-redux'
import { Dictionaries } from '@/i18n/dictionaries/en'
import { Locale } from '@/i18n/get-dictionaries'
import { appActions } from '@/services/app/app.slice'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

import s from './lang-select.module.scss'

type Props = {
  dict: Dictionaries
  locale: Locale
} & ComponentPropsWithoutRef<'select'>

const LangSelect = ({ dict, locale }: Props) => {
  const classNames = {
    option: clsx(s.option),
    select: clsx(s.select),
  }

  const { setDictionary, setIsSound, setLocale } = useActions(appActions)

  useEffect(() => {
    setDictionary(dict)
    setLocale(locale)
  }, [locale])

  const router = useRouter()
  const changeLangHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(e.currentTarget.value)
    setIsSound(false)
  }

  return (
    <select
      className={classNames.select}
      defaultValue={locale}
      name={'Language'}
      onChange={changeLangHandler}
    >
      {locales.map(locale => (
        <option className={classNames.option} key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </select>
  )
}

export default withRedux(LangSelect)
