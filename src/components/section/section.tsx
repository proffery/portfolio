'use client'

import { ComponentPropsWithoutRef, ElementRef, useEffect, useRef } from 'react'

import useIsVisible from '@/common/hooks/use-is-visible'
import clsx from 'clsx'

import s from './section.module.scss'

export type SectionVisibilityData = { isSectionVisible: boolean; sectionId: string }

type Props = {
  onVisibilityChange?: (data: SectionVisibilityData) => void
} & ComponentPropsWithoutRef<'main'>

export function Section({ children, className, id, onVisibilityChange, ...rest }: Props) {
  const classNames = {
    section: clsx(s.section, className),
  }

  const sectionRef = useRef<ElementRef<'section'>>(null)
  const isSectionVisible = useIsVisible(sectionRef)

  useEffect(() => {
    onVisibilityChange?.({ isSectionVisible, sectionId: id ?? '' })
  }, [isSectionVisible])

  return (
    <section className={classNames.section} id={id} ref={sectionRef} {...rest}>
      {children}
    </section>
  )
}
