import { ElementRef, useRef, useState } from 'react'
import { Zoom } from 'react-awesome-reveal'

import emailJs from '@emailjs/browser'

import { useAppContext } from '../../../common/context/appContext'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle.styled'
import { Icon } from '../../../components/icon/Icon'
import { Link } from '../../../components/link/Link.styled'
import { S } from './Contact_Styles'

export const Contact = () => {
  const form = useRef<ElementRef<'form'>>(null)
  const { theme } = useAppContext()
  const [submitButtonText, setSubmitButtonText] = useState('Send')

  const sendEmail = (e: any) => {
    e.preventDefault()
    if (!form.current) {
      return
    }

    emailJs.sendForm('service_ypumi3n', 'template_mnxi9t4', form.current, 'u6DZWsUFpg84ikb5W').then(
      result => {
        console.log(result.text)
        setSubmitButtonText('Sended!')
        setTimeout(() => {
          e.target.reset()
          setSubmitButtonText('Send')
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
        <SectionTitle theme={theme}>Contact</SectionTitle>
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
                <S.ContactFormTitle theme={theme}>Get in touch</S.ContactFormTitle>
                <FlexWrapper gap={'10px'} width={'100%'}>
                  <S.ContactFormField
                    aria-label={'enter name'}
                    name={'user_name'}
                    placeholder={'Name'}
                    required
                    theme={theme}
                    type={'text'}
                  />
                  <S.ContactFormField
                    aria-label={'enter email'}
                    name={'user_email'}
                    placeholder={'Email'}
                    required
                    theme={theme}
                    type={'email'}
                  />
                </FlexWrapper>
                <S.ContactFormTextarea
                  aria-label={'enter your message'}
                  name={'message'}
                  placeholder={'Message'}
                  required
                  theme={theme}
                />
                <S.ContactFormSubmitButton color={'white'} hoverBackground={'none'} type={'submit'}>
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
                    <S.AddTitle theme={theme}>Location</S.AddTitle>
                    <S.AddDescription theme={theme}>Belarus</S.AddDescription>
                  </FlexWrapper>
                </S.ContactsAddWrapper>
                <S.ContactsAddWrapper align={'center'} theme={theme}>
                  <S.AddIconWrapper>
                    <Icon height={'100%'} iconId={'phone'} viewBox={'-3 -6 34 34'} width={'100%'} />
                  </S.AddIconWrapper>
                  <FlexWrapper align={'left'} direction={'column'}>
                    <S.AddTitle theme={theme}>Phone</S.AddTitle>
                    <S.AddDescription theme={theme}>+375256979075</S.AddDescription>
                  </FlexWrapper>
                </S.ContactsAddWrapper>
                <S.ContactsAddWrapper align={'center'} theme={theme}>
                  <S.AddIconWrapper>
                    <Icon height={'100%'} iconId={'email'} viewBox={'-3 -4 31 31'} width={'100%'} />
                  </S.AddIconWrapper>
                  <FlexWrapper align={'left'} direction={'column'}>
                    <S.AddTitle theme={theme}>Email</S.AddTitle>
                    <S.AddDescription theme={theme}>proffery@gmail.com</S.AddDescription>
                  </FlexWrapper>
                </S.ContactsAddWrapper>
              </Zoom>
            </S.ContactsAddsWrapper>
          </S.ContactFormWrapper>
        </S.ContactWrapper>
        <S.SocialIconsWrapper theme={theme}>
          <Link aria-label={'Instagram link'} href={'https://www.instagram.com/proffery/'}>
            <Icon height={'50px'} iconId={'instagramColor'} viewBox={'0 0 55 55'} />
          </Link>
          <Link aria-label={'WhatsApp link'} href={'https://wa.me/375256979075'}>
            <Icon height={'50px'} iconId={'whatsappColor'} viewBox={'-4 -3 59 59'} />
          </Link>
          <Link aria-label={'Viber link'} href={'viber://chat?number=%2B375256979075'}>
            <Icon height={'50px'} iconId={'viberColor'} viewBox={'-100 -100 900 900'} />
          </Link>
        </S.SocialIconsWrapper>
        <S.FixedSocialIconsWrapper
          align={'center'}
          direction={'column'}
          justify={'center'}
          theme={theme}
        >
          <Link aria-label={'GitHub profile link'} href={'https://github.com/proffery'}>
            <Icon height={'50px'} iconId={'gitHub'} viewBox={'-35 -27 210 210'} width={'50px'} />
          </Link>
          <Link aria-label={'LinkedIn account'} href={'https://www.linkedin.com/in/dmitryshamko/'}>
            <Icon height={'50px'} iconId={'linkedIn'} viewBox={'-37 -59 220 220'} width={'50px'} />
          </Link>
          <Link aria-label={'Telegram link'} href={'https://t.me/ShamkoDmitry'}>
            <Icon height={'50px'} iconId={'aboutTelegram'} viewBox={'0 -5 33 33'} width={'50px'} />
          </Link>
        </S.FixedSocialIconsWrapper>
      </Container>
    </S.Contact>
  )
}
