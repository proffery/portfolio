import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme.styled";

type ButtonPropsType = {
    fontSize?: string,
    color?: string,
    background?: string,
    padding?: string,
    borderColor?: string,
    borderWidth?: string,
    borderStyle?: string
    borderRadius?: string,
    theme: string,
    hoverShadow?: string,
    hoverBackground?: string,
    hoverColor?: string,
    minWidth?: string
}

export const Button = styled.button<ButtonPropsType>`
    background-color: ${props => props.background || (props => props.theme === 'light' ? theme.light.color.background.primary : theme.dark.color.background.primary)};
    color: ${props => props.color || (props => props.theme === 'light' ? theme.light.color.text.primary : theme.dark.color.text.primary)};
    font-size: ${props => props.fontSize || "none"};
    border-radius: ${props => props.borderRadius || "100px"};
    padding: ${props => props.padding || "0px"};
    border-color: ${props => props.borderColor || (props => props.theme === 'light' ? theme.light.color.background.second : theme.dark.color.background.second)};
    border-width: ${props => props.borderWidth || "0px"};
    border-style: ${props => props.borderStyle || "none"};
    min-width: ${props => props.minWidth || "100px"};
    cursor: pointer;
    transition: all ease-in .2s;
    &:hover {
        box-shadow: ${props => props.hoverShadow || (props => props.theme === 'light' ? theme.light.shadow.card : theme.dark.shadow.card)};
        background-color: ${props => props.hoverBackground || (props => props.theme === 'light' ? theme.light.color.background.second : theme.dark.color.background.second)};
        color: ${props => props.hoverColor || (props => props.theme === 'light' ? theme.light.color.text.primary : theme.dark.color.text.primary)};
    }
`