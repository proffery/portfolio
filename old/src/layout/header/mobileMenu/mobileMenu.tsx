import { Link } from "../../../components/link/Link.styled"
import { useState } from "react"
import { themeObj }  from "../../../common/const/themeObj"
import { ThemeChangeButton } from "../themeChangeButton/ThemeChangeButton"
import { menuItems } from "../../../common/const/data/menuItems"
import { S } from "./MibileMenu_Styles"
import { Fade } from "react-awesome-reveal"
import { useAppContext } from "../../../common/context/appContext";

export const MobileMenu = () => {
    const { theme} = useAppContext()
    const [ isOpen, setIsOpen] = useState(false)

    return (
        <S.MobileMenu>
            <S.BurgerButton theme={theme} aria-label="Burger menu button" isOpen={isOpen} onClick={() => {setIsOpen(!isOpen)}}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup theme={theme} isOpen={isOpen} onClick={() => {setIsOpen(!isOpen)}}>
                <ul role="menu" aria-label="menu">
                    <Fade triggerOnce duration={300} cascade>
                        {menuItems.map((item, index) => (
                            <li role="menuitem" key={index}>
                                <Link theme={theme} color=
                                    {theme === 'light'
                                        ? themeObj.light.color.text.primary
                                        : themeObj.dark.color.text.primary
                                    }   
                                    href={item.item_href}
                                >{item.item_name}</Link>
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