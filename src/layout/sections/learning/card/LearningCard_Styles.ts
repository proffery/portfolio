import styled from "styled-components"
import { font } from "../../../../styles/Font"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { theme } from "../../../../styles/Theme.styled"

type LearningCardPropsTypes = {
    backgroundImage: string,
}

const LearningCardTitle = styled.h3`
    position: absolute;
    top: 100%;
    ${font({weight: 700, lineHeight: 1.36, Fmin: 11, Fmax: 22})}
    color: ${props => props.color || (props => props.theme === 'light' ? theme.light.color.text.second : theme.dark.color.text.primary)};
`

const LearningCard = styled(FlexWrapper)<LearningCardPropsTypes>`
    background-image: ${props => props.backgroundImage};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    min-width: 100px;
    min-height: 100px;
    border-radius: 10px;
    padding-right: 10px;
    padding-left: 12px;
    position: relative;
    @media ${theme.media.mobile} {
        min-width: 182px;
        min-height: 106px;
        padding-left: 7px;
    }
`

export const S = {
    LearningCard,
    LearningCardTitle
}