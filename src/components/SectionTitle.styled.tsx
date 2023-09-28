import styled from "styled-components";
import { theme } from "../styles/Theme.styled";

type SectionTitleTypes = {
    color?: string,
    theme: string
}

export const SectionTitle = styled.h2<SectionTitleTypes>`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    padding-bottom: 60px;
    color: ${props => props.color || (props => props.theme === 'light' ? theme.light.color.text.primary : theme.dark.color.text.primary)};
    font-size: 32px;
    font-weight: 600;
    line-height: 136%;
    &::before {
        position: absolute;
        content: '';
        border-radius: 50% 50%;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        background-image: ${props => props.theme === 'light' ? theme.light.gradient.dot : theme.dark.gradient.dot};
    }
    
    @media ${theme.media.mobile} {
        font-size: 20px;
    }
`