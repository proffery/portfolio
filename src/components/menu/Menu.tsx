import styled from "styled-components"
import { Link } from "../link/Link.styled"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export const Menu = () => {
    const theme = useContext(ThemeContext)
    return (
        <StyledMenu>
            <ul>
                <li>
                    <Link theme={theme} fontWeight="400" href="#">Home</Link>
                </li>
                <li>
                    <Link theme={theme} fontWeight="400" href="#">Projects</Link>
                </li>
                <li>
                    <Link theme={theme} fontWeight="400" href="#">About</Link>
                </li>
                <li>
                    <Link theme={theme} fontWeight="400" href="#">Content</Link>
                </li>
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        list-style-type: none;
    }
`