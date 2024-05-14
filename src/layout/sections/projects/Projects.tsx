import React, { useContext, useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { ThemeContext } from "../../../common/context/ThemeContext"
import { projects } from "../../../common/data/projects"
import { theme } from "../../../styles/Theme.styled"
import { ProgectsCard } from "./card/ProjectsCard"
import { S } from "./Projects_Styles"

export const Projects: React.FC = () => {
    const themeName = useContext(ThemeContext)
    const [filteredProjects, setFilteredProjects] = useState([...projects])
    const [activeCategory, setActiveCategory] = useState('React')
    const [categories, setCategories] = useState(['All'])
    useEffect(() => {
        const allCategories = [...categories]
        projects.forEach(project => { !allCategories.includes(project.projectCategory) && (allCategories.unshift(project.projectCategory)) })
        setCategories(allCategories)
    }, [])

    useEffect(() => {
        activeCategory === 'All' ? setFilteredProjects([...projects]) : setFilteredProjects(projects.filter(project => project.projectCategory === activeCategory))
    }, [activeCategory])

    return (
        <S.Projects id="projects" theme={themeName}>
            <S.ProjectsContainer theme={themeName} direction="column">
                <SectionTitle theme={themeName}>Projects</SectionTitle>
                <FlexWrapper align="center" justify="center" wrap="wrap" gap="20px">
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
                                    (themeName === 'light' ?
                                        theme.light.color.text.second : theme.dark.color.text.primary) :
                                    (themeName === 'light' ?
                                        theme.light.color.text.primary : theme.dark.color.text.primary)
                                }
                                background={category === activeCategory ?
                                    (themeName === 'light' ?
                                        theme.light.color.background.second : theme.dark.color.background.second) :
                                    (themeName === 'light' ?
                                        theme.light.color.background.primary : theme.dark.color.background.primary)
                                }
                                onClick={() => { setActiveCategory(category) }}
                            >{category}
                            </S.CategoryButton>
                        })}

                    </Fade>
                </FlexWrapper>
                <S.ProjectWrapper wrap="wrap" align="center" justify="center">
                    {filteredProjects.slice(0).reverse().map((project, index) =>
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


