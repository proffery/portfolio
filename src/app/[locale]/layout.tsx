import { ReactNode } from 'react'

import { credentials } from '@/common/credentials'
import { locales } from '@/common/locales'
import { NavbarDesktop } from '@/components/navbar/desktop/navbar-desktop'
import { NavbarMobile } from '@/components/navbar/mobile/navbar-mobile'
import { Locale, getDictionary } from '@/i18n/get-dictionaries'
import { roboto, russoOne } from '@/styles/fonts'
import clsx from 'clsx'
import { Metadata } from 'next'

import '@/styles/index.scss'

export async function generateStaticParams() {
  return locales.map(locale => {
    locale
  })
}

export const metadata: Metadata = {
  title: `Portfolio | ${credentials.firstNameEn} ${credentials.lastNameEn}`,
}

type Props = {
  children: ReactNode
  params: { locale: Locale }
}

export default async function RootLayout({ children, params: { locale } }: Props) {
  const classNames = {
    body: clsx(roboto.variable, russoOne.variable),
  }
  const dict = await getDictionary(locale)

  return (
    <html className={classNames.body} lang={locale}>
      <body>
        <NavbarDesktop dict={dict} locale={locale} />
        {children}
        <NavbarMobile locale={locale} />
      </body>
    </html>
  )
}
