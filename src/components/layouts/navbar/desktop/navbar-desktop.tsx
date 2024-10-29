import ActiveLink from '@/components/active-link/active-link'
import { LangSelect } from '@/components/lang-select/lang-select'
import { Dictionaries } from '@/i18n/dictionaries/en'
import { Locale } from '@/i18n/get-dictionaries'
import clsx from 'clsx'

import s from './navbar-desktop.module.scss'

type Props = {
  dict: Dictionaries
  locale: Locale
}

export const NavbarDesktop = ({ dict, locale }: Props) => {
  const classNames = {
    header: clsx(s.header),
    navDesktop: clsx(s.navDesktop),
  }

  const {
    header: { navigation },
  } = dict

  return (
    <header className={classNames.header}>
      <nav className={classNames.navDesktop}>
        <ActiveLink href={'#home'}>{navigation.home}</ActiveLink>
        <ActiveLink href={'#about'}>{navigation.about}</ActiveLink>
        <ActiveLink href={'#projects'}>{navigation.projects}</ActiveLink>
        <ActiveLink href={'#contacts'}>{navigation.contacts}</ActiveLink>
        <LangSelect locale={locale} />
      </nav>
    </header>
  )
}
