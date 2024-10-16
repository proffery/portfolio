import { Locale, getDictionary } from '@/app/[locale]/dictionaries'
import clsx from 'clsx'
import Link from 'next/link'

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

  return (
    <header className={classNames.header}>
      <div className={classNames.container}>
        <div>
          {Object.entries(dict.header.navigation).map(key => (
            <Link href={`#${key[0]}`} key={key[0]}>
              {key[1]}
            </Link>
          ))}
        </div>
        <div>
          <Link href={'/en'}>
            <div>EN</div>
          </Link>
          <Link href={'/ru'}>
            <div>RU</div>
          </Link>
        </div>
      </div>
    </header>
  )
}
