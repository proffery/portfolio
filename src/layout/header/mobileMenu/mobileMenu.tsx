import { Link } from "../../../components/link/Link.styled"
import { useContext, useState } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { theme }  from "../../../styles/Theme.styled"
import { ThemeChangeButton } from "../themeChangeButton/ThemeChangeButton"
import { menuItems } from "../../../data/menuItems"
import {S} from "./MibileMenu_Styles"
import { Fade } from "react-awesome-reveal"

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
            <S.MobileMenuPopup theme={themeName} isOpen={isOpen} onClick={() => {setIsOpen(!isOpen)}}>
                <ul role="menu" aria-label="menu">
                    <Fade triggerOnce duration={500} cascade>
                        {menuItems.map((item, index) => (
                            <li role="menuitem" key={index}>
                                <Link 
                                    theme={themeName} 
                                    color={themeName === 'light' ? 
                                        theme.light.color.text.primary :
                                        theme.dark.color.text.primary
                                    }   
                                    href={item.item_href}
                                >{item.item_name}</Link>
                            </li>
                        ))}
                    </Fade>
                    <li>
                        <ThemeChangeButton setCurrentTheme={props.setCurrentTheme} />
                    </li>
                </ul>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    )
}