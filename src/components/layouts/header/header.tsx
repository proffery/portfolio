import ActiveLink from '@/components/ui/active-link/active-link'
import { LangSelect } from '@/components/ui/lang-select/lang-select'
import { Locale, getDictionary } from '@/i18n/dictionaries'
import clsx from 'clsx'

import s from './header.module.scss'

type Props = {
  locale: Locale
}

export const Header = async ({ locale }: Props) => {
  const classNames = {
    container: clsx(s.container),
    header: clsx(s.header),
    langWrapper: clsx(s.langWrapper),
    navWrapper: clsx(s.navWrapper),
  }
  const dict = await getDictionary(locale)
  const {
    header: { navigation },
  } = dict

  return (
    <header className={classNames.header}>
      <div className={classNames.container}>
        <div className={classNames.navWrapper}>
          <ActiveLink href={'#home'}>{navigation.home}</ActiveLink>
          <ActiveLink href={'#about'}>{navigation.about}</ActiveLink>
          <ActiveLink href={'#projects'}>{navigation.projects}</ActiveLink>
          <ActiveLink href={'#contacts'}>{navigation.contacts}</ActiveLink>
        </div>
        <div className={classNames.langWrapper}>
          <LangSelect locale={locale} />
        </div>
      </div>
    </header>
  )
}
