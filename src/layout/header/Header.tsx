import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { HeaderMenu } from "./headerMenu/HeaderMenu"
import { FlexWrapper } from "../../components/FlexWrapper"
import { ThemeContext } from "../../context/ThemeContext"
import { useContext, useEffect, useState } from "react"
import { theme } from "../../styles/Theme.styled"
import { Container } from "../../components/Container"
import { MobileMenu } from "./mobileMenu/MobileMenu"
import { ThemeChangeButton } from "./themeChangeButton/ThemeChangeButton"
import { Icon } from "../../components/icon/Icon"
import { Link } from "../../components/link/Link.styled"

type HeaderTypes = {
    setCurrentTheme: any,
}

export const Header = ({ setCurrentTheme }: HeaderTypes) => {
    const theme = useContext(ThemeContext)
    const [scrolled, setScrolled] = useState(false)
    
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
        <StyledHeader scrolled={scrolled} theme={theme}>
            <Container justify="space-between">
                <StyledLeft scrolled={scrolled} theme={theme}>
                    {theme === 'light' && !scrolled ? <Logo color="white" /> : theme === 'light' && scrolled ? <Logo color="gray" /> : <Logo color="white" />}
                </StyledLeft>
                <StyledRight theme={theme} width="70%" align="center" justify="end">
                    <HeaderMenu />
                    <MobileMenu setCurrentTheme={setCurrentTheme} />
                    <StyledThemeChangeButton setCurrentTheme={setCurrentTheme}/>
                </StyledRight>
            </Container>
            {scrolled && 
                <TopButton type="button" href="#" theme={theme}>
                    <Icon 
                        height="100%"
                        width="100%" 
                        viewBox="-6 -2 37 35" 
                        iconId="arrowRight"
                        aria-label="Go to top" 
                    />
                </TopButton>
            }
        </StyledHeader>
    )
}

type StyledHeaderTypes = {
    scrolled: boolean
}

const StyledHeader = styled.header<StyledHeaderTypes>`
    height: 75px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99999;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
    box-shadow: ${props => props.scrolled && theme.light.shadow.main};
    transition: all ease-in .2s;
    @media ${theme.media.mobile} {
        height: 44px;
    }
`

const StyledThemeChangeButton = styled(ThemeChangeButton)`
    display: inline-block;
    @media ${theme.media.mobile} {
        display: none;
    }
`

const StyledLeft = styled(FlexWrapper)<StyledHeaderTypes>`
    display: flex;
    position: relative;
    width: 10%;
    z-index: 0;
    background-color: ${props => props.theme === 'light' && props.scrolled ?
        theme.light.color.background.primary :
        props => props.theme === 'light' ? 
        theme.light.color.background.second :
        props => props.theme === 'dark' && props.scrolled ?
        theme.dark.color.background.primary :
        theme.dark.color.background.second
    };
    transition: all ease-in .2s;
    &::after {
        position: absolute;
        content: "";
        width: 300%;
        height: 100%;
        background-color: ${props => props.theme === 'light' && props.scrolled ?
            theme.light.color.background.primary :
            props => props.theme === 'light' ? 
            theme.light.color.background.second :
            props => props.theme === 'dark' && props.scrolled ?
            theme.dark.color.background.primary :
            theme.dark.color.background.second
        };

        @media ${theme.media.tablet} {
            width: 500%;
        }
    }
`

const StyledRight = styled(FlexWrapper)`
    display: flex;
    
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
    transition: all ease-in .2s;
`

const TopButton = styled(Link)`
    display: none;
    position: fixed;
    height: 50px;
    left: 0;
    top: 90%;
    transform-origin: top left;
    transform: rotate(-90deg);
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    border-radius: 0 0 22px 22px;
    border: 2px solid ${props => props.theme === 'light' ?
        theme.light.color.background.bannerBorder :
        theme.dark.color.background.bannerBorder 
    };

    color: ${props => props.theme === 'light' ?
        theme.light.color.text.second :
        theme.dark.color.text.primary
    };
    z-index: -1;
    border-top: none;
    opacity: .8;


    @media ${theme.media.tablet} {
        display: flex;
    }
    
    @media ${theme.media.mobile} {
        height: 40px;
        min-width: 80px;
        border-radius: 0 0 16px 16px;
    }
`