'use client'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'
import { useSelector } from 'react-redux'

import withRedux from '@/common/with-redux'
import { ProjectDescription } from '@/components/home-page/sections/projects/project-description/project-description'
import { ProjectModel } from '@/components/home-page/sections/projects/project-model/project-model'
import Section from '@/components/section/section'
import { Typography } from '@/components/typography/typography'
import { Dictionaries } from '@/i18n/dictionaries/en'
import { Locale } from '@/i18n/get-dictionaries'
import { selectSectionInView } from '@/services/app/app.selectors'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import s from './projects.module.scss'

type Props = {
  dict: Dictionaries
  locale: Locale
} & ComponentPropsWithoutRef<typeof Section>

export type ProjectDirection = 'next' | 'previous'

const ProjectsSection = forwardRef<ElementRef<'section'>, Props>(
  ({ dict, id, locale, ...rest }, ref) => {
    const classNames = {
      projectContainer: clsx(s.projectContainer),
      section: clsx(s.section),
    }

    const {
      homePage: {
        projectsSection: { projects, title },
      },
    } = dict

    const sectionInView = useSelector(selectSectionInView)
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
      <Section id={id} {...rest} className={classNames.section} ref={ref}>
        {isSectionVisible && (
          <>
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-100vw' }}
              initial={{ opacity: 0, x: '-100vw' }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}
            >
              <Typography.H3 as={'h2'}>{title}</Typography.H3>
            </motion.div>
            <div className={classNames.projectContainer}>
              <ProjectDescription
                dict={dict}
                onProjectChange={onProjectChange}
                project={projects[projectIndex]}
              />
              <ProjectModel project={projects[projectIndex]} />
            </div>
          </>
        )}
      </Section>
    )
  }
)

export default withRedux(ProjectsSection)
