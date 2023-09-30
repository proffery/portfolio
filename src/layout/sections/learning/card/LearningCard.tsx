import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { ThemeContext } from "../../../../context/ThemeContext"
import { useContext } from "react"
import { theme } from "../../../../styles/Theme.styled"

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
            justify="end"
        >
            {/* <StyledTitle theme={theme}>{props.title}</StyledTitle> */}
        </StyledLearningCard>
    )
}

type StyledLearningCarPropsType = {
    backgroundImage: string,
}

const StyledTitle = styled.h3`
    font-size: 22px;
    color: ${props => props.color || (props => props.theme === 'light' ? theme.light.color.text.primary : theme.dark.color.text.primary)};
    font-weight: 700;
    line-height: 136%;
    text-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.text :
        theme.dark.shadow.text
    };
    @media ${theme.media.mobile} {
        font-size: 11px;
    }
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
    min-height: 192px;
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