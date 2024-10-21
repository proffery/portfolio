'use client'
import { ChangeEvent, ComponentPropsWithoutRef } from 'react'

import { Locale } from '@/i18n/dictionaries'
import { locales } from '@/i18n/locales'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

import s from './lang-select.module.scss'

type Props = {
  locale: Locale
} & ComponentPropsWithoutRef<'select'>

export const LangSelect = ({ locale }: Props) => {
  const classNames = {
    option: clsx(s.option),
    select: clsx(s.select),
  }

  const router = useRouter()
  const changeLangHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(e.currentTarget.value)
  }

  return (
    <select className={classNames.select} defaultValue={locale} onChange={changeLangHandler}>
      {locales.map(locale => (
        <option className={classNames.option} key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </select>
  )
}
