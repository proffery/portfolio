'use client'
import React, { ComponentPropsWithoutRef } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { GithubIcon } from '@/assets/components/github-icon'
import { LinkedInIcon } from '@/assets/components/linkedin-icon'
import { TelegramIcon } from '@/assets/components/telegram-icon'
import { credentials } from '@/common/credentials'
import { getEmailErrorMessage } from '@/common/get-email-error-message'
import withRedux from '@/common/with-redux'
import { ContactForm, ContactFormValues } from '@/components/contact-form/contact-form'
import Section from '@/components/section/section'
import { Typography } from '@/components/typography/typography'
import { selectDictionary, selectGpuData, selectSectionInView } from '@/services/app/app.selectors'
import { useSendEmailMutation } from '@/services/email/email.service'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'

import s from './conacts.module.scss'

type Props = ComponentPropsWithoutRef<typeof Section>

const ContactsSection = ({ id, ...rest }: Props) => {
  const classNames = {
    backgroundImage: clsx(s.backgroundImage),
    columnLeft: clsx(s.columnLeft),
    columnRight: clsx(s.columnRight),
    columnsContainer: clsx(s.columnsContainer),
    iconLink: clsx(s.iconLink),
  }
  const dict = useSelector(selectDictionary)
  const {
    homePage: { contactsSection },
  } = dict
  const { tier: gpuTier } = useSelector(selectGpuData)

  const sectionInView = useSelector(selectSectionInView)
  const isSectionVisible = sectionInView === id

  const [sendEmail, { error, isLoading, isSuccess }] = useSendEmailMutation()

  const onFormSubmit = async (data: ContactFormValues) => {
    await toast.promise(
      sendEmail({
        service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        template_params: data,
        user_id: process.env.NEXT_PUBLIC_EMAILJS_KEY,
      }).unwrap(),
      {
        error: contactsSection.contactForm.error,
        pending: contactsSection.contactForm.pending,
        success: contactsSection.contactForm.success,
      }
    )
  }

  const errorMessage = getEmailErrorMessage(error)

  return (
    <Section {...rest} id={id}>
      {gpuTier < 2 && (
        <Image
          alt={'Jupiter'}
          className={classNames.backgroundImage}
          height={800}
          src={'/images/sections/jupiter.webp'}
          width={800}
        />
      )}
      <div className={classNames.columnsContainer}>
        <div className={classNames.columnLeft}></div>
        <motion.div
          animate={isSectionVisible ? 'visible' : 'hidden'}
          className={classNames.columnRight}
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
          <motion.div
            animate={isSectionVisible ? 'visible' : 'hidden'}
            initial={'hidden'}
            transition={{
              delay: 1,
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
            <Typography.H3>{contactsSection.contactForm.title}</Typography.H3>
          </motion.div>
          <ContactForm
            dict={dict}
            disabled={isLoading}
            errorMessage={JSON.stringify(errorMessage)}
            isSubmitSuccess={isSuccess}
            onSubmit={onFormSubmit}
          />
          {isSectionVisible && (
            <div className={classNames.columnLeft}>
              <motion.a
                animate={{ opacity: 1, x: 0 }}
                aria-label={'Github account'}
                className={classNames.iconLink}
                exit={{ opacity: 0, x: '-100vw' }}
                href={credentials.link_github}
                initial={{ opacity: 0, x: '-100vw' }}
                rel={'noopener'}
                target={'_blank'}
                transition={{
                  delay: 1.5,
                  duration: 1.5,
                  ease: 'easeInOut',
                  type: 'tween',
                }}
              >
                <GithubIcon height={32} width={32} />
              </motion.a>
              <motion.a
                animate={{ opacity: 1, x: 0 }}
                aria-label={'Linkedin account'}
                className={classNames.iconLink}
                exit={{ opacity: 0, x: '-100vw' }}
                href={credentials.link_linkedin}
                initial={{ opacity: 0, x: '-100vw' }}
                rel={'noopener'}
                target={'_blank'}
                transition={{
                  delay: 1,
                  duration: 1.5,
                  ease: 'easeInOut',
                }}
              >
                <LinkedInIcon height={32} width={32} />
              </motion.a>
              <motion.a
                animate={{ opacity: 1, x: 0 }}
                aria-label={'Telegram account'}
                className={classNames.iconLink}
                exit={{ opacity: 0, x: '-100vw' }}
                href={credentials.link_telegram}
                initial={{ opacity: 0, x: '-100vw' }}
                rel={'noopener'}
                target={'_blank'}
                transition={{
                  delay: 0.5,
                  duration: 1.5,
                  ease: 'easeInOut',
                }}
              >
                <TelegramIcon height={32} width={32} />
              </motion.a>
            </div>
          )}
        </motion.div>
      </div>
    </Section>
  )
}

export default withRedux(ContactsSection)
