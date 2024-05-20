import React, { useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { useAppContext } from "../../../common/context/appContext"
import { projects } from "../../../common/const/data/projects"
import { themeObj } from "../../../common/const/themeObj"
import { ProjectsCard } from "./card/ProjectsCard"
import { S } from "./Projects_Styles"

export const Projects = () => {
    const { theme } = useAppContext()
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
        <S.Projects id="projects" theme={theme}>
            <S.ProjectsContainer theme={theme} direction="column">
                <SectionTitle theme={theme}>Projects</SectionTitle>
                <FlexWrapper align="center" justify="center" wrap="wrap" gap="20px">
                    <Fade cascade duration={700} triggerOnce>
                        {categories.map((category, index) => {
                            return <S.CategoryButton
                                key={index}
                                theme={theme}
                                padding="7px"
                                borderWidth="3px"
                                borderStyle="solid"
                                hoverColor={themeObj.light.color.text.second}
                                color={category === activeCategory ?
                                    (theme === 'light' ?
                                        themeObj.light.color.text.second : themeObj.dark.color.text.primary) :
                                    (theme === 'light' ?
                                        themeObj.light.color.text.primary : themeObj.dark.color.text.primary)
                                }
                                background={category === activeCategory ?
                                    (theme === 'light' ?
                                        themeObj.light.color.background.second : themeObj.dark.color.background.second) :
                                    (theme === 'light' ?
                                        themeObj.light.color.background.primary : themeObj.dark.color.background.primary)
                                }
                                onClick={() => { setActiveCategory(category) }}
                            >{category}
                            </S.CategoryButton>
                        })}
                    </Fade>
                </FlexWrapper>
                <S.ProjectWrapper wrap="wrap" align="center" justify="center">
                    {filteredProjects.slice(0).reverse().map((project, index) =>
                        <ProjectsCard
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


