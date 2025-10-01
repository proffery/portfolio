'use client'
import { ComponentPropsWithoutRef } from 'react'
import { useSelector } from 'react-redux'

import useIndexChange from '@/common/use-index-change'
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

const ProjectsSection = ({ id, ...rest }: Props) => {
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

  const { index, onIndexChange } = useIndexChange(projects)

  return (
    <Section id={id} {...rest}>
      <div className={classNames.sectionContainer}>
        <motion.div
          animate={sectionInView === id ? 'visible' : 'hidden'}
          className={classNames.header}
          initial={'hidden'}
          transition={{
            duration: 0.5,
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
            index={index}
            isSectionVisible={sectionInView === id}
            onIndexChange={onIndexChange}
            project={projects[index]}
          />
          <ProjectModel isSectionVisible={sectionInView === id} project={projects[index]} />
        </div>
      </div>
    </Section>
  )
}

export default withRedux(ProjectsSection)
