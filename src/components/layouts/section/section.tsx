'use client'

import { ComponentPropsWithoutRef, ElementRef, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { ArrowDown } from '@/assets/components/arrow-down'
import { constants } from '@/common/constants'
import { useActions } from '@/common/use-actions'
import useIsVisible from '@/common/use-is-visible'
import { useIsWidthLess } from '@/common/use-is-width-less'
import withRedux from '@/common/with-redux'
import { selectSectionInView } from '@/services/app/app.selectors'
import { Sections, appActions } from '@/services/app/app.slice'
import clsx from 'clsx'
import Link from 'next/link'

import s from './section.module.scss'

type Props = { nextId?: string; prevId?: string } & ComponentPropsWithoutRef<'section'>

const Section = ({ children, className, id, nextId, prevId, ...rest }: Props) => {
  const sectionInView = useSelector(selectSectionInView)
  const classNames = {
    arrowDown: clsx(s.arrowDown, s.blinkArrow),
    arrowUp: clsx(s.arrowUp, s.blinkArrow),
    section: clsx(s.section, className),
  }
  const { setSectionInView } = useActions(appActions)

  const sectionRef = useRef<ElementRef<'section'>>(null)
  const isSectionVisible = useIsVisible(sectionRef)

  useEffect(() => {
    setSectionInView(id as Sections)
    const timout = setTimeout(() => {
      sectionInView !== id &&
        sectionRef?.current?.scrollIntoView({ behavior: 'auto', block: 'start' })
    }, 150)

    return () => {
      clearTimeout(timout)
    }
  }, [isSectionVisible, id])

  return (
    <section className={classNames.section} id={id} ref={sectionRef} {...rest}>
      {prevId && sectionInView === id && (
        <Link className={classNames.arrowUp} href={`#${prevId}`}>
          <ArrowDown height={48} width={48} />
        </Link>
      )}
      {children}
      {nextId && sectionInView === id && (
        <Link className={classNames.arrowDown} href={`#${nextId}`}>
          <ArrowDown height={48} width={48} />
        </Link>
      )}
    </section>
  )
}

export default withRedux(Section)
