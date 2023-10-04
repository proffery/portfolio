import styled from "styled-components"
import { font } from "../../../../styles/Font"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { theme } from "../../../../styles/Theme.styled"

const LearningCardTitle = styled.h3`
    position: absolute;
    top: 100%;
    ${font({weight: 700, lineHeight: 1.36, Fmin: 11, Fmax: 22})}
    color: ${props => props.color || (props => props.theme === 'light' ? theme.light.color.text.second : theme.dark.color.text.primary)};
`

const LearningCard = styled(FlexWrapper)`
    position: relative;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
    box-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.card :
        theme.dark.shadow.card
    };
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    min-width: 330px;
    min-height: 192px;
    border-radius: 9px;
    padding-right: 10px;
    padding-left: 12px;
    aspect-ratio: 16/9;
    @media ${theme.media.mobile} {
        min-width: 182px;
        min-height: 106px;
        padding-left: 7px;
        border-radius: 5px;
    }
`

export const S = {
    LearningCard,
    LearningCardTitle
}