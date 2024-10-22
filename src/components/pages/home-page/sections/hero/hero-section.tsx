'use client'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { useSelector } from 'react-redux'

import { useTickText } from '@/common/use-tick-text'
import withRedux from '@/common/with-redux'
import Section from '@/components/section/section'
import { Typography } from '@/components/typography/typography'
import { Dictionaries } from '@/i18n/dictionaries/en'
import { selectSectionInView } from '@/services/app/app.selectors'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import s from './hero.module.scss'

type Props = {
  dict: Dictionaries
} & ComponentPropsWithoutRef<typeof Section>

const HeroSection = forwardRef<ElementRef<'section'>, Props>(({ dict, id, ...rest }, ref) => {
  const classNames = {
    headerContainer: clsx(s.headerContainer),
    section: clsx(s.section),
  }

  const {
    homePage: { hero },
  } = dict

  const tickText = useTickText(hero.title3)

  const sectionInView = useSelector(selectSectionInView)
  const isSectionVisible = sectionInView === id

  return (
    <Section id={id} {...rest} className={classNames.section} ref={ref}>
      <AnimatePresence>
        {isSectionVisible && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className={classNames.headerContainer}
            exit={{ opacity: 0, x: '100vw' }}
            initial={{ opacity: 0, x: '100vw' }}
            key={id}
            transition={{
              delay: 1,
              duration: 4,
              ease: 'easeInOut',
              type: 'tween',
            }}
          >
            <Typography.H3 as={'h2'}>{hero.title2}</Typography.H3>
            <Typography.H1>{hero.title1}</Typography.H1>
            <Typography.H2>{tickText}&nbsp;</Typography.H2>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
})

export default withRedux(HeroSection)
