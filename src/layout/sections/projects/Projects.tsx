import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import project1 from "../../../assets/images/Project1.webp"
import project2 from "../../../assets/images/Project2.webp"
import project3 from "../../../assets/images/Project3.webp"
import project4 from "../../../assets/images/Project4.webp"
import { Button } from "../../../components/button/Button.styled"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { Card } from "./card/Card"
import decorationDots from "../../../assets/images/decorations-dots.svg"

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrapper align="center" justify="center" gap="40px">
                <Button background="white" color="black" padding="6px" borderWidth="3px" borderColor="blue" borderStyle="solid">Story</Button>
                <Button background="white" color="black" padding="6px" borderWidth="3px" borderColor="blue" borderStyle="solid">Post</Button>
                <Button background="white" color="black" padding="6px" borderWidth="3px" borderColor="blue" borderStyle="solid">Banner</Button>
            </FlexWrapper>
            <FlexWrapper wrap="wrap" align="center" justify="center" gap="40px">
                <Card imageUrl={project1} title="Story motion for sale English cources"/>
                <Card imageUrl={project2} title="Story motion for sale English cources"/>
                <Card imageUrl={project3} title="Story motion for sale English cources"/>
                <Card imageUrl={project4} title="Story motion for sale English cources"/>
                <Card imageUrl={project1} title="Story motion for sale English cources"/>
                <Card imageUrl={project2} title="Story motion for sale English cources"/>
                <Card imageUrl={project3} title="Story motion for sale English cources"/>
                <Card imageUrl={project4} title="Story motion for sale English cources"/>
            </FlexWrapper>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #d3eeee;
    min-height: 100vh;
    gap: 40px;
    padding: 3rem;
    background-image: url(${decorationDots});
    background-repeat: no-repeat;
    background-position: 20% 7%;
`





