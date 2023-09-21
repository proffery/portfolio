import styled from "styled-components";
import { theme } from "../styles/Theme.styled";

type SectionTitleTypes = {
    color?: string,
    theme: string
}

export const SectionTitle = styled.h2<SectionTitleTypes>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
    color: ${props => props.color || (props => props.theme === 'light' ? theme.light.color.text.primary : theme.dark.color.text.primary)};
`