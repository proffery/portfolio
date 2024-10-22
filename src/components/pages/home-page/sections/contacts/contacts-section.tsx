'use client'
import { ComponentPropsWithoutRef } from 'react'
import { useSelector } from 'react-redux'

import withRedux from '@/common/hocs/with-redux'
import { getErrorMessage } from '@/common/utils/get-error-message'
import { ContactForm, ContactFormValues } from '@/components/forms/contact-form/contact-form'
import Section from '@/components/layouts/section/section'
import { Typography } from '@/components/ui/typography/typography'
import { Dictionaries } from '@/dictionaries/en'
import { selectSectionInView } from '@/services/app/app.selectors'
import { useSendEmailMutation } from '@/services/email/email.service'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import s from './conacts.module.scss'

type Props = { dict: Dictionaries } & ComponentPropsWithoutRef<typeof Section>

export const ContactsSection = withRedux(({ dict, id }: Props) => {
  const classNames = {
    column: clsx(s.column),
    columnsContainer: clsx(s.columnsContainer),
    section: clsx(s.section),
  }
  const {
    homePage: { contacts },
  } = dict

  const sectionInView = useSelector(selectSectionInView)
  const isSectionVisible = sectionInView === id

  const [sendEmail, { error, isLoading }] = useSendEmailMutation()

  const onFormSubmit = (data: ContactFormValues) => {
    sendEmail({
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      template_params: data,
      user_id: process.env.NEXT_PUBLIC_EMAILJS_KEY,
    }).unwrap()
  }

  const errorMessage = getErrorMessage(error)

  return (
    <Section className={classNames.section} id={id}>
      <AnimatePresence>
        {isSectionVisible && (
          <div className={classNames.columnsContainer}>
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className={classNames.column}
              exit={{ opacity: 0, x: -5000 }}
              initial={{ opacity: 0, x: -5000 }}
              transition={{
                delay: 1,
                duration: 4,
                ease: 'easeInOut',
              }}
            >
              <Typography.H3>Social</Typography.H3>
            </motion.div>
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className={classNames.column}
              exit={{ opacity: 0, x: 5000 }}
              initial={{ opacity: 0, x: 5000 }}
              transition={{
                delay: 1,
                duration: 5,
                ease: 'easeInOut',
              }}
            >
              <Typography.H3>{contacts.contactForm.title}</Typography.H3>
              <ContactForm
                dict={dict}
                disabled={isLoading}
                errorMessage={errorMessage}
                onSubmit={onFormSubmit}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  )
})
