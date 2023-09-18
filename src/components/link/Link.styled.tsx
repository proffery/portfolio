import styled, { css } from "styled-components"


type StyledLinkPropsType = {
    type?: 'button',
    fontSize?: string,
    color?: string,
    background?: string,
    borderRadius?: string,
    padding?: string
}

export const Link = styled.a<StyledLinkPropsType>`
    display: flex;
    align-items: center;
    background-color: ${props => props.background || "transparent"};
    color: ${props => props.color || "none"};
    font-size: ${props => props.fontSize || "none"};
    text-decoration: none;
    ${props => props.type === 'button' && css<StyledLinkPropsType>`
        border-radius: ${props => props.borderRadius || "0px"};
        padding: ${props => props.padding || "0px"};
    `}
`