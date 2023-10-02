import styled from "styled-components";
import { theme } from "../styles/Theme.styled";
import { font } from "../styles/Font";

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
    ${font({weight: 600, lineHeight: 1.36, Fmin: 20, Fmax: 32})}
    &::before {
        position: absolute;
        content: '';
        border-radius: 50% 50%;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        background-image: ${props => props.theme === 'light' ? theme.light.gradient.dot : theme.dark.gradient.dot};
        @media ${theme.media.tablet} {
            width: 16px;
            height: 16px;
        }
        
        @media ${theme.media.mobile} {
            width: 12px;
            height: 12px;
        }
    }
`