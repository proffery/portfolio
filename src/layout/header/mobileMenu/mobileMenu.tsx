import { Link } from "../../../components/link/Link.styled"
import { useContext, useState } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { theme }  from "../../../styles/Theme.styled"
import { ThemeChangeButton } from "../themeChangeButton/ThemeChangeButton"
import { menuItems } from "../../../data/menuItems"
import {S} from "./MibileMenu_Styles"

type MobileMenuTypes = {
    setCurrentTheme: any,
}

export const MobileMenu: React.FC<MobileMenuTypes> = (props: MobileMenuTypes) => {
    const themeName = useContext(ThemeContext)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <S.MobileMenu>
            <S.BurgerButton theme={themeName} aria-label="Burger menu button" isOpen={isOpen} onClick={() => {setIsOpen(!isOpen)}}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup theme={themeName} isOpen={isOpen}>
                <ul role="menu" aria-label="menu">
                    {menuItems.map(item => (
                        <li role="menuitem">
                            <Link 
                                theme={themeName} 
                                color={themeName === 'light' ? 
                                    theme.light.color.text.primary :
                                    theme.dark.color.text.primary
                                }
                                href={item.item_href}
                                onClick={() => {setIsOpen(!isOpen)}}>{item.item_name}</Link>
                        </li>
                    ))}
                    <li>
                        <ThemeChangeButton setCurrentTheme={props.setCurrentTheme} />
                    </li>
                </ul>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    )
}