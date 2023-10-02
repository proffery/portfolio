import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Button } from "../../../components/button/Button.styled"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { ProgectsCard } from "./card/ProjectsCard"
import decorationDots from "../../../assets/images/decorations-dots.svg"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { theme } from "../../../styles/Theme.styled"
import { Container } from "../../../components/Container"
import { projects } from "../../../data/projects"
import { font } from "../../../styles/Font"

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
            <SectionTitle theme={themeName}>Projects</SectionTitle>
                <FlexWrapper align="center" justify="center" wrap="wrap" gap="40px">
                    {categories.map((category, index) => { 
                        return <CategoryButton 
                            key={index} 
                            theme={themeName} 
                            padding="7px" 
                            borderWidth="3px" 
                            borderStyle="solid"
                            hoverColor={theme.light.color.text.second}
                            color={category === activeCategory ? 
                                (themeName === 'light' ? theme.light.color.text.second : theme.dark.color.text.primary) :
                                (themeName === 'light' ? theme.light.color.text.primary : theme.dark.color.text.primary)
                            }
                            background={category === activeCategory ? 
                                (themeName === 'light' ? theme.light.color.background.second : theme.dark.color.background.second) :
                                (themeName === 'light' ? theme.light.color.background.primary : theme.dark.color.background.primary)
                            }
                            onClick={() => {setActiveCategory(category)}}
                            >
                                {category}
                        </CategoryButton>
                    })}
                    
                </FlexWrapper>
                <StyledProjectWrapper wrap="wrap" align="center" justify="center">
                    {filteredProjects.map((project, index) => <ProgectsCard 
                        key={index + project.projectCategory}
                        imageUrl={project.imageUrl} 
                        title={project.projectTitle}
                        githubUrl={project.projectCode}
                        previewUrl={project.projectDemo}
                    />)}
                </StyledProjectWrapper>
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
`
const StyledContainer = styled(Container)`
    background-image: url(${decorationDots});
    background-repeat: no-repeat;
    background-position: top left;
`
const StyledProjectWrapper = styled(FlexWrapper)`
    margin-top: 40px;
    max-height: 100vh;
    overflow-y: auto;
    gap: 38px;
    @media ${theme.media.mobile} {
        gap: 22px;
    }
`

const CategoryButton = styled(Button)`
    ${font({weight: 400, lineHeight: 1.36, Fmin: 12, Fmax: 20})}
    min-width: 160px;
    @media ${theme.media.tablet} {
        min-width: 110px;
    }
    @media ${theme.media.mobile} {
        min-width: 96px;
    }
`




