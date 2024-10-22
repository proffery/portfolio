import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import s from './label.module.scss'

type Props = {
  children?: ReactNode
  disabled?: boolean
} & ComponentPropsWithoutRef<'label'>
export const Label = forwardRef<HTMLLabelElement, Props>(
  ({ children, disabled, ...rest }: Props, ref) => {
    const classNames = {
      label: clsx(s.label, disabled && s.disabled),
    }

    return (
      <label className={classNames.label} ref={ref} {...rest}>
        {children}
      </label>
    )
  }
)
