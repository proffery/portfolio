'use client'

import { ComponentPropsWithoutRef, ElementRef, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { useActions } from '@/common/use-actions'
import useIsVisible from '@/common/use-is-visible'
import withRedux from '@/common/with-redux'
import { selectSectionInView } from '@/services/app/app.selectors'
import { Sections, appActions } from '@/services/app/app.slice'
import clsx from 'clsx'

import s from './section.module.scss'

type Props = ComponentPropsWithoutRef<'section'>

const Section = ({ children, className, id, ...rest }: Props) => {
  const classNames = {
    section: clsx(s.section, className),
  }
  const { setSectionInView } = useActions(appActions)
  const sectionInView = useSelector(selectSectionInView)

  const sectionRef = useRef<ElementRef<'section'>>(null)
  const isSectionVisible = useIsVisible(sectionRef)

  useEffect(() => {
    setSectionInView(id as Sections)
    sectionInView !== id && sectionRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }, [isSectionVisible, id])

  return (
    <section className={classNames.section} id={id} ref={sectionRef} {...rest}>
      {children}
    </section>
  )
}

export default withRedux(Section)
