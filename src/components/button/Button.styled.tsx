import styled from "styled-components";

type ButtonPropsType = {
    fontSize?: string,
    color?: string,
    background?: string,
    padding?: string,
    borderColor?: string,
    borderWidth?: string,
    borderStyle?: string
}

export const Button = styled.button<ButtonPropsType>`
    background-color: ${props => props.background || "transparent"};
    color: ${props => props.color || "none"};
    font-size: ${props => props.fontSize || "none"};
    border-radius: 100px;
    padding: ${props => props.padding || "0px"};
    border-color: ${props => props.borderColor || "transparent"};
    border-width: ${props => props.borderWidth || "0px"};
    border-style: ${props => props.borderStyle || "none"};
    min-width: 100px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.borderColor || "transparent"};
        color: ${props => props.background || "transparent"};;
    }
`