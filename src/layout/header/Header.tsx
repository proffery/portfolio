import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"
import { ThemeContext } from "../../context/ThemeContext"
import { useContext, useEffect, useState } from "react"
import { theme } from "../../styles/Theme.styled"
import { Button } from "../../components/button/Button.styled"
import { Container } from "../../components/Container"

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
    
    const themeChangeHandler = () => {
        theme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light')
    }
    return (
        <StyledHeader scrolled={scrolled} theme={theme}>
            <Container>
                <StyledLeft scrolled={scrolled} theme={theme} width="30%">
                    <Logo />
                </StyledLeft>
                <StyledRight theme={theme} width="70%" align="center" justify="end" gap="30px">
                    <Menu />
                    <Button borderColor="transparent" background="transparent" aria-label="Theme change button" hover="none" onClick={themeChangeHandler}>
                        <Icon
                            iconId={theme === 'light' ? 'moon' : 'sun'}
                            width="40px"
                            height="40px"
                            viewBox={theme === 'light' ? '0 0 50 50' : '30 20 500 500'}
                            />
                    </Button>
                </StyledRight>
            </Container>
        </StyledHeader>
    )
}

type StyledHeaderTypes = {
    scrolled: boolean
}

const StyledHeader = styled.header<StyledHeaderTypes>`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
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
`

const StyledLeft = styled(FlexWrapper)<StyledHeaderTypes>`
    background-color: ${props => props.theme === 'light' && props.scrolled ?
        theme.light.color.background.primary :
        props => props.theme === 'light' ? 
        theme.light.color.background.second :
        props => props.theme === 'dark' && props.scrolled ?
        theme.dark.color.background.primary :
        theme.dark.color.background.second
    };
    transition: all ease-in .2s;
`

const StyledRight = styled(FlexWrapper)`
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
    transition: all ease-in .2s;
`