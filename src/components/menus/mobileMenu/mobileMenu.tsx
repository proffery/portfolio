import { useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

import { menuItemsEn, menuItemsRu } from '@/common/const/data/menuItems'
import { themeObj } from '@/common/const/themeObj'
import { useAppContext } from '@/common/context/appContext'
import { Link } from '@/components/link/Link.styled'
import { ThemeChangeButton } from '@/components/themeChangeButton/ThemeChangeButton'

import { S } from './MibileMenu_Styles'

export const MobileMenu = () => {
  const { theme } = useAppContext()
  const [isOpen, setIsOpen] = useState(false)
  const {
    i18n: { language },
  } = useTranslation()

  const menuItems = language === 'en' ? menuItemsEn : menuItemsRu

  return (
    <S.MobileMenu>
      <S.BurgerButton
        aria-label={'Burger menu button'}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        opened={isOpen.toString()}
        theme={theme}
      >
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        opened={isOpen.toString()}
        theme={theme}
      >
        <ul aria-label={'menu'} role={'menu'}>
          <Fade cascade duration={300} triggerOnce>
            {menuItems.map(item => (
              <li key={item.item_href} role={'menuitem'}>
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
