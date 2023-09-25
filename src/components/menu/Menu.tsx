import styled from "styled-components"
import { Link } from "../link/Link.styled"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { theme }  from "../../styles/Theme.styled"

export const Menu = () => {
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
    text-align: center;
    ul {
        display: flex;
        gap: 30px;
        list-style-type: none;
    }
`