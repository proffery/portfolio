'use client'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { useSelector } from 'react-redux'

import withRedux from '@/common/with-redux'
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

const ProjectsSection = forwardRef<ElementRef<'section'>, Props>(
  ({ dict, id, locale, ...rest }, ref) => {
    const classNames = {
      descriptionContainer: clsx(s.descriptionContainer),
      modelContainer: clsx(s.modelContainer),
      rowContainer: clsx(s.rowContainer),
      section: clsx(s.section),
    }

    const {
      homePage: { projects },
    } = dict

    const sectionInView = useSelector(selectSectionInView)
    const isSectionVisible = sectionInView === id

    return (
      <Section id={id} {...rest} className={classNames.section} ref={ref}>
        {isSectionVisible && (
          <>
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-100vw' }}
              initial={{ opacity: 0, x: '-100vw' }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              <Typography.H3 as={'h2'}>{projects.title}</Typography.H3>
            </motion.div>
            <div className={classNames.rowContainer}>
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
                <Typography.Body1>{projects.title}</Typography.Body1>
              </motion.div>
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                className={classNames.modelContainer}
                exit={{ opacity: 0, x: '100vw' }}
                initial={{ opacity: 0, x: '100vw' }}
                transition={{
                  duration: 2.5,
                  ease: 'easeInOut',
                }}
              >
                Model
              </motion.div>
            </div>
          </>
        )}
      </Section>
    )
  }
)

export default withRedux(ProjectsSection)
