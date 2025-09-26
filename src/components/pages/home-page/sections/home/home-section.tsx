'use client'
import React, { ComponentPropsWithoutRef } from 'react'
import { useSelector } from 'react-redux'

import { useTickText } from '@/common/use-tick-text'
import withRedux from '@/common/with-redux'
import Section from '@/components/section/section'
import { Typography } from '@/components/typography/typography'
import { selectDictionary, selectGpuData, selectSectionInView } from '@/services/app/app.selectors'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'

import s from './home.module.scss'

type Props = ComponentPropsWithoutRef<typeof Section>

const HomeSection = ({ id, ...rest }: Props) => {
  const classNames = {
    backgroundImage: clsx(s.backgroundImage),
    header: clsx(s.header),
    headerContainer: clsx(s.headerContainer),
  }
  const sectionInView = useSelector(selectSectionInView)
  const dict = useSelector(selectDictionary)

  const {
    homePage: { heroSection },
  } = dict

  const tickText = useTickText(heroSection.title3)
  const { tier: gpuTier } = useSelector(selectGpuData)
  const isSectionVisible = sectionInView === id

  return (
    <Section id={id} {...rest}>
      {gpuTier < 2 && (
        <Image
          alt={'Earth'}
          className={classNames.backgroundImage}
          height={800}
          src={'/images/sections/earth.webp'}
          width={800}
        />
      )}
      {isSectionVisible && (
        <div className={classNames.headerContainer}>
          <div>
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className={classNames.header}
              exit={{ opacity: 0, x: '100vw' }}
              initial={{ opacity: 0, x: '100vw' }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: 'easeInOut',
                type: 'tween',
              }}
            >
              <Typography.H3 as={'h2'}>{heroSection.title2}</Typography.H3>
            </motion.div>
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className={classNames.header}
              exit={{ opacity: 0, x: '100vw' }}
              initial={{ opacity: 0, x: '100vw' }}
              transition={{
                delay: 0.6,
                duration: 0.5,
                ease: 'easeInOut',
                type: 'tween',
              }}
            >
              <Typography.H2 as={'h1'}>{heroSection.title1}</Typography.H2>
            </motion.div>
          </div>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className={classNames.header}
            exit={{ opacity: 0, x: '100vw' }}
            initial={{ opacity: 0, x: '100vw' }}
            transition={{
              delay: 0.9,
              duration: 0.5,
              ease: 'easeInOut',
              type: 'tween',
            }}
          >
            <Typography.H5 as={'h3'}>{tickText}&nbsp;</Typography.H5>
          </motion.div>
        </div>
      )}
    </Section>
  )
}

export default withRedux(HomeSection)
