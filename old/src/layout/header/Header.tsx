import React, { useEffect, useState } from "react"
import { Icon } from "../../components/icon/Icon"
import { Logo } from "../../components/logo/Logo"
import { DesktopMenu } from "./desktopMenu/DesktopMenu"
import { S } from "./Header_Styles"
import { MobileMenu } from "./mobileMenu/MobileMenu"
import {useAppContext} from "../../common/context/appContext";
import {themeObj} from "../../common/const/themeObj";
import {extractNumberFromString} from "../../common/utils/extractNumberFromString";

export const Header = () => {
    const {theme, width} = useAppContext()
    const [scrolled, setScrolled] = useState(false)
    const breakpoint = extractNumberFromString(themeObj.media.mobile);
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <S.Header scrolled={scrolled} theme={theme}>
            <S.HeaderContainer justify="space-between">
                <S.Left scrolled={scrolled} theme={theme}>
                    {theme === 'light' && !scrolled ? <Logo color="white" /> : 
                        theme === 'light' && scrolled ? <Logo color="gray" /> : 
                        <Logo color="white" />
                    }
                </S.Left>
                <S.Right theme={theme} align="center" justify="end">
                    {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
                </S.Right>
            </S.HeaderContainer>
            {scrolled && 
                <S.TopButton type="button" href="#" theme={theme}>
                    <Icon 
                        height="100%"
                        width="100%" 
                        viewBox="-6 -2 37 35" 
                        iconId="arrowRight"
                        aria-label="Go to top" 
                    />
                </S.TopButton>
            }
        </S.Header>
    )
}

