import styled from "styled-components";

type ContainerTypes = {
    direction?: string
}

export const Container = styled.div<ContainerTypes>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    max-width: 1440px;
    width: 90%;
    height: 100%;
    margin: 0 auto;
`