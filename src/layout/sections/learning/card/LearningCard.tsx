import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { ThemeContext } from "../../../../context/ThemeContext"
import { useContext } from "react"
import { theme } from "../../../../styles/Theme.styled"
import { SectionTitle } from "../../../../components/SectionTitle.styled"

type LearningCardPropsType = {
    imageUrl: string,
    title: string
}

export const LerningCard = (props: LearningCardPropsType) => {
    const theme = useContext(ThemeContext)
    return (
        <StyledLearningCard theme={theme} backgroundImage={`url("${props.imageUrl}")`} 
            height="192px" 
            width="22%"
            align="end"
            justify="end"
        >
            <StyledTitle theme={theme}>{props.title}</StyledTitle>
        </StyledLearningCard>
    )
}

type StyledLearningCarPropsType = {
    backgroundImage: string,
}

const StyledTitle = styled(SectionTitle)`
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 136%;
    text-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.text :
        theme.dark.shadow.text
    };
    padding: 0;
    `

const StyledLearningCard = styled(FlexWrapper)<StyledLearningCarPropsType>`
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.card :
        theme.dark.color.background.card
    };
    box-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.card :
        theme.dark.shadow.card
    };
    background-image: ${props => props.backgroundImage};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    min-width: 330px;
    border-radius: 10px;
    padding-right: 10px;
    `