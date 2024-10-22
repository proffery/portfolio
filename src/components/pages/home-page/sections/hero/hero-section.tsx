'use client'
import { ComponentPropsWithoutRef } from 'react'
import { useSelector } from 'react-redux'

import withRedux from '@/common/hocs/with-redux'
import { useTickText } from '@/common/hooks/use-tick-text'
import Section from '@/components/layouts/section/section'
import { Typography } from '@/components/ui/typography/typography'
import { Dictionaries } from '@/dictionaries/en'
import { selectSectionInView } from '@/services/app/app.selectors'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import s from './hero.module.scss'

type Props = { dict: Dictionaries } & ComponentPropsWithoutRef<typeof Section>

export const HeroSection = withRedux(({ dict, id }: Props) => {
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
    <Section className={classNames.section} id={id}>
      <AnimatePresence>
        {isSectionVisible && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className={classNames.headerContainer}
            exit={{ opacity: 0, x: 5000 }}
            initial={{ opacity: 0, x: 5000 }}
            key={id}
            transition={{
              delay: 1,
              duration: 5,
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
