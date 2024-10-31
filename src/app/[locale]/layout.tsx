import { ReactNode } from 'react'

import { NavbarDesktop } from '@/components/navbar/desktop/navbar-desktop'
import { NavbarMobile } from '@/components/navbar/mobile/navbar-mobile'
import { Locale, getDictionary } from '@/i18n/get-dictionaries'
import { roboto, russoOne } from '@/styles/fonts'
import clsx from 'clsx'

import '@/styles/index.scss'

import image from '../opengraph-image.jpg'

type Props = {
  children: ReactNode
  params: { locale: Locale }
}

export async function generateMetadata({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)

  const { metadata } = dict

  return {
    alternates: { canonical: `/${locale}/` },
    applicationName: metadata.applicationName,
    description: metadata.description,
    keywords: metadata.description.replaceAll(' ', ','),
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_HOST_BASE + '/' + locale ?? `http://localhost:3000`
    ),
    openGraph: {
      description: metadata.description,
      images: [
        {
          url: image.src,
        },
      ],
      locale,
      siteName: metadata.applicationName,
      title: metadata.title,
      type: 'website',
      url: process.env.NEXT_PUBLIC_HOST_BASE + '/' + locale,
    },
    title: { default: metadata.title, template: `%s | ${metadata.title}` },
    twitter: {
      card: 'summary_large_image',
      description: metadata.description,
      title: metadata.title,
    },
  }
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
        <NavbarMobile dict={dict} locale={locale} />
      </body>
    </html>
  )
}
