'use client'
import { ReactNode, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useActions } from '@/common/use-actions'
import withRedux from '@/common/with-redux'
import { selectSectionInView } from '@/services/app/app.selectors'
import { appActions } from '@/services/app/app.slice'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { useParams } from 'next/navigation'

import s from './active-link.module.scss'

type Props = {
  children?: ReactNode
} & LinkProps
const ActiveLink = ({ children, href, ...rest }: Props) => {
  const params = useParams()
  const [isActive, setIsActive] = useState(false)
  const sectionInView = useSelector(selectSectionInView)

  useEffect(() => {
    '#' + sectionInView === href ? setIsActive(true) : setIsActive(false)
  }, [params, sectionInView])

  const classNames = { link: clsx(s.link, isActive && s.activeLink) }

  return (
    <Link href={href} {...rest} className={classNames.link}>
      {children}
    </Link>
  )
}

export default withRedux(ActiveLink)
