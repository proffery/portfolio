import styled from "styled-components";
import { themeObj } from "../common/const/themeObj";
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
    color: ${props => props.color || (props => props.theme === 'light' ? themeObj.light.color.text.primary : themeObj.dark.color.text.primary)};
    ${font({weight: 600, lineHeight: 1.36, Fmin: 20, Fmax: 32})}
    &::before {
        position: absolute;
        content: '';
        border-radius: 50% 50%;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        background-image: ${props => props.theme === 'light' ? themeObj.light.gradient.dot : themeObj.dark.gradient.dot};
        @media ${themeObj.media.tablet} {
            width: 16px;
            height: 16px;
        }
        
        @media ${themeObj.media.mobile} {
            width: 12px;
            height: 12px;
        }
    }
`