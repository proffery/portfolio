import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { ThemeContext } from "../../../context/ThemeContext"
import { useContext } from "react"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"
import { skills } from "../../../data/skills"
import { EmblaCarousel } from "./carousel/carousel"
import { EmblaOptionsType } from 'embla-carousel-react'


export const Learning = () => {
    const theme = useContext(ThemeContext)
    const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
    return (
        <StyledLearning theme={theme}>
            <StyledContainer theme={theme} direction="column" align="center" justify="center">
                <SectionTitle theme={theme} color="white">Learning</SectionTitle>
                
                <LearningSkillsTitle>Web</LearningSkillsTitle>
                <EmblaCarousel slides={skills.filter(skill => skill.category === 'Web')} options={OPTIONS}/>
                
                <LearningSkillsTitle>Technology</LearningSkillsTitle>
                <EmblaCarousel slides={skills.filter(skill => skill.category === 'Technology')} options={OPTIONS}/>
               
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
    overflow: hidden;
    padding: 60px 0;
    @media ${theme.media.mobile} {
        padding: 27px 0;
    }
`

const LearningSkillsTitle = styled.h3`
    margin: 0 auto 0 0;
    padding-left: 10px;
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.second :
        theme.dark.color.text.primary};
    margin-top: 10px;
    @media ${theme.media.mobile} {
        font-size: 11px;
        padding-left: 6px;
    }
`
