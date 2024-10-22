'use client'

import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect, useRef } from 'react'

import { useActions } from '@/common/use-actions'
import useIsVisible from '@/common/use-is-visible'
import withRedux from '@/common/with-redux'
import { Sections, appActions } from '@/services/app/app.slice'
import clsx from 'clsx'

import s from './section.module.scss'

type Props = ComponentPropsWithoutRef<'section'>

const Section = ({ children, className, id, ...rest }: Props) => {
  const classNames = {
    section: clsx(s.section, className),
  }
  const { setScrollPosition, setSectionInView } = useActions(appActions)

  const sectionRef = useRef<ElementRef<'section'>>(null)
  const isSectionVisible = useIsVisible(sectionRef)

  useEffect(() => {
    setSectionInView(id as Sections)
    setScrollPosition({
      x: sectionRef?.current?.scrollWidth ?? 0,
      y: sectionRef?.current?.scrollHeight ?? 0,
    })
  }, [isSectionVisible])

  return (
    <section className={classNames.section} id={id} ref={sectionRef} {...rest}>
      {children}
    </section>
  )
}

export default withRedux(Section)
