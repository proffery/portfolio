import { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

import { menuItems } from '../../../common/const/data/menuItems'
import { themeObj } from '../../../common/const/themeObj'
import { useAppContext } from '../../../common/context/appContext'
import { Link } from '../../../components/link/Link.styled'
import { ThemeChangeButton } from '../themeChangeButton/ThemeChangeButton'
import { S } from './MibileMenu_Styles'

export const MobileMenu = () => {
  const { theme } = useAppContext()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.MobileMenu>
      <S.BurgerButton
        aria-label={'Burger menu button'}
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        theme={theme}
      >
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        theme={theme}
      >
        <ul aria-label={'menu'} role={'menu'}>
          <Fade cascade duration={300} triggerOnce>
            {menuItems.map((item, index) => (
              <li key={index} role={'menuitem'}>
                <Link
                  color={
                    theme === 'light'
                      ? themeObj.light.color.text.primary
                      : themeObj.dark.color.text.primary
                  }
                  href={item.item_href}
                  theme={theme}
                >
                  {item.item_name}
                </Link>
              </li>
            ))}
          </Fade>
          <li>
            <ThemeChangeButton />
          </li>
        </ul>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  )
}
