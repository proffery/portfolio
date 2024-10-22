import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  Ref,
  forwardRef,
  useId,
} from 'react'

import { FieldError } from '@/components/ui/field-error/field-error'
import { Label } from '@/components/ui/label/label'
import clsx from 'clsx'

import s from './input.module.scss'

export type InputProps<T extends ElementType = 'input' | 'textarea'> = {
  as?: T
  className?: string
  cleanSearch?: () => void
  errorMessage?: string
  label?: string
  resize?: boolean
} & ComponentPropsWithoutRef<T>

const InputComponent = <T extends ElementType = 'input' | 'textarea'>(
  props: InputProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof InputProps<T>>,
  ref: Ref<HTMLInputElement>
) => {
  const {
    as: Component = 'input',
    className,
    disabled,
    errorMessage,
    id,
    label,
    resize = true,
    ...rest
  } = props
  const classNames = {
    container: clsx(s.container),
    input: clsx(
      className,
      s.input,
      Component === 'textarea' && s.textarea,
      !resize && s.disableResize,
      disabled && s.disabled
    ),
  }

  const new_id = useId()

  return (
    <FieldError errorMessage={errorMessage}>
      {label && (
        <Label disabled={disabled} htmlFor={id ?? new_id}>
          {label}
        </Label>
      )}
      <Component
        className={classNames.input}
        disabled={disabled}
        id={id ?? new_id}
        ref={ref}
        {...rest}
      />
    </FieldError>
  )
}

export const Input = forwardRef(InputComponent) as <T extends ElementType = 'input' | 'textarea'>(
  props: {
    ref?: ForwardedRef<ElementRef<T>>
  } & InputProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof InputProps<T>>
) => ReturnType<typeof InputComponent>
