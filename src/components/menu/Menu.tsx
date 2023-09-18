import styled from "styled-components"
import { Link } from "../link/Link.styled"

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <Link href="#">Home</Link>
                </li>
                <li>
                    <Link href="#">Projects</Link>
                </li>
                <li>
                    <Link href="#">About</Link>
                </li>
                <li>
                    <Link href="#">Content</Link>
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