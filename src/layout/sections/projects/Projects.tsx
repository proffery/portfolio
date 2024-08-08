import { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

import { projectsEn, projectsRu } from '@/common/const/data/projects'
import { themeObj } from '@/common/const/themeObj'
import { useAppContext } from '@/common/context/appContext'
import { extractProjectsCategories } from '@/common/utils/extractProjectsCategories'
import { FlexWrapper } from '@/components/FlexWrapper'
import { SectionTitle } from '@/components/SectionTitle.styled'

import { S } from './Projects_Styles'
import { ProjectsCard } from './card/ProjectsCard'

export const Projects = () => {
  const { theme } = useAppContext()

  const {
    i18n: { language },
    t,
  } = useTranslation()

  const [filteredProjects, setFilteredProjects] = useState(
    language === 'en' ? projectsEn : projectsRu
  )

  const [activeCategory, setActiveCategory] = useState('')
  const [categories, setCategories] = useState<string[]>([])

  const projects = language === 'en' ? projectsEn : projectsRu

  useEffect(() => {
    const allCategory = language === 'en' ? ['All'] : ['Все']

    setActiveCategory(language === 'en' ? 'React' : 'Реакт')

    const projectsCategory: string[] = extractProjectsCategories(projects).reverse()

    setCategories([...projectsCategory, ...allCategory])
  }, [language])

  useEffect(() => {
    activeCategory === 'All' || activeCategory === 'Все'
      ? setFilteredProjects(projects)
      : setFilteredProjects(projects.filter(project => project.projectCategory === activeCategory))
  }, [activeCategory, language])

  return (
    <S.Projects id={'projects'} theme={theme}>
      <S.ProjectsContainer direction={'column'} theme={theme}>
        <SectionTitle theme={theme}>{t('projects.title')}</SectionTitle>
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
                      ? themeObj[`${theme}`].color.text.primary
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
