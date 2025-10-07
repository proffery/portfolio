'use client'
import React, { ComponentPropsWithoutRef } from 'react'
import { useSelector } from 'react-redux'

import { Arrow } from '@/assets/components/arrow'
import useIndexChange from '@/common/use-index-change'
import withRedux from '@/common/with-redux'
import { Button } from '@/components/button/button'
import Section from '@/components/section/section'
import { Swiper } from '@/components/swiper/swiper'
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

  return (
    <Section id={id} {...rest}>
      {gpuTier < 2 && (
        <Image
          alt={'Mars'}
          className={classNames.backgroundImage}
          draggable={false}
          height={800}
          src={'/images/sections/mars.webp'}
          width={800}
        />
      )}
      <motion.div
        animate={sectionInView === id ? 'visible' : 'hidden'}
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
      <Swiper
        className={classNames.sectionContainer}
        index={index}
        onIndexChange={onIndexChange}
        sectionArr={aboutSection.abouts}
      >
        <motion.div
          animate={sectionInView === id ? 'visible' : 'hidden'}
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
            draggable={false}
            height={640}
            src={aboutSection.abouts[index].avatarUrl}
            width={640}
          />
        </motion.div>
        <motion.div
          animate={sectionInView === id ? 'visible' : 'hidden'}
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
          {sectionInView === id && (
            <motion.div
              animate={sectionInView === id ? 'visible' : 'hidden'}
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
      </Swiper>
    </Section>
  )
}

export default withRedux(AboutSection)
