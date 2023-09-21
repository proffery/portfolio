import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"
import { ThemeContext } from "../../context/ThemeContext"
import { useContext } from "react"
import { theme } from "../../styles/Theme.styled"
import { Button } from "../../components/button/Button.styled"
import { Container } from "../../components/Container"

type HeaderTypes = {
    setCurrentTheme: any,
}

export const Header = ({ setCurrentTheme }: HeaderTypes) => {
    const theme = useContext(ThemeContext)
    const themeChangeHandler = () => {
        theme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light')
    }
    return (
        <StyledHeader theme={theme}>
            <Container>
                <StyledLeft theme={theme} width="30%">
                    <Logo />
                </StyledLeft>
                <StyledRight theme={theme} width="70%" align="center" justify="end" gap="30px">
                    <Menu />
                    <Button borderColor="transparent" background="transparent" aria-label="Theme change button" onClick={themeChangeHandler}>
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

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
`

const StyledLeft = styled(FlexWrapper)`
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
`

const StyledRight = styled(FlexWrapper)`
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
`