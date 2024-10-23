'use client'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { useSelector } from 'react-redux'

import withRedux from '@/common/with-redux'
import { Button } from '@/components/button/button'
import Section from '@/components/section/section'
import { Typography } from '@/components/typography/typography'
import { Locale } from '@/i18n/dictionaries'
import { Dictionaries } from '@/i18n/dictionaries/en'
import { selectSectionInView } from '@/services/app/app.selectors'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'

import s from './about.module.scss'

type Props = {
  dict: Dictionaries
  locale: Locale
} & ComponentPropsWithoutRef<typeof Section>

const AboutSection = forwardRef<ElementRef<'section'>, Props>(
  ({ dict, id, locale, ...rest }, ref) => {
    const classNames = {
      avatar: clsx(s.avatar),
      descriptionContainer: clsx(s.descriptionContainer),
      imageContainer: clsx(s.imageContainer),
      resumeLink: clsx(s.resumeLink),
      section: clsx(s.section),
    }

    const {
      homePage: { about },
    } = dict

    const sectionInView = useSelector(selectSectionInView)
    const isSectionVisible = sectionInView === id

    return (
      <Section id={id} {...rest} className={classNames.section} ref={ref}>
        {isSectionVisible && (
          <>
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className={classNames.imageContainer}
              exit={{ opacity: 0, x: '-100vw' }}
              initial={{ opacity: 0, x: '-100vw' }}
              key={id}
              transition={{
                duration: 2,
                ease: 'circInOut',
              }}
            >
              <Image
                alt={'Dmitry photo'}
                className={classNames.avatar}
                height={640}
                src={'/images/avatar.webp'}
                width={640}
              />
            </motion.div>
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className={classNames.descriptionContainer}
              exit={{ opacity: 0, x: '100vw' }}
              initial={{ opacity: 0, x: '100vw' }}
              key={id}
              transition={{
                duration: 2,
                ease: 'circInOut',
              }}
            >
              <Typography.H3 as={'h2'}>{about.title}</Typography.H3>
              <Typography.Body1>{about.description}</Typography.Body1>
              <Button
                as={'a'}
                className={classNames.resumeLink}
                download
                href={`/cv/cv-${locale}.pdf`}
              >
                {about.resumeLink}
              </Button>
            </motion.div>
          </>
        )}
      </Section>
    )
  }
)

export default withRedux(AboutSection)
