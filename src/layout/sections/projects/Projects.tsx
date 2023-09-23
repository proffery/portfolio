import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Button } from "../../../components/button/Button.styled"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { ProgectsCard } from "./card/ProjectsCard"
import decorationDots from "../../../assets/images/decorations-dots.svg"
import { DecorationDot } from "../../../components/decoration/DecorationDot"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { theme } from "../../../styles/Theme.styled"
import { Container } from "../../../components/Container"
import { projects } from "../../../data/projects"

export const Projects = () => {
    const themeName = useContext(ThemeContext)
    const [filteredProjects, setFilteredProjects] = useState([...projects])
    const [activeCategory, setActiveCategory] = useState('All')
    const [categories, setCategories] = useState(['All'])
    //const [activeCategories, setActiveCategories] = useState([])
    useEffect(() => {
        const allCategories = [...categories]
        projects.forEach(project => {!allCategories.includes(project.projectCategory) && (allCategories.push(project.projectCategory))})
        setCategories(allCategories)
    }, [])

    useEffect(() => {
        activeCategory === 'All' ? setFilteredProjects([...projects]) : setFilteredProjects(projects.filter(project => project.projectCategory === activeCategory))
    }, [activeCategory])

    return (
        <StyledProjects id="projects" theme={themeName}>
            <StyledContainer direction="column">
            <SectionTitle theme={themeName}>Projects<DecorationDot /></SectionTitle>
                <StyledProjectsMenu align="center" justify="center" wrap="wrap" gap="40px">
                    {categories.map((category, index) => { 
                        return <Button 
                            key={index} 
                            theme={themeName} 
                            padding="7px" 
                            borderWidth="3px" 
                            borderStyle="solid"
                            background={category === activeCategory ? 
                                (themeName === 'light' ? theme.light.color.background.second : theme.dark.color.background.second) :
                                (themeName === 'light' ? theme.light.color.background.primary : theme.dark.color.background.primary)
                            }
                            onClick={() => {setActiveCategory(category)}}
                            >
                                {category}
                        </Button>
                    })}
                    
                </StyledProjectsMenu>
                <FlexWrapper wrap="wrap" align="center" justify="center" gap="40px">
                    {filteredProjects.map((project, index) => <ProgectsCard 
                        key={index + project.projectCategory}
                        imageUrl={project.imageUrl} 
                        title={project.projectTitle}
                        githubUrl={project.projectCode}
                        previewUrl={project.projectDemo}
                    />)}
                </FlexWrapper>
            </StyledContainer>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
    padding: 60px 0;
`
const StyledContainer = styled(Container)`
    background-image: url(${decorationDots});
    background-repeat: no-repeat;
    background-position: top left;
`

const StyledProjectsMenu = styled(FlexWrapper)`
    margin-bottom: 40px;
`





