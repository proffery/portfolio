import styled from "styled-components"
import { theme } from "../../../styles/Theme.styled"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { font } from "../../../styles/Font"

const Learning = styled.section`
    display: flex;
    position: relative;
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
        padding: 27px 0;
    }
    `
const LearningSkillContainer = styled(FlexWrapper)`
    width: 100%;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
`
const LearningSkillsTitle = styled.h3`
    display: flex;
    padding: 0 30px 30px;
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