'use client'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { useSelector } from 'react-redux'

import { useTickText } from '@/common/use-tick-text'
import withRedux from '@/common/with-redux'
import Section from '@/components/section/section'
import { Typography } from '@/components/typography/typography'
import { selectDictionary, selectSectionInView } from '@/services/app/app.selectors'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import s from './home.module.scss'

type Props = ComponentPropsWithoutRef<typeof Section>

const HomeSection = forwardRef<ElementRef<'section'>, Props>(({ id, ...rest }, ref) => {
  const classNames = {
    headerContainer: clsx(s.headerContainer),
  }
  const sectionInView = useSelector(selectSectionInView)
  const dict = useSelector(selectDictionary)

  const {
    homePage: { heroSection },
  } = dict

  const tickText = useTickText(heroSection.title3)

  const isSectionVisible = sectionInView === id

  return (
    <Section id={id} {...rest} ref={ref}>
      {isSectionVisible && (
        <div className={classNames.headerContainer}>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className={classNames.headerContainer}
            exit={{ opacity: 0, x: '100vw' }}
            initial={{ opacity: 0, x: '100vw' }}
            key={id}
            transition={{
              delay: 0.3,
              duration: 1.5,
              ease: 'easeInOut',
              type: 'tween',
            }}
          >
            <Typography.H2 as={'h2'}>{heroSection.title2}</Typography.H2>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className={classNames.headerContainer}
            exit={{ opacity: 0, x: '100vw' }}
            initial={{ opacity: 0, x: '100vw' }}
            key={id}
            transition={{
              delay: 0.6,
              duration: 1.5,
              ease: 'easeInOut',
              type: 'tween',
            }}
          >
            <Typography.H1 as={'h1'}>{heroSection.title1}</Typography.H1>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className={classNames.headerContainer}
            exit={{ opacity: 0, x: '100vw' }}
            initial={{ opacity: 0, x: '100vw' }}
            key={id}
            transition={{
              delay: 0.9,
              duration: 1.5,
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
})

export default withRedux(HomeSection)
