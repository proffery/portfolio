'use client'
import { ComponentPropsWithoutRef } from 'react'

import { useTickText } from '@/common/hooks/use-tick-text'
import Section from '@/components/section/section'
import { Typography } from '@/components/typography/typography'
import { Dictionaries } from '@/dictionaries/en'
import clsx from 'clsx'
import * as motion from 'framer-motion/client'

import s from './hero.module.scss'

type Props = { dict: Dictionaries } & ComponentPropsWithoutRef<typeof Section>

export const Hero = ({ dict, id }: Props) => {
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
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        className={classNames.headerContainer}
        initial={{ opacity: 0, x: 1920 }}
        transition={{ delay: 5, duration: 2, ease: 'easeOut' }}
      >
        <Typography.H3 as={'h2'}>{heroDict.title2}</Typography.H3>
        <Typography.H1>{heroDict.title1}</Typography.H1>
        <Typography.H2>{tickText}&nbsp;</Typography.H2>
      </motion.div>
    </Section>
  )
}
