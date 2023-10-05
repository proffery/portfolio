import { Link } from "../../../components/link/Link.styled"
import React, { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { theme }  from "../../../styles/Theme.styled"
import { menuItems } from "../../../data/menuItems"
import {S} from "./DesktopMenu_Styles"
import { Fade } from "react-awesome-reveal"

export const DesktopMenu: React.FC = () => {
    const themeName = useContext(ThemeContext)
    return (
        <S.DesktopMenu>
            <ul role="menu" aria-label="menu">
                <Fade cascade duration={500} fraction={0} triggerOnce >
                {menuItems.map((item, index) => (
                    <li role="menuitem" key={index}>
                        <Link 
                            theme={themeName} 
                            color={themeName === 'light' ? 
                                theme.light.color.text.primary :
                                theme.dark.color.text.primary
                            }
                            href={item.item_href}>{item.item_name}</Link>
                    </li>
                ))}
                </Fade>
            </ul>
        </S.DesktopMenu>
    )
}