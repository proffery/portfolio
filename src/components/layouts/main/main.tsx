import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './main.module.scss'

export const Main = ({ children, ...rest }: ComponentPropsWithoutRef<'main'>) => {
  const classNames = {
    main: clsx(s.main),
    mainContainer: clsx(s.mainContainer),
  }

  return (
    <main className={classNames.main} {...rest}>
      <div className={classNames.mainContainer}>{children}</div>
    </main>
  )
}
