import styled, { css } from "styled-components"
import { theme } from "../../styles/Theme.styled"


type StyledLinkPropsType = {
    type?: 'button',
    fontSize?: string,
    fontWeight?: string,
    color?: string,
    background?: string,
    borderRadius?: string,
    padding?: string,
    theme: string
}

export const Link = styled.a<StyledLinkPropsType>`
    font-weight: ${props => props.fontWeight || "0"};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.color || (props => props.theme === 'light' ? theme.light.color.text.link : theme.dark.color.text.link)};
    font-size: ${props => props.fontSize || "none"};
    text-decoration: none;
    cursor: pointer;
    &:hover {
            text-shadow: ${props => props.theme === 'light' ? theme.light.shadow.text : theme.dark.shadow.text};
        }
    ${props => props.type === 'button' && css<StyledLinkPropsType>`
        border-radius: ${props => props.borderRadius || "0px"};
        padding: ${props => props.padding || "0px"};
        min-width: 100px;
        background-color: ${props => props.background || (props => props.theme === 'light' ? theme.light.color.text.link : theme.dark.color.text.link)};
        &:hover {
            box-shadow: ${props => props.theme === 'light' ? theme.light.shadow.card : theme.dark.shadow.card};
        }
    `}
`