import { ReactNode } from 'react'

import { Locale } from '@/app/[locale]/dictionaries'
import { credentials } from '@/common/constants/credentials'
import { locales } from '@/common/constants/locales'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
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
  title: `Portfolio | ${credentials.firstNameEn} | ${credentials.lastNameEn}`,
}

type Props = {
  children: ReactNode
  params: { locale: Locale }
}

export default async function RootLayout({ children, params: { locale } }: Props) {
  const classNames = {
    body: clsx(roboto.variable, russoOne.variable),
  }

  return (
    <html className={classNames.body} lang={locale}>
      <body>
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  )
}
