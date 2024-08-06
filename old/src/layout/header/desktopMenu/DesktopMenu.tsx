import { Link } from "../../../components/link/Link.styled"
import React from "react"
import { themeObj }  from "../../../common/const/themeObj"
import { menuItems } from "../../../common/const/data/menuItems"
import {S} from "./DesktopMenu_Styles"
import { Fade } from "react-awesome-reveal"
import {useAppContext} from "../../../common/context/appContext";

export const DesktopMenu = () => {
    const { theme} = useAppContext()
    return (
        <S.DesktopMenu>
            <ul role="menu" aria-label="menu">
                <Fade cascade duration={500} fraction={0} triggerOnce >
                {menuItems.map((item, index) => (
                    <li role="menuitem" key={index}>
                        <Link 
                            theme={theme}
                            color={theme === 'light' ?
                                themeObj.light.color.text.primary :
                                themeObj.dark.color.text.primary
                            }
                            href={item.item_href}>{item.item_name}</Link>
                    </li>
                ))}
                </Fade>
            </ul>
            <S.HeaderThemeChangeButton />
        </S.DesktopMenu>
    )
}