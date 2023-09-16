import styled from "styled-components";

type DecorationZeroPropsType = {
    size?: string,
    color?: string,
    positionTop?: string,
    positionLeft?: string
}

export const DecorationZero = styled.div<DecorationZeroPropsType>`
    height: ${props => props.size || "150px"};
    width: ${props => props.size || "150px"};
    border-radius: 50% 50%;
    border: 25px solid ${props => props.color || "rgb(233, 220, 220)"};
    position: absolute;
    top: ${props => props.positionTop || "80%"};
    left: ${props => props.positionLeft || "60%"};
    z-index: -1;
`