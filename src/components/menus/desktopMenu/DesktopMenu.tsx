import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

import { menuItemsEn, menuItemsRu } from '@/common/const/data/menuItems'
import { themeObj } from '@/common/const/themeObj'
import { useAppContext } from '@/common/context/appContext'
import { LangSelect } from '@/components/langSelect/langSelect'
import { Link } from '@/components/link/Link.styled'

import { S } from './DesktopMenu_Styles'

export const DesktopMenu = () => {
  const { theme } = useAppContext()
  const {
    i18n: { language },
  } = useTranslation()

  const menuItems = language === 'en' ? menuItemsEn : menuItemsRu

  return (
    <S.DesktopMenu>
      <ul aria-label={'menu'} role={'menu'}>
        <Fade cascade duration={500} fraction={0} triggerOnce>
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
          <li>
            <LangSelect />
          </li>
        </Fade>
      </ul>
      <S.HeaderThemeChangeButton />
    </S.DesktopMenu>
  )
}
