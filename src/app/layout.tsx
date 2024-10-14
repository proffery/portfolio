import { ReactNode } from 'react'

import { roboto, russoOne } from '@/styles/fonts'
import clsx from 'clsx'

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  const classNames = {
    body: clsx(roboto.variable, russoOne.variable),
  }

  return (
    <html className={classNames.body} lang={'en'}>
      <body>{children}</body>
    </html>
  )
}
