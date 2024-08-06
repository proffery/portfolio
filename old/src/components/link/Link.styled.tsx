import styled, { css } from "styled-components"
import { themeObj } from "../../common/const/themeObj"


type StyledLinkPropsType = {
    type?: 'button',
    color?: string,
    background?: string,
    borderRadius?: string,
    padding?: string,
    theme: string
}

export const Link = styled.a<StyledLinkPropsType>`
    display: flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
    color: ${props => props.color || (props.theme === 'light' ? themeObj.light.color.text.link : themeObj.dark.color.text.link)};
    text-decoration: none;
    cursor: pointer;
    &:hover {
            text-shadow: ${props => props.theme === 'light' ? themeObj.light.shadow.text : themeObj.dark.shadow.text};
        }
    ${props => props.type === 'button' && css<StyledLinkPropsType>`
        border-radius: ${props => props.borderRadius || "0px"};
        padding: ${props => props.padding || "0px"};
        background-color: ${props => props.background || (props => props.theme === 'light' ? themeObj.light.color.text.link : themeObj.dark.color.text.link)};
        &:hover {
            box-shadow: ${props => props.theme === 'light' ? themeObj.light.shadow.card : themeObj.dark.shadow.card};
        }
    `}
`