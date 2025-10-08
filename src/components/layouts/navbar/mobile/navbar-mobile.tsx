import ActiveLink from '@/components/active-link/active-link'
import LangSelect from '@/components/lang-select/lang-select'
import SoundControl from '@/components/sound-control/sound-control'
import { SvgSpriteIcon } from '@/components/svg-sprite-icon/svg-sprite-icon'
import { Dictionaries } from '@/i18n/dictionaries/en'
import { Locale } from '@/i18n/get-dictionaries'
import clsx from 'clsx'

import s from './navbar-mobile.module.scss'

type Props = {
  dict: Dictionaries
  locale: Locale
}

export const NavbarMobile = ({ dict, locale }: Props) => {
  const classNames = {
    navMobile: clsx(s.navMobile),
  }

  return (
    <nav className={classNames.navMobile}>
      <ActiveLink href={'#home'}>
        <SvgSpriteIcon
          iconId={'home'}
          spriteUrl={'/images/navbar-sprite.svg'}
          viewBox={'0 0 96 96'}
        />
      </ActiveLink>
      <ActiveLink href={'#about'}>
        <SvgSpriteIcon
          iconId={'about'}
          spriteUrl={'/images/navbar-sprite.svg'}
          viewBox={'0 0 96 96'}
        />
      </ActiveLink>
      <ActiveLink href={'#projects'}>
        <SvgSpriteIcon
          iconId={'projects'}
          spriteUrl={'/images/navbar-sprite.svg'}
          viewBox={'0 0 96 96'}
        />
      </ActiveLink>
      <ActiveLink href={'#contacts'}>
        <SvgSpriteIcon
          iconId={'contacts'}
          spriteUrl={'/images/navbar-sprite.svg'}
          viewBox={'0 0 96 96'}
        />
      </ActiveLink>
      <LangSelect dict={dict} locale={locale} />
      <SoundControl />
    </nav>
  )
}
