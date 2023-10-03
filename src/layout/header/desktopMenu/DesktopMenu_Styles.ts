import styled from "styled-components";
import { theme } from "../../../styles/Theme.styled";
import { font } from "../../../styles/Font";

const DesktopMenu = styled.nav`
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
        ${font({Fmin: 8, Fmax: 16})}
    }
    z-index: 999;
    @media ${theme.media.tablet} {
        li {
            margin-right: 20px;
        }
    }
`

export const S = {
    DesktopMenu: DesktopMenu
}