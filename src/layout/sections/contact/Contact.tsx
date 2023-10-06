import { SectionTitle } from "../../../components/SectionTitle.styled"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Icon } from "../../../components/icon/Icon"
import { Link } from "../../../components/link/Link.styled"
import { Container } from "../../../components/Container"
import { ElementRef, useContext, useRef, useState } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { S } from "./Contact_Styles"
import emailjs from '@emailjs/browser';
import { Zoom } from "react-awesome-reveal"

export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null)
    const theme = useContext(ThemeContext)
    const [submitButtonText, setSubmitButtonText] = useState('Send')

    const sendEmail = (e: any) => {
        e.preventDefault()
        if(!form.current) return
        emailjs.sendForm('service_ypumi3n', 'template_mnxi9t4', form.current, 'u6DZWsUFpg84ikb5W')
          .then((result) => {
              console.log(result.text);
              setSubmitButtonText('Sended!')
              setTimeout(() => {
                    e.target.reset()
                    setSubmitButtonText('Send')
                }, 2000)
          }, (error) => {
              console.log(error.text);
              setSubmitButtonText('Error!')
          })
        
    }

    return (
        <S.Contact id="contact" theme={theme}>
            <Container direction="column" align="center" justify="center">
                <SectionTitle theme={theme}>Contact</SectionTitle>
                <S.ContactWrapper theme={theme} direction="column" >
                    <S.ContactFormWrapper theme={theme} align="start">
                        <S.ContactForm ref={form} onSubmit={sendEmail}>
                            <FlexWrapper direction="column" align="center" justify="center" width="100%" gap="30px">
                                <S.ContactFormTitle theme={theme}>Get in touch</S.ContactFormTitle>
                                <FlexWrapper gap="10px" width="100%">
                                    <S.ContactFormField 
                                        theme={theme} 
                                        type="text" 
                                        aria-label="enter name" 
                                        placeholder="Name" 
                                        name={'user_name'}
                                        minlength="3"
                                        required
                                    />
                                    <S.ContactFormField 
                                        theme={theme} 
                                        type="email" 
                                        aria-label="enter email" 
                                        placeholder="Email" 
                                        name={'user_email'} 
                                        required
                                    />
                                </FlexWrapper>
                                <S.ContactFormField 
                                    theme={theme} 
                                    as={"textarea"} 
                                    aria-label="enter your message" 
                                    placeholder="Message" 
                                    name={'message'}
                                    minlength="3"
                                    required
                                />
                                <S.ContactFormSubmitButton
                                    type="submit" 
                                    color="white" 
                                    hoverBackground="none"
                                >{submitButtonText}</S.ContactFormSubmitButton>
                            </FlexWrapper>
                        </S.ContactForm>
                        <S.ContactsAddsWrapper direction="column" align="start" gap="30px" width="100%" height="100%">
                            <Zoom cascade triggerOnce>
                                <S.ContactsAddWrapper theme={theme} align="center">
                                    <S.AddIconWrapper>
                                        <Icon iconId="location" height="100%" width="100%" viewBox="94 405 47 47"/>
                                    </S.AddIconWrapper>
                                    <FlexWrapper direction="column">
                                        <S.AddTitle theme={theme}>Location</S.AddTitle>
                                        <S.AddDescription theme={theme}>Belarus</S.AddDescription>
                                    </FlexWrapper>
                                </S.ContactsAddWrapper>
                                <S.ContactsAddWrapper theme={theme} align="center">
                                    <S.AddIconWrapper>
                                        <Icon iconId="phone" height="100%" width="100%" viewBox="-3 -6 34 34"/>
                                    </S.AddIconWrapper>
                                    <FlexWrapper direction="column">
                                        <S.AddTitle theme={theme}>Phone</S.AddTitle>
                                        <S.AddDescription theme={theme}>+375256979075</S.AddDescription>
                                    </FlexWrapper>
                                </S.ContactsAddWrapper>
                                <S.ContactsAddWrapper theme={theme} align="center">
                                    <S.AddIconWrapper>
                                        <Icon iconId="email" height="100%" width="100%" viewBox="-3 -4 31 31"/>
                                    </S.AddIconWrapper>
                                    <FlexWrapper direction="column">
                                        <S.AddTitle theme={theme}>Email</S.AddTitle>
                                        <S.AddDescription theme={theme}>proffery@gmail.com</S.AddDescription>
                                    </FlexWrapper>
                                </S.ContactsAddWrapper>
                            </Zoom>
                        </S.ContactsAddsWrapper>
                    </S.ContactFormWrapper>
                </S.ContactWrapper>
                <S.SocialIconsWrapper>
                    <Link href="https://www.instagram.com/proffery/" aria-label="Instagram link">
                        <Icon iconId="instagramColor" height="50px" viewBox="0 0 55 55"/>
                    </Link>
                    <Link href="https://wa.me/375256979075" aria-label="WhatsApp link">
                        <Icon iconId="whatsappColor" height="50px" viewBox="-4 -4 63 63"/>
                    </Link>
                    <Link href="viber://chat?number=%2B375256979075" aria-label="Viber link">
                        <Icon iconId="viber" height="50px" viewBox="-100 -100 900 900"/>
                    </Link>
                </S.SocialIconsWrapper>
                <S.FixedSocialIconsWrapper theme={theme} direction="column" align="center" justify="center">
                    <Link href="https://github.com/proffery" aria-label="GitHub profile link">
                        <Icon iconId="gitHub" height="50px" width="50px" viewBox="-35 -27 210 210"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/dmitryshamko/" aria-label="LinkedIn account">
                        <Icon iconId="linkedIn" height="50px" width="50px" viewBox="-37 -59 220 220" />
                    </Link>
                    <Link href="https://t.me/ShamkoDmitry" aria-label="Telegram link">
                        <Icon iconId="aboutTelegram" height="50px" width="50px" viewBox="0 -5 33 33" />
                    </Link>
                </S.FixedSocialIconsWrapper>
            </Container>
        </S.Contact>
    )
}