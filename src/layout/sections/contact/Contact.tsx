import { SectionTitle } from "../../../components/SectionTitle.styled"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Icon } from "../../../components/icon/Icon"
import { Link } from "../../../components/link/Link.styled"
import { Container } from "../../../components/Container"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { S } from "./Contact_Styles"

export const Contact: React.FC = () => {
    const theme = useContext(ThemeContext)
    return (
        <S.Contact id="contact" theme={theme}>
            <Container direction="column" align="center" justify="center">
                <SectionTitle theme={theme}>Contact</SectionTitle>
                <S.ContactWrapper theme={theme} direction="column" width="100%" height="100%">
                    <S.ContactFormWrapper theme={theme} align="start" height="100%">
                        <S.ContactForm>
                            <FlexWrapper direction="column" align="center" justify="center" width="100%" gap="30px">
                                <S.ContactFormTitle theme={theme}>Get in touch</S.ContactFormTitle>
                                <FlexWrapper gap="10px" width="100%">
                                    <S.ContactFormField theme={theme} type="text" aria-label="enter email" placeholder="E-mail" />
                                    <S.ContactFormField theme={theme} type="text" aria-label="enter phone number" placeholder="Phone"/>
                                </FlexWrapper>
                                <S.ContactFormField theme={theme} as={"textarea"} aria-label="enter your message" placeholder="Message"/>
                                <S.ContactFormSubmitButton
                                    type="submit" 
                                    color="white" 
                                    hoverBackground="none"
                                >Send</S.ContactFormSubmitButton>
                            </FlexWrapper>
                        </S.ContactForm>
                        <S.ContactsAddsWrapper direction="column" align="start" gap="30px" width="100%" height="100%">
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
                        </S.ContactsAddsWrapper>
                    </S.ContactFormWrapper>
                </S.ContactWrapper>
                <S.SocialIconsWrapper>
                    <Link href="#" aria-label="Instagram account link">
                        <Icon iconId="instagramColor" height="34px" viewBox="0 0 50 50"/>
                    </Link>
                    <Link href="#" aria-label="Whatsapp group link">
                        <Icon iconId="whatsappColor" height="34px" viewBox="0 0 50 50"/>
                    </Link>
                    <Link href="#" aria-label="Telegram group link">
                        <Icon iconId="telegramColor" height="30px" viewBox="0 -1 50 50"/>
                    </Link>
                </S.SocialIconsWrapper>
                <S.FixedSocialIconsWrapper theme={theme} height="200px" direction="column" align="center" justify="center">
                    <Link href="#" aria-label="Whatsapp group link">
                        <Icon iconId="aboutWhatsapp" height="50px" width="50px" viewBox="-1 1 30 30"/>
                    </Link>
                    <Link href="#" aria-label="Instagram account link">
                        <Icon iconId="aboutInstagram" height="50px" width="50px" viewBox="-9 -13 50 50" />
                    </Link>
                    <Link href="#" aria-label="Telegram group link">
                        <Icon iconId="aboutTelegram" height="50px" width="50px" viewBox="-1 -4 37 37" />
                    </Link>
                </S.FixedSocialIconsWrapper>
            </Container>
        </S.Contact>
    )
}