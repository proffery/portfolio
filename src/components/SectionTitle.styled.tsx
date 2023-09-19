import styled from "styled-components";

type SectionTitleTypes = {
    color?: string
}

export const SectionTitle = styled.h2<SectionTitleTypes>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
    color: ${props => props.color || "black"};
`