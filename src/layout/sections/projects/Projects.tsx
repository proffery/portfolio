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

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects<DecorationDot /></SectionTitle>
            <StyledProjectsMenu align="center" justify="center" gap="40px">
                <Button background="white" color="black" padding="7px" borderWidth="3px" borderColor="blue" borderStyle="solid">All</Button>
                <Button background="white" color="black" padding="7px" borderWidth="3px" borderColor="blue" borderStyle="solid">Landing Page</Button>
                <Button background="white" color="black" padding="7px" borderWidth="3px" borderColor="blue" borderStyle="solid">React</Button>
                <Button background="white" color="black" padding="7px" borderWidth="3px" borderColor="blue" borderStyle="solid">SPA</Button>
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
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #d3eeee;
    background-image: url(${decorationDots});
    background-repeat: no-repeat;
    background-position: 20% 7%;
    padding-bottom: 60px;
`

const StyledProjectsMenu = styled(FlexWrapper)`
    margin-bottom: 40px;
`





