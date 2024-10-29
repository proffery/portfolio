import ActiveLink from '@/components/active-link/active-link'
import { LangSelect } from '@/components/lang-select/lang-select'
import { NavbarDesktop } from '@/components/navbar/desktop/navbar-desktop'
import { Locale, getDictionary } from '@/i18n/get-dictionaries'
import clsx from 'clsx'

import s from './header.module.scss'

type Props = {
  locale: Locale
}

export const Header = async ({ locale }: Props) => {
  const classNames = {
    container: clsx(s.container),
    header: clsx(s.header),
  }
  const dict = await getDictionary(locale)
  const {
    header: { navigation },
  } = dict

  return (
    <header className={classNames.header}>
      <div className={classNames.container}>
        <NavbarDesktop dict={dict} locale={locale} />
      </div>
    </header>
  )
}
