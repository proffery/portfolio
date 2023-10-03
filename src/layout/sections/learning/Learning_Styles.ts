import styled from "styled-components"
import { theme } from "../../../styles/Theme.styled"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { font } from "../../../styles/Font"

const Learning = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
`
const LearningContainer = styled(Container)`
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    padding: 60px 0;
    @media ${theme.media.mobile} {
        padding-top: 27px 0;
    }
`
const LearningSkillContainer = styled(FlexWrapper)`
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    width: 100%;
    justify-content: space-between;
    @media ${theme.media.mobile} {
        justify-content: center;
    }
`
const LearningSkillsTitle = styled.h3`
    display: flex;
    min-width: 30%;
    padding: 30px;
    padding-top: 0;
    ${font({weight: 700, lineHeight: 1.36, Fmin: 11, Fmax: 22})}
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.second :
        theme.dark.color.text.primary};
    @media ${theme.media.mobile} {
        padding-top: 0;
        margin-top: 10px;
    }
`

export const S = {
    Learning,
    LearningContainer,
    LearningSkillContainer,
    LearningSkillsTitle
}