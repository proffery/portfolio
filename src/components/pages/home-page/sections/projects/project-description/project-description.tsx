import React from 'react'

import { Arrow } from '@/assets/components/arrow'
import { Project } from '@/common/projects'
import { IndexDirection } from '@/common/use-index-change'
import { Button } from '@/components/button/button'
import { SvgSpriteIcon } from '@/components/svg-sprite-icon/svg-sprite-icon'
import { Swiper } from '@/components/swiper/swiper'
import { Typography } from '@/components/typography/typography'
import { Dictionaries } from '@/i18n/dictionaries/en'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import s from './project-description.module.scss'

type Props = {
  dict: Dictionaries
  index: number
  isSectionVisible: boolean
  onIndexChange: (direction: IndexDirection) => void
  project: Project
}

export const ProjectDescription = ({
  dict,
  index,
  isSectionVisible,
  onIndexChange,
  project,
}: Props) => {
  const classNames = {
    arrowsContainer: clsx(s.arrowsContainer),
    backArrow: clsx(s.backArrow),
    descriptionContainer: clsx(s.descriptionContainer),
    iconContainer: clsx(s.iconContainer),
    linkIcon: clsx(s.linkIcon),
    linksContainer: clsx(s.linksContainer),
    technologiesContainer: clsx(s.technologiesContainer),
  }

  const {
    homePage: { projectsSection },
  } = dict

  return (
    <motion.div
      animate={isSectionVisible ? 'visible' : 'hidden'}
      className={classNames.descriptionContainer}
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
      <Typography.H5 as={'h3'}>{project.title}</Typography.H5>
      <Swiper index={index} onIndexChange={onIndexChange} sectionArr={projectsSection.projects}>
        <Typography.Body1>{project.description}</Typography.Body1>
      </Swiper>
      <div className={classNames.linksContainer}>
        {project.codeUrl && (
          <Button as={'a'} href={project.codeUrl} target={'_blank'} variant={'text'}>
            <Typography.Link2 as={'span'}>{projectsSection.codeLink}</Typography.Link2>
            <Arrow className={classNames.linkIcon} height={20} width={20} />
          </Button>
        )}
        {project.demoUrl && (
          <Button as={'a'} href={project.demoUrl} target={'_blank'} variant={'text'}>
            <Typography.Link2 as={'span'}>{projectsSection.demoLink}</Typography.Link2>
            <Arrow className={classNames.linkIcon} height={20} width={20} />
          </Button>
        )}
      </div>
      <div className={classNames.technologiesContainer}>
        {project.techIds.map((technology, index) => (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className={classNames.iconContainer}
            exit={{ opacity: 0, x: '100vw' }}
            initial={{ opacity: 0, x: '100vw' }}
            key={technology + new Date()}
            transition={{
              delay: index / 5,
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            <SvgSpriteIcon iconId={technology} spriteUrl={projectsSection.techSpriteUrl} />
          </motion.div>
        ))}
      </div>
      <div className={classNames.arrowsContainer}>
        <Button
          disabled={project.id === 1}
          onClick={() => onIndexChange('previous')}
          variant={'text'}
        >
          <Arrow className={classNames.backArrow} height={48} width={48} />
        </Button>
        <Typography.Caption>
          {project.id + '/' + projectsSection.projects.length}
        </Typography.Caption>
        <Button
          disabled={project.id === projectsSection.projects.length}
          onClick={() => onIndexChange('next')}
          variant={'text'}
        >
          <Arrow height={48} width={48} />
        </Button>
      </div>
    </motion.div>
  )
}
