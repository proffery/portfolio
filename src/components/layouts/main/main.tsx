import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './main.module.scss'

type Props = ComponentPropsWithoutRef<'main'>

export const Main = forwardRef<ElementRef<'main'>, Props>(
  ({ children, className, ...rest }: Props, ref) => {
    const classNames = {
      container: clsx(s.container),
      main: clsx(s.main, className),
    }

    return (
      <main className={classNames.main} ref={ref} {...rest}>
        <div className={classNames.container}>{children}</div>
      </main>
    )
  }
)
