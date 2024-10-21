'use client'
import { ComponentPropsWithoutRef } from 'react'

import { useTickText } from '@/common/hooks/use-tick-text'
import Section from '@/components/section/section'
import { Typography } from '@/components/typography/typography'
import { Dictionaries } from '@/dictionaries/en'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import s from './hero.module.scss'

type Props = { dict: Dictionaries } & ComponentPropsWithoutRef<typeof Section>

export const HeroSection = ({ dict, id }: Props) => {
  const classNames = {
    headerContainer: clsx(s.headerContainer),
    section: clsx(s.section),
  }

  const {
    homePage: { hero: heroDict },
  } = dict

  const tickText = useTickText(heroDict.title3)

  return (
    <Section className={classNames.section} id={id}>
      <AnimatePresence mode={'sync'}>
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
          <Typography.H3 as={'h2'}>{heroDict.title2}</Typography.H3>
          <Typography.H1>{heroDict.title1}</Typography.H1>
          <Typography.H2>{tickText}&nbsp;</Typography.H2>
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}
