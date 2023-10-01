import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { ThemeContext } from "../../../context/ThemeContext"
import { useContext } from "react"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"
import { skills } from "../../../data/skills"
import { SkillSet } from "./skillSet/SkillSet"
import { FlexWrapper } from "../../../components/FlexWrapper"


export const Learning = () => {
    const theme = useContext(ThemeContext)
    return (
        <StyledLearning theme={theme}>
            <StyledContainer theme={theme} direction="column" align="center">
                <SectionTitle theme={theme} color="white">Learning</SectionTitle>
                <SkillContainer theme={theme} wrap="wrap">
                    <LearningSkillsTitle>Frontend:</LearningSkillsTitle>
                    <SkillSet slides={skills.filter(skill => skill.category === 'front')} />  
                </SkillContainer>    
                <SkillContainer theme={theme} wrap="wrap">
                    <LearningSkillsTitle>Backend:</LearningSkillsTitle>
                    <SkillSet slides={skills.filter(skill => skill.category === 'back')} />
                </SkillContainer>
            </StyledContainer>
        </StyledLearning>
    )
}

const StyledLearning = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
`
const StyledContainer = styled(Container)`
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    padding: 60px 0;
    @media ${theme.media.mobile} {
        padding-top: 27px 0;
    }
`
const SkillContainer = styled(FlexWrapper)`
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
    font-size: 22px;
    font-weight: 700;
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.second :
        theme.dark.color.text.primary};
    @media ${theme.media.mobile} {
        font-size: 11px;
        padding-top: 0;
        margin-top: 10px;
    }
`
