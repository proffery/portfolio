import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { constants } from '@/common/constants'
import { useIsWidthLess } from '@/common/use-is-width-less'
import { Button } from '@/components/button/button'
import { Input } from '@/components/input/input'
import { Dictionaries } from '@/i18n/dictionaries/en'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './contact-form.module.scss'

export type ContactFormValues = {
  message: string
  user_email: string
  user_name: string
}

type Props = {
  dict: Dictionaries
  disabled?: boolean
  errorMessage?: string
  isSubmitSuccess?: boolean
  onSubmit: (data: ContactFormValues) => void
}

export const ContactForm = ({
  dict,
  disabled,
  errorMessage,
  isSubmitSuccess = false,
  onSubmit,
}: Props) => {
  const classNames = {
    form: clsx(s.form),
  }

  const isMobile = useIsWidthLess(constants.mobileWidth)
  const {
    homePage: {
      contactsSection: { contactForm },
    },
  } = dict

  const contactFormSchema = z.object({
    message: z.string().min(1, { message: contactForm.message.errorMessage }),
    user_email: z.string().email({ message: contactForm.email.errorMessage }),
    user_name: z.string().min(3, { message: contactForm.name.errorMessage }),
  })

  const {
    clearErrors,
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setError,
  } = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  })

  useEffect(() => {
    if (errorMessage) {
      setError('message', { message: errorMessage, type: 'server' })
    } else {
      clearErrors(['message'])
    }
  }, [errorMessage, setError, clearErrors])

  const handleFormSubmit = handleSubmit(data => {
    onSubmit(data)
  })

  useEffect(() => {
    isSubmitSuccess && reset()
  }, [isSubmitSuccess])

  return (
    <form className={classNames.form} onSubmit={handleFormSubmit}>
      <Input
        autoComplete={'name'}
        errorMessage={errors.user_name?.message}
        placeholder={contactForm.name.placeholder}
        {...register('user_name')}
      />
      <Input
        autoComplete={'email'}
        errorMessage={errors.user_email?.message}
        placeholder={contactForm.email.placeholder}
        {...register('user_email')}
      />
      <Input
        as={'textarea'}
        errorMessage={errors.message?.message}
        placeholder={contactForm.message.placeholder}
        resize={false}
        {...register('message')}
      />
      <Button disabled={disabled} fullWidth={isMobile} type={'submit'}>
        {contactForm.submitButton}
      </Button>
    </form>
  )
}
