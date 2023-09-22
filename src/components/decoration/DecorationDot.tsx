import styled from "styled-components";

type DecorationDotTypes = {
    backgroundImage?: string
}

export const DecorationDot = styled.div<DecorationDotTypes>`
    border-radius: 50% 50%;
    width: 20px;
    height: 20px;
    margin: 5px 12px;
    background-image: ${props => props.backgroundImage || "linear-gradient(180deg, rgba(166, 188, 250, 1), rgba(33, 87, 242, 1))"};
`