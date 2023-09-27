import styled from "styled-components"
import { Link } from "../../../components/link/Link.styled"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { theme }  from "../../../styles/Theme.styled"

export const HeaderMenu = () => {
    const themeName = useContext(ThemeContext)
    return (
        <StyledMenu>
            <ul role="menu" aria-label="menu">
                <li role="menuitem">
                    <Link theme={themeName} 
                        color={themeName === 'light' ? 
                            theme.light.color.text.primary :
                            theme.dark.color.text.primary
                        } 
                        fontWeight="400" 
                        href="#main">Home</Link>
                </li>
                <li role="menuitem">
                    <Link theme={themeName} 
                        color={themeName === 'light' ? 
                            theme.light.color.text.primary :
                            theme.dark.color.text.primary
                        } 
                        fontWeight="400" 
                        href="#projects">Projects</Link>
                </li>
                <li role="menuitem">
                    <Link theme={themeName} 
                        color={themeName === 'light' ? 
                            theme.light.color.text.primary :
                            theme.dark.color.text.primary
                        } 
                        fontWeight="400" 
                        href="#about">About</Link>
                </li>                
                <li role="menuitem">
                    <Link theme={themeName} 
                        color={themeName === 'light' ? 
                            theme.light.color.text.primary :
                            theme.dark.color.text.primary
                        } 
                        fontWeight="400" 
                        href="#contact">Contact</Link>
                </li>
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    display: flex;
    width: 100%;
    justify-content: end;
    text-align: center;
    ul {
        display: flex;
        justify-content: end;
        list-style-type: none;
    }
    li {
        margin-right: 35px;
    }
    @media ${theme.media.mobile} {
        display: none;
    }
`