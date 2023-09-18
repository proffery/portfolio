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
    justify-content: center;
    background-color: ${props => props.background || "transparent"};
    color: ${props => props.color || "none"};
    font-size: ${props => props.fontSize || "none"};
    text-decoration: none;
    cursor: pointer;
    ${props => props.type === 'button' && css<StyledLinkPropsType>`
        border-radius: ${props => props.borderRadius || "0px"};
        padding: ${props => props.padding || "0px"};
        min-width: 100px;
    `}
`