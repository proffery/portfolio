import React, { useContext, useEffect, useState } from "react"
import { Icon } from "../../components/icon/Icon"
import { Logo } from "../../components/logo/Logo"
import { ThemeContext } from "../../context/ThemeContext"
import { DesktopMenu } from "./desktopMenu/DesktopMenu"
import { S } from "./Header_Styles"
import { MobileMenu } from "./mobileMenu/MobileMenu"

type HeaderTypes = {
    setCurrentTheme: any,
}

export const Header: React.FC<HeaderTypes> = ({ setCurrentTheme }: HeaderTypes) => {
    const theme = useContext(ThemeContext)
    const [scrolled, setScrolled] = useState(false)
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 576;
    
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
    
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
    
        return () => window.removeEventListener("resize", handleWindowResize);
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
                    {width < breakpoint ? <MobileMenu setCurrentTheme={setCurrentTheme} /> :
                        <>
                            <DesktopMenu />
                            <S.HeaderThemeChangeButton setCurrentTheme={setCurrentTheme}/>
                        </>
                    }
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

