'use client'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'
import { useSelector } from 'react-redux'

import withRedux from '@/common/with-redux'
import { ProjectDescription } from '@/components/home-page/sections/projects/project-description/project-description'
import { ProjectModel } from '@/components/home-page/sections/projects/project-model/project-model'
import Section from '@/components/section/section'
import { Typography } from '@/components/typography/typography'
import { selectDictionary, selectSectionInView } from '@/services/app/app.selectors'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import s from './projects.module.scss'

type Props = ComponentPropsWithoutRef<typeof Section>

export type ProjectDirection = 'next' | 'previous'

const ProjectsSection = forwardRef<ElementRef<'section'>, Props>(({ id, ...rest }, ref) => {
  const classNames = {
    header: clsx(s.header),
    projectContainer: clsx(s.projectContainer),
    sectionContainer: clsx(s.sectionContainer),
  }
  const sectionInView = useSelector(selectSectionInView)
  const dict = useSelector(selectDictionary)

  const {
    homePage: {
      projectsSection: { projects, title },
    },
  } = dict

  const isSectionVisible = sectionInView === id

  const [projectIndex, setProjectIndex] = useState(0)

  const onProjectChange = (direction: ProjectDirection) => {
    if (direction === 'next') {
      if (projectIndex === projects.length - 1) {
        setProjectIndex(0)
      } else {
        setProjectIndex(prev => prev + 1)
      }
    } else {
      if (projectIndex === 0) {
        setProjectIndex(projects.length - 1)
      } else {
        setProjectIndex(prev => prev - 1)
      }
    }
  }

  return (
    <Section id={id} {...rest} ref={ref}>
      <div className={classNames.sectionContainer}>
        <motion.div
          animate={isSectionVisible ? 'visible' : 'hidden'}
          className={classNames.header}
          initial={'hidden'}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          variants={{
            hidden: { opacity: 0, x: '-100vw' },
            visible: { opacity: 1, x: 0 },
          }}
          viewport={{ once: true }}
          whileInView={'visible'}
        >
          <Typography.H3 as={'h2'}>{title}</Typography.H3>
        </motion.div>
        <div className={classNames.projectContainer}>
          <ProjectDescription
            dict={dict}
            isSectionVisible={isSectionVisible}
            onProjectChange={onProjectChange}
            project={projects[projectIndex]}
          />
          <ProjectModel isSectionVisible={isSectionVisible} project={projects[projectIndex]} />
        </div>
      </div>
    </Section>
  )
})

export default withRedux(ProjectsSection)
