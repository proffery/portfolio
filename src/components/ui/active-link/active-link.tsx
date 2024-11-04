'use client'
import { ReactNode, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import withRedux from '@/common/with-redux'
import { selectLocale, selectSectionInView } from '@/services/app/app.selectors'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'

import s from './active-link.module.scss'

type Props = {
  children?: ReactNode
} & LinkProps
const ActiveLink = ({ children, href, ...rest }: Props) => {
  const [isActive, setIsActive] = useState(false)
  const sectionInView = useSelector(selectSectionInView)
  const locale = useSelector(selectLocale)
  const router = useRouter()

  useEffect(() => {
    const timout = setTimeout(() => {
      if ('#' + sectionInView === href) {
        router.push(`${locale}#${sectionInView}`)

        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }, 250)

    return () => {
      clearTimeout(timout)
    }
  }, [sectionInView])

  const classNames = { link: clsx(s.link, isActive && s.activeLink) }

  return (
    <Link
      href={href}
      onClick={() => router.push(`${locale}#${href}`)}
      {...rest}
      className={classNames.link}
    >
      {children}
    </Link>
  )
}

export default withRedux(ActiveLink)
