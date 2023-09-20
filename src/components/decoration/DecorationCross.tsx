import styled from "styled-components";

type DecorationCrossPropsType = {
    size?: string,
    color?: string,
    positionTop?: string,
    positionLeft?: string
}

export const DecorationCross = styled.div<DecorationCrossPropsType>`
    &::before {
        content: "+";
    }
    position: absolute;
    top: ${props => props.positionTop || "10%"};
    left: ${props => props.positionLeft || "10%"};;
    transform: rotate(45deg);
    font-size: ${props => props.size || "150px"};
    font-weight: 600;
    color: ${props => props.color || "rgb(224, 207, 207)"};
    z-index: 0;
`