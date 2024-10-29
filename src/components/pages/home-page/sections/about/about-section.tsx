'use client'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { useSelector } from 'react-redux'

import withRedux from '@/common/with-redux'
import { Button } from '@/components/button/button'
import Section from '@/components/section/section'
import { Typography } from '@/components/typography/typography'
import { Dictionaries } from '@/i18n/dictionaries/en'
import { Locale } from '@/i18n/get-dictionaries'
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
      buttonContainer: clsx(s.buttonContainer),
      descriptionContainer: clsx(s.descriptionContainer),
      imageContainer: clsx(s.imageContainer),
      sectionContainer: clsx(s.sectionContainer),
    }

    const {
      homePage: { aboutSection },
    } = dict

    const sectionInView = useSelector(selectSectionInView)
    const isSectionVisible = sectionInView === id

    return (
      <Section id={id} {...rest} ref={ref}>
        <div className={classNames.sectionContainer}>
          <motion.div
            animate={isSectionVisible ? 'visible' : 'hidden'}
            className={classNames.imageContainer}
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
            <Image
              alt={'Dmitry photo'}
              className={classNames.avatar}
              height={640}
              src={'/images/avatar.webp'}
              width={640}
            />
          </motion.div>
          <motion.div
            animate={isSectionVisible ? 'visible' : 'hidden'}
            className={classNames.descriptionContainer}
            initial={'hidden'}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
            variants={{
              hidden: { opacity: 0, x: '100vw' },
              visible: { opacity: 1, x: 0 },
            }}
            viewport={{ once: true }}
            whileInView={'visible'}
          >
            <Typography.H3 as={'h2'}>{aboutSection.title}</Typography.H3>
            <Typography.Body1>{aboutSection.description}</Typography.Body1>
            {isSectionVisible && (
              <motion.div
                animate={isSectionVisible ? 'visible' : 'hidden'}
                className={classNames.buttonContainer}
                initial={'hidden'}
                transition={{
                  delay: 1,
                  duration: 2.5,
                  ease: 'easeInOut',
                }}
                variants={{
                  hidden: { opacity: 0, x: '100vw' },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Button as={'a'} download href={aboutSection.resumeLink}>
                  {aboutSection.resumeButton}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Section>
    )
  }
)

export default withRedux(AboutSection)
