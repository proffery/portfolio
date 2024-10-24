'use client'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
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
import { Dictionaries } from '@/i18n/dictionaries/en'
import { selectSectionInView } from '@/services/app/app.selectors'
import { useSendEmailMutation } from '@/services/email/email.service'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import s from './conacts.module.scss'

type Props = { dict: Dictionaries } & ComponentPropsWithoutRef<typeof Section>

const ContactsSection = forwardRef<ElementRef<'section'>, Props>(({ dict, id }, ref) => {
  const classNames = {
    columnLeft: clsx(s.columnLeft),
    columnRight: clsx(s.columnRight),
    columnsContainer: clsx(s.columnsContainer),
    iconLink: clsx(s.iconLink),
  }

  const {
    homePage: { contacts },
  } = dict

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
        error: contacts.contactForm.error,
        pending: contacts.contactForm.pending,
        success: contacts.contactForm.success,
      }
    )
  }

  const errorMessage = getEmailErrorMessage(error)

  return (
    <Section id={id} ref={ref}>
      {isSectionVisible && (
        <div className={classNames.columnsContainer}>
          <div className={classNames.columnLeft}></div>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className={classNames.columnRight}
            exit={{ opacity: 0, x: '100vw' }}
            initial={{ opacity: 0, x: '100vw' }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-100vw' }}
              initial={{ opacity: 0, x: '-100vw' }}
              transition={{
                duration: 1.1,
                ease: 'easeInOut',
              }}
            >
              <Typography.H3>{contacts.contactForm.title}</Typography.H3>
            </motion.div>
            <ContactForm
              dict={dict}
              disabled={isLoading}
              errorMessage={JSON.stringify(errorMessage)}
              isSubmitSuccess={isSuccess}
              onSubmit={onFormSubmit}
            />
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
                  duration: 3,
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
                  duration: 3,
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
                  duration: 3,
                  ease: 'easeInOut',
                }}
              >
                <TelegramIcon height={32} width={32} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      )}
    </Section>
  )
})

export default withRedux(ContactsSection)
