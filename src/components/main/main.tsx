import { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './main.module.scss'

type Props = ComponentPropsWithoutRef<'main'>

export const Main = ({ children, className, ...rest }: Props) => {
  const classNames = {
    container: clsx(s.container),
    main: clsx(s.main, className),
  }

  return (
    <main className={classNames.main} {...rest}>
      <div className={classNames.container}>{children}</div>
    </main>
  )
}
