'use client'
import { ComponentPropsWithoutRef, useEffect, useState } from 'react'
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

export type ProjectDirection = 'next' | 'previous'

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
  const [isSectionVisible, setIsSectionVisible] = useState(false)

  const { index, onIndexChange } = useIndexChange(projects)

  useEffect(() => {
    setIsSectionVisible(sectionInView === id)
  }, [sectionInView, id])

  return (
    <Section id={id} {...rest}>
      <div className={classNames.sectionContainer}>
        <motion.div
          animate={isSectionVisible ? 'visible' : 'hidden'}
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
            isSectionVisible={isSectionVisible}
            onIndexChange={onIndexChange}
            project={projects[index]}
          />
          <ProjectModel isSectionVisible={isSectionVisible} project={projects[index]} />
        </div>
      </div>
    </Section>
  )
}

export default withRedux(ProjectsSection)
