import { ComponentPropsWithoutRef } from 'react'

import { Locale, getDictionary } from '@/app/[locale]/dictionaries'
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
        <p>&copy; {date.getFullYear()}</p>
        <p>{dict.footer.allRights}</p>
      </div>
    </footer>
  )
}
