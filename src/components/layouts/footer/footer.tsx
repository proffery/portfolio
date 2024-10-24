import { ComponentPropsWithoutRef } from 'react'

import { credentials } from '@/common/credentials'
import { Locale, getDictionary } from '@/i18n/get-dictionaries'
import clsx from 'clsx'

import s from './footer.module.scss'
type Props = {
  locale: Locale
} & ComponentPropsWithoutRef<'footer'>

export const Footer = async ({ className, locale }: Props) => {
  const classNames = {
    container: clsx(s.container),
    footer: clsx(s.footer, className),
  }

  const dict = await getDictionary(locale)
  const date = new Date()

  return (
    <footer className={classNames.footer}>
      <div className={classNames.container}>
        <p>
          <a href={`mailto:${credentials.email}`}>{dict.footer.codedBy}</a>
          &nbsp;&copy;&nbsp;
        </p>
        <p>{date.getFullYear()}</p>
      </div>
    </footer>
  )
}
