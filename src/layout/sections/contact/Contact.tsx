import { ElementRef, useEffect, useRef, useState } from 'react'
import { Zoom } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

import { credentials } from '@/common/const/data/credentials'
import { useAppContext } from '@/common/context/appContext'
import { Container } from '@/components/Container'
import { FlexWrapper } from '@/components/FlexWrapper'
import { SectionTitle } from '@/components/SectionTitle.styled'
import { Icon } from '@/components/icon/Icon'
import { Link } from '@/components/link/Link.styled'
import emailJs from '@emailjs/browser'

import { S } from './Contact_Styles'

const Contact = () => {
  const form = useRef<ElementRef<'form'>>(null)
  const { theme } = useAppContext()

  const {
    i18n: { language },
    t,
  } = useTranslation()

  const [submitButtonText, setSubmitButtonText] = useState(t('contacts.form.send_button'))

  useEffect(() => {
    setSubmitButtonText(t('contacts.form.send_button'))
  }, [language])

  const sendEmail = (e: any) => {
    e.preventDefault()
    if (!form.current) {
      return
    }

    emailJs
      .sendForm(
        credentials.emailJs.serviceID,
        credentials.emailJs.templateID,
        form.current,
        credentials.emailJs.API_KEY
      )
      .then(
        result => {
          console.log(result.text)
          setSubmitButtonText(t('contacts.form.sent_button'))
          setTimeout(() => {
            e.target.reset()
            setSubmitButtonText(t('contacts.form.send_button'))
          }, 2000)
        },
        error => {
          console.log(error.text)
          setSubmitButtonText('Error!')
        }
      )
  }

  return (
    <S.Contact id={'contact'} theme={theme}>
      <Container align={'center'} direction={'column'} justify={'center'}>
        <SectionTitle theme={theme}>{t('contacts.title')}</SectionTitle>
        <S.ContactWrapper direction={'column'} theme={theme}>
          <S.ContactFormWrapper align={'start'}>
            <S.ContactForm onSubmit={sendEmail} ref={form}>
              <FlexWrapper
                align={'center'}
                direction={'column'}
                gap={'30px'}
                justify={'center'}
                width={'100%'}
              >
                <S.ContactFormTitle theme={theme}>{t('contacts.form.title')}</S.ContactFormTitle>
                <FlexWrapper gap={'10px'} width={'100%'}>
                  <S.ContactFormField
                    aria-label={'enter name'}
                    name={'user_name'}
                    placeholder={t('contacts.form.name')}
                    required
                    theme={theme}
                    type={'text'}
                  />
                  <S.ContactFormField
                    aria-label={'enter email'}
                    name={'user_email'}
                    placeholder={t('contacts.form.email')}
                    required
                    theme={theme}
                    type={'email'}
                  />
                </FlexWrapper>
                <S.ContactFormTextarea
                  aria-label={'enter your message'}
                  name={'message'}
                  placeholder={t('contacts.form.message')}
                  required
                  theme={theme}
                />
                <S.ContactFormSubmitButton
                  color={'white'}
                  hover_background={'none'}
                  type={'submit'}
                >
                  {submitButtonText}
                </S.ContactFormSubmitButton>
              </FlexWrapper>
            </S.ContactForm>
            <S.ContactsAddsWrapper
              align={'start'}
              direction={'column'}
              gap={'30px'}
              height={'100%'}
              width={'100%'}
            >
              <Zoom cascade triggerOnce>
                <S.ContactsAddWrapper align={'center'} theme={theme}>
                  <S.AddIconWrapper>
                    <Icon
                      height={'100%'}
                      iconId={'location'}
                      viewBox={'94 405 47 47'}
                      width={'100%'}
                    />
                  </S.AddIconWrapper>
                  <FlexWrapper align={'left'} direction={'column'}>
                    <S.AddTitle theme={theme}>{t('contacts.description.location')}</S.AddTitle>
                    <S.AddDescription theme={theme}>
                      {language === 'en' ? credentials.countryEn : credentials.countryRu}
                    </S.AddDescription>
                  </FlexWrapper>
                </S.ContactsAddWrapper>
                <S.ContactsAddWrapper align={'center'} theme={theme}>
                  <S.AddIconWrapper>
                    <Icon height={'100%'} iconId={'phone'} viewBox={'-3 -6 34 34'} width={'100%'} />
                  </S.AddIconWrapper>
                  <FlexWrapper align={'left'} direction={'column'}>
                    <S.AddTitle theme={theme}>{t('contacts.description.phone')}</S.AddTitle>
                    <S.AddDescription theme={theme}>{credentials.phone}</S.AddDescription>
                  </FlexWrapper>
                </S.ContactsAddWrapper>
                <S.ContactsAddWrapper align={'center'} theme={theme}>
                  <S.AddIconWrapper>
                    <Icon height={'100%'} iconId={'email'} viewBox={'-3 -4 31 31'} width={'100%'} />
                  </S.AddIconWrapper>
                  <FlexWrapper align={'left'} direction={'column'}>
                    <S.AddTitle theme={theme}>{t('contacts.description.email')}</S.AddTitle>
                    <S.AddDescription theme={theme}>{credentials.email}</S.AddDescription>
                  </FlexWrapper>
                </S.ContactsAddWrapper>
              </Zoom>
            </S.ContactsAddsWrapper>
          </S.ContactFormWrapper>
        </S.ContactWrapper>
        <S.SocialIconsWrapper theme={theme}>
          <Link
            aria-label={'Instagram link'}
            href={credentials.link_instagram}
            rel={'noopener'}
            target={'_blank'}
          >
            <Icon height={'50px'} iconId={'instagramColor'} viewBox={'0 0 55 55'} />
          </Link>
          <Link
            aria-label={'WhatsApp link'}
            href={credentials.link_whatsapp}
            rel={'noopener'}
            target={'_blank'}
          >
            <Icon height={'50px'} iconId={'whatsappColor'} viewBox={'-4 -3 59 59'} />
          </Link>
          <Link
            aria-label={'Viber link'}
            href={credentials.link_viber}
            rel={'noopener'}
            target={'_blank'}
          >
            <Icon height={'50px'} iconId={'viberColor'} viewBox={'-100 -100 900 900'} />
          </Link>
        </S.SocialIconsWrapper>
        <S.FixedSocialIconsWrapper
          align={'center'}
          direction={'column'}
          justify={'center'}
          theme={theme}
        >
          <Link
            aria-label={'GitHub profile link'}
            href={credentials.link_github}
            rel={'noopener'}
            target={'_blank'}
          >
            <Icon height={'50px'} iconId={'gitHub'} viewBox={'-35 -27 210 210'} width={'50px'} />
          </Link>
          <Link
            aria-label={'LinkedIn account'}
            href={credentials.link_linkedin}
            rel={'noopener'}
            target={'_blank'}
          >
            <Icon height={'50px'} iconId={'linkedIn'} viewBox={'-37 -59 220 220'} width={'50px'} />
          </Link>
          <Link
            aria-label={'Telegram link'}
            href={credentials.link_telegram}
            rel={'noopener'}
            target={'_blank'}
          >
            <Icon height={'50px'} iconId={'aboutTelegram'} viewBox={'0 -5 33 33'} width={'50px'} />
          </Link>
        </S.FixedSocialIconsWrapper>
      </Container>
    </S.Contact>
  )
}

export default Contact
