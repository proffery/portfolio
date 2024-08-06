import styled from "styled-components"
import { themeObj } from "../../../common/const/themeObj"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { font } from "../../../styles/Font"

const Learning = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme === 'light' ?
        themeObj.light.color.background.primary :
        themeObj.dark.color.background.primary
    };
`
const LearningContainer = styled(Container)`
    position: relative;
    background-color: ${props => props.theme === 'light' ?
        themeObj.light.color.background.second :
        themeObj.dark.color.background.second
    };
    padding: 60px 0;
    @media ${themeObj.media.mobile} {
        padding: 27px 0;
    }
    `
const LearningSkillContainer = styled(FlexWrapper)`
    width: 100%;
    background-color: ${props => props.theme === 'light' ?
        themeObj.light.color.background.second :
        themeObj.dark.color.background.second
    };
`
const LearningSkillsTitle = styled.h3`
    display: flex;
    padding: 0 30px 30px;
    ${font({weight: 700, lineHeight: 1.36, Fmin: 16, Fmax: 22})}
    color: ${props => props.theme === 'light' ?
            themeObj.light.color.text.second :
            themeObj.dark.color.text.primary};
    @media ${themeObj.media.mobile} {
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