import { useEffect, useState } from 'react'

import { themeObj } from '@/common/const/themeObj'
import { useAppContext } from '@/common/context/appContext'
import { useWidth } from '@/common/customHooks/useWidth'
import { extractNumberFromString } from '@/common/utils/extractNumberFromString'
import { Icon } from '@/components/icon/Icon'
import { Logo } from '@/components/logo/Logo'
import { DesktopMenu } from '@/components/menus/desktopMenu/DesktopMenu'
import { MobileMenu } from '@/components/menus/mobileMenu/mobileMenu'

import { S } from './Header_Styles'

const Header = () => {
  const { theme } = useAppContext()
  const width = useWidth()
  const [scrolled, setScrolled] = useState(false)
  const breakpoint = extractNumberFromString(themeObj.media.mobile)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <S.Header scrolled={scrolled.toString()} theme={theme}>
      <S.HeaderContainer justify={'space-between'} width={'100%'}>
        <S.Left scrolled={scrolled.toString()} theme={theme}>
          {theme === 'light' && scrolled ? <Logo color={'gray'} /> : <Logo color={'white'} />}
        </S.Left>
        <S.Right align={'center'} justify={'end'} theme={theme}>
          {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
        </S.Right>
      </S.HeaderContainer>
      {scrolled && (
        <S.TopButton href={'#'} theme={theme} type={'button'}>
          <Icon
            aria-label={'Go to top'}
            height={'100%'}
            iconId={'arrowRight'}
            viewBox={'-6 -2 37 35'}
            width={'100%'}
          />
        </S.TopButton>
      )}
    </S.Header>
  )
}

export default Header
