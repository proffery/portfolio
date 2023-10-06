import styled from "styled-components"
import { font } from "../../../../styles/Font"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { theme } from "../../../../styles/Theme.styled"

const LearningCardTitle = styled.h3`
    position: absolute;
    top: 5%;
    left: 5%;
    transform: translate(-5%, -5%);

    ${font({weight: 700, lineHeight: 1.36, Fmin: 11, Fmax: 22})}
    color: ${props => props.color || (props => props.theme === 'light' ? theme.light.color.text.primary : theme.dark.color.text.primary)};
`

const LearningCard = styled(FlexWrapper)`
    position: relative;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.card :
        theme.dark.color.background.card
    };
    box-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.card :
        theme.dark.shadow.card
    };
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    max-width: 330px;
    border-radius: 9px;
    padding-right: 10px;
    padding-left: 12px;
    aspect-ratio: 16/9;
    @media ${theme.media.mobile} {
        max-width: 182px;
        padding-left: 7px;
        border-radius: 5px;
    }
`

export const S = {
    LearningCard,
    LearningCardTitle
}