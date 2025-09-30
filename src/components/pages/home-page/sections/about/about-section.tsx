'use client'
import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Arrow } from '@/assets/components/arrow'
import useIndexChange from '@/common/use-index-change'
import withRedux from '@/common/with-redux'
import { Button } from '@/components/button/button'
import Section from '@/components/section/section'
import { Typography } from '@/components/typography/typography'
import { selectDictionary, selectGpuData, selectSectionInView } from '@/services/app/app.selectors'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'

import s from './about.module.scss'

type Props = ComponentPropsWithoutRef<typeof Section>

const AboutSection = ({ id, ...rest }: Props) => {
  const classNames = {
    arrowsContainer: clsx(s.arrowsContainer),
    avatar: clsx(s.avatar),
    backArrow: clsx(s.backArrow),
    backgroundImage: clsx(s.backgroundImage),
    buttonContainer: clsx(s.buttonContainer),
    descriptionContainer: clsx(s.descriptionContainer),
    imageContainer: clsx(s.imageContainer),
    sectionContainer: clsx(s.sectionContainer),
  }
  const sectionInView = useSelector(selectSectionInView)
  const dict = useSelector(selectDictionary)
  const {
    homePage: { aboutSection },
  } = dict
  const { tier: gpuTier } = useSelector(selectGpuData)

  const { index, onIndexChange } = useIndexChange(aboutSection.abouts)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isSectionVisible, setIsSectionVisible] = useState(false)

  const minSwipeDistance = 40

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(0) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      return
    }
    const distance = touchStart - touchEnd
    const isLeftSwipe =
      distance > minSwipeDistance && aboutSection.abouts[index].id < aboutSection.abouts.length
    const isRightSwipe = distance < -minSwipeDistance && aboutSection.abouts[index].id > 1

    if (isLeftSwipe || isRightSwipe) {
      isLeftSwipe ? onIndexChange('next') : onIndexChange('previous')
    }
  }

  useEffect(() => {
    setIsSectionVisible(sectionInView === id)
  }, [sectionInView, id])

  return (
    <Section id={id} {...rest}>
      {gpuTier < 2 && (
        <Image
          alt={'Mars'}
          className={classNames.backgroundImage}
          height={800}
          src={'/images/sections/mars.webp'}
          width={800}
        />
      )}
      <motion.div
        animate={isSectionVisible ? 'visible' : 'hidden'}
        initial={'hidden'}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
        variants={{
          hidden: { opacity: 0, x: '-100vw' },
          visible: { opacity: 1, x: 0 },
        }}
        viewport={{ once: true }}
        whileInView={'visible'}
      >
        <Typography.H3 as={'h2'}>{aboutSection.title}</Typography.H3>
      </motion.div>
      <div
        className={classNames.sectionContainer}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
      >
        <motion.div
          animate={isSectionVisible ? 'visible' : 'hidden'}
          className={classNames.imageContainer}
          initial={'hidden'}
          transition={{
            duration: 0.5,
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
            src={aboutSection.abouts[index].avatarUrl}
            width={640}
          />
        </motion.div>
        <motion.div
          animate={isSectionVisible ? 'visible' : 'hidden'}
          className={classNames.descriptionContainer}
          initial={'hidden'}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          variants={{
            hidden: { opacity: 0, x: '100vw' },
            visible: { opacity: 1, x: 0 },
          }}
          viewport={{ once: true }}
          whileInView={'visible'}
        >
          <Typography.H5 as={'h3'}>{aboutSection.abouts[index].title}</Typography.H5>
          <Typography.Body1
            dangerouslySetInnerHTML={{ __html: aboutSection.abouts[index].description }}
          />
          <div className={classNames.arrowsContainer}>
            <Button
              disabled={aboutSection.abouts[index].id === 1}
              onClick={() => onIndexChange('previous')}
              variant={'text'}
            >
              <Arrow className={classNames.backArrow} height={48} width={48} />
            </Button>
            <Typography.Caption>
              {aboutSection.abouts[index].id + '/' + aboutSection.abouts.length}
            </Typography.Caption>
            <Button
              disabled={aboutSection.abouts[index].id === aboutSection.abouts.length}
              onClick={() => onIndexChange('next')}
              variant={'text'}
            >
              <Arrow height={48} width={48} />
            </Button>
          </div>
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

export default withRedux(AboutSection)
