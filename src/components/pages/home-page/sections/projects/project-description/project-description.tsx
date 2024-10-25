import { Arrow } from '@/assets/components/arrow'
import { Project } from '@/common/projects'
import { Button } from '@/components/button/button'
import { ProjectDirection } from '@/components/home-page/sections/projects/projects-section'
import { SvgSpriteIcon } from '@/components/svg-sprite-icon/svg-sprite-icon'
import { Typography } from '@/components/typography/typography'
import { Dictionaries } from '@/i18n/dictionaries/en'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import s from './project-description.module.scss'

type Props = {
  dict: Dictionaries
  onProjectChange: (direction: ProjectDirection) => void
  project: Project
}

export const ProjectDescription = ({ dict, onProjectChange, project }: Props) => {
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

  const handleProjectChange = (direction: ProjectDirection) => {
    onProjectChange(direction)
  }

  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      className={classNames.descriptionContainer}
      exit={{ opacity: 0, x: '-100vw' }}
      initial={{ opacity: 0, x: '-100vw' }}
      transition={{
        duration: 1.5,
        ease: 'easeInOut',
      }}
    >
      <Typography.H4 as={'h3'}>{project.title}</Typography.H4>
      <div>
        <Typography.Body1>{project.description}</Typography.Body1>
      </div>
      <div className={classNames.linksContainer}>
        {project.codeUrl && (
          <Button as={'a'} href={project.codeUrl} target={'_blank'} variant={'text'}>
            {projectsSection.codeLink}
            <Arrow className={classNames.linkIcon} height={20} width={20} />
          </Button>
        )}
        {project.demoUrl && (
          <Button as={'a'} href={project.demoUrl} target={'_blank'} variant={'text'}>
            {projectsSection.demoLink}
            <Arrow className={classNames.linkIcon} height={20} width={20} />
          </Button>
        )}
      </div>
      <div className={classNames.technologiesContainer}>
        {project.techIds.map((technology: string) => (
          <div className={classNames.iconContainer} key={technology}>
            <SvgSpriteIcon iconId={technology} spriteUrl={projectsSection.techSpriteUrl} />
          </div>
        ))}
      </div>
      <div className={classNames.arrowsContainer}>
        <Button onClick={() => handleProjectChange('previous')} variant={'text'}>
          <Arrow className={classNames.backArrow} height={48} width={48} />
        </Button>
        <Button onClick={() => handleProjectChange('next')} variant={'text'}>
          <Arrow height={48} width={48} />
        </Button>
      </div>
    </motion.div>
  )
}
