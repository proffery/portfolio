'use client'

import { ComponentPropsWithoutRef, ElementRef, useEffect, useRef } from 'react'

import withRedux from '@/common/hocs/with-redux'
import { useActions } from '@/common/hooks/use-actions'
import useIsVisible from '@/common/hooks/use-is-visible'
import { Sections, appActions } from '@/services/app/app.slice'
import clsx from 'clsx'

import s from './section.module.scss'

type Props = ComponentPropsWithoutRef<'main'>

function Section({ children, className, id, ...rest }: Props) {
  const classNames = {
    section: clsx(s.section, className),
  }

  const { setSectionInView } = useActions(appActions)

  const sectionRef = useRef<ElementRef<'section'>>(null)
  const isSectionVisible = useIsVisible(sectionRef)

  useEffect(() => {
    setSectionInView(id as Sections)
  }, [isSectionVisible])

  return (
    <section className={classNames.section} id={id} ref={sectionRef} {...rest}>
      {children}
    </section>
  )
}
export default withRedux(Section)
