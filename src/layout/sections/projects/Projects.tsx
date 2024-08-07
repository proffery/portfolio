import { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'

import { projects } from '@/common/const/data/projects'
import { themeObj } from '@/common/const/themeObj'
import { useAppContext } from '@/common/context/appContext'
import { FlexWrapper } from '@/components/FlexWrapper'
import { SectionTitle } from '@/components/SectionTitle.styled'

import { S } from './Projects_Styles'
import { ProjectsCard } from './card/ProjectsCard'

export const Projects = () => {
  const { theme } = useAppContext()
  const [filteredProjects, setFilteredProjects] = useState([...projects])
  const [activeCategory, setActiveCategory] = useState('React')
  const [categories, setCategories] = useState(['All'])

  useEffect(() => {
    const allCategories = [...categories]

    projects.forEach(project => {
      !allCategories.includes(project.projectCategory) &&
        allCategories.unshift(project.projectCategory)
    })
    setCategories(allCategories)
  }, [])

  useEffect(() => {
    activeCategory === 'All'
      ? setFilteredProjects([...projects])
      : setFilteredProjects(projects.filter(project => project.projectCategory === activeCategory))
  }, [activeCategory])

  return (
    <S.Projects id={'projects'} theme={theme}>
      <S.ProjectsContainer direction={'column'} theme={theme}>
        <SectionTitle theme={theme}>Projects</SectionTitle>
        <FlexWrapper align={'center'} gap={'20px'} justify={'center'} wrap={'wrap'}>
          <Fade cascade duration={700} triggerOnce>
            {categories.map((category, index) => {
              return (
                <S.CategoryButton
                  background={
                    category === activeCategory
                      ? themeObj[`${theme}`].color.background.second
                      : themeObj[`${theme}`].color.background.primary
                  }
                  border_style={'solid'}
                  border_width={'3px'}
                  color={
                    category === activeCategory
                      ? themeObj[`${theme}`].color.text.second
                      : themeObj[`${theme}`].color.text.primary
                  }
                  hover_color={themeObj.light.color.text.second}
                  key={index}
                  onClick={() => {
                    setActiveCategory(category)
                  }}
                  padding={'7px'}
                  theme={theme}
                >
                  {category}
                </S.CategoryButton>
              )
            })}
          </Fade>
        </FlexWrapper>
        <S.ProjectWrapper align={'center'} justify={'center'} wrap={'wrap'}>
          {filteredProjects
            .slice(0)
            .reverse()
            .map((project, index) => (
              <ProjectsCard
                githubUrl={project.projectCode}
                imageUrl={project.imageUrl}
                key={index + project.projectCategory}
                previewUrl={project.projectDemo}
                title={project.projectTitle}
              />
            ))}
        </S.ProjectWrapper>
      </S.ProjectsContainer>
    </S.Projects>
  )
}
