import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { ThemeContext } from "../../../../context/ThemeContext"
import { useContext } from "react"
import { theme } from "../../../../styles/Theme.styled"
import { font } from "../../../../styles/Font"

type LearningCardPropsType = {
    imageUrl: string,
    title: string,
}

export const LerningCard = (props: LearningCardPropsType) => {
    const theme = useContext(ThemeContext)
    return (
        <StyledLearningCard 
            theme={theme} 
            backgroundImage={`url("${props.imageUrl}")`} 
            align="end"
            justify="center"
        >
            <StyledTitle theme={theme}>{props.title}</StyledTitle>
        </StyledLearningCard>
    )
}

type StyledLearningCarPropsType = {
    backgroundImage: string,
}

const StyledTitle = styled.h3`
    position: absolute;
    top: 100%;
    ${font({weight: 700, lineHeight: 1.36, Fmin: 11, Fmax: 22})}
    color: ${props => props.color || (props => props.theme === 'light' ? theme.light.color.text.second : theme.dark.color.text.primary)};
`

const StyledLearningCard = styled(FlexWrapper)<StyledLearningCarPropsType>`
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