import { ComponentPropsWithoutRef } from 'react'

import { credentials } from '@/common/credentials'
import { Typography } from '@/components/typography/typography'
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
        <span>{dict.footer.codedBy}&nbsp;</span>
        <span>
          <Typography.Link1 href={`mailto:${credentials.email}`}>
            {dict.footer.name}
          </Typography.Link1>
          &nbsp;&copy;&nbsp;
        </span>
        <span>{date.getFullYear()}</span>
      </div>
    </footer>
  )
}
