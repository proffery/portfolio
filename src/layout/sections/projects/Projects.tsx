import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Button } from "../../../components/button/Button.styled"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { ProgectsCard } from "./card/ProjectsCard"
import project1 from "../../../assets/images/Project1.webp"
import project2 from "../../../assets/images/Project2.webp"
import project3 from "../../../assets/images/Project3.webp"
import project4 from "../../../assets/images/Project4.webp"
import decorationDots from "../../../assets/images/decorations-dots.svg"
import { DecorationDot } from "../../../components/decoration/DecorationDot"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { theme } from "../../../styles/Theme.styled"
import { Container } from "../../../components/Container"

export const Projects = () => {
    const theme = useContext(ThemeContext)
    return (
        <StyledProjects id="projects" theme={theme}>
            <Container direction="column">
            <SectionTitle theme={theme}>Projects<DecorationDot /></SectionTitle>
                <StyledProjectsMenu align="center" justify="center" gap="40px">
                    <Button theme={theme} padding="7px" borderWidth="3px" borderStyle="solid">All</Button>
                    <Button theme={theme} padding="7px" borderWidth="3px" borderStyle="solid">Landing Page</Button>
                    <Button theme={theme} padding="7px" borderWidth="3px" borderStyle="solid">React</Button>
                    <Button theme={theme} padding="7px" borderWidth="3px" borderStyle="solid">SPA</Button>
                </StyledProjectsMenu>
                <FlexWrapper wrap="wrap" align="center" justify="center" gap="40px">
                    <ProgectsCard imageUrl={project1} title="Story motion for sale English cources" />
                    <ProgectsCard imageUrl={project2} title="Story motion for sale English cources" />
                    <ProgectsCard imageUrl={project3} title="Story motion for sale English cources" />
                    <ProgectsCard imageUrl={project4} title="Story motion for sale English cources" />
                    <ProgectsCard imageUrl={project1} title="Story motion for sale English cources" />
                    <ProgectsCard imageUrl={project2} title="Story motion for sale English cources" />
                    <ProgectsCard imageUrl={project3} title="Story motion for sale English cources" />
                    <ProgectsCard imageUrl={project4} title="Story motion for sale English cources" />
                </FlexWrapper>
            </Container>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${decorationDots});
    background-repeat: no-repeat;
    background-position: 20% 7%;
    padding-bottom: 60px;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
`

const StyledProjectsMenu = styled(FlexWrapper)`
    margin-bottom: 40px;
`





