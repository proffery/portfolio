import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { ProgectsCard } from "./card/ProjectsCard"
import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { theme } from "../../../styles/Theme.styled"
import { projects } from "../../../data/projects"
import { S } from "./Projects_Styles"
import { Fade } from "react-awesome-reveal"

export const Projects: React.FC = () => {
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
        <S.Projects id="projects" theme={themeName}>
            <S.ProjectsContainer direction="column">
            <SectionTitle theme={themeName}>Projects</SectionTitle>
                <FlexWrapper align="center" justify="center" wrap="wrap" gap="40px">
                    <Fade cascade duration={700} triggerOnce>
                        {categories.map((category, index) => { 
                            return <S.CategoryButton 
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
                                >{category}
                            </S.CategoryButton>
                        })}

                    </Fade>
                </FlexWrapper>
                    <S.ProjectWrapper wrap="wrap" align="center" justify="center">
                            {filteredProjects.map((project, index) =>     
                            <ProgectsCard 
                                key={index + project.projectCategory}
                                imageUrl={project.imageUrl} 
                                title={project.projectTitle}
                                githubUrl={project.projectCode}
                                previewUrl={project.projectDemo}
                                />
                                )}
                    </S.ProjectWrapper>
            </S.ProjectsContainer>
        </S.Projects>
    )
}


