import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { DecorationDot } from "../../../components/decoration/DecorationDot"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Button } from "../../../components/button/Button.styled"
import { Icon } from "../../../components/icon/Icon"
import { Link } from "../../../components/link/Link.styled"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"

export const Contact = () => {
    const theme = useContext(ThemeContext)
    return (
        <StyledContact id="contact" theme={theme}>
            <Container direction="column" align="center" justify="center">
                <SectionTitle theme={theme}>Contact Us<DecorationDot /></SectionTitle>
                <ContactWrapper theme={theme} direction="column">
                    <FormTitle theme={theme}>Get in touch</FormTitle>
                    <FormWrapper theme={theme} gap="80px" align="start" justify="center">
                        <StyledForm>
                            <FlexWrapper direction="column" align="center" justify="center" gap="30px">
                                <FlexWrapper gap="10px">
                                    <Field theme={theme} type="text" placeholder="E-mail" />
                                    <Field theme={theme} type="text" placeholder="Phone"/>
                                </FlexWrapper>
                                <Field theme={theme} as={"textarea"} rows={10} placeholder="Message"/>
                                <SubmitButton background="blue" 
                                    type="submit" 
                                    padding="10px 40px" 
                                    borderWidth="3px" 
                                    borderStyle="solid" 
                                    borderRadius="9px" 
                                    color="white" 
                                    borderColor="blue"
                                >Send</SubmitButton>
                            </FlexWrapper>
                        </StyledForm>
                        <FlexWrapper direction="column" align="start" gap="30px" height="100%">
                            <FlexWrapper>
                                <Icon iconId="location" height="50" width="50" viewBox="95 408 45 45"/>
                                <FlexWrapper direction="column">
                                    <ContactTitleH4 theme={theme}>Location</ContactTitleH4>
                                    <ContactDescription theme={theme}>Belarus</ContactDescription>
                                </FlexWrapper>
                            </FlexWrapper>
                            <FlexWrapper>
                                <Icon iconId="phone" height="50" width="50" viewBox="-3 -2 30 30"/>
                                <FlexWrapper direction="column">
                                    <ContactTitleH4 theme={theme}>Phone</ContactTitleH4>
                                    <ContactDescription theme={theme}>+989150063913</ContactDescription>
                                </FlexWrapper>
                            </FlexWrapper>
                            <FlexWrapper>
                                <Icon iconId="email" height="50" width="50" viewBox="-3 0 30 30"/>
                                <FlexWrapper direction="column">
                                    <ContactTitleH4 theme={theme}>Email</ContactTitleH4>
                                    <ContactDescription theme={theme}>arkn3913@gmail.com</ContactDescription>
                                </FlexWrapper>
                            </FlexWrapper>
                        </FlexWrapper>
                    </FormWrapper>
                </ContactWrapper>
                <SocialWrapper>
                    <Link href="#">
                        <Icon iconId="instagramColor" height="34px" viewBox="0 0 50 50"/>
                    </Link>
                    <Link href="#">
                        <Icon iconId="whatsappColor" height="34px" viewBox="0 0 50 50"/>
                    </Link>
                    <Link href="#">
                        <Icon iconId="telegramColor" height="30px" viewBox="0 -1 50 50"/>
                    </Link>
                </SocialWrapper>
                <FixedContact theme={theme} height="200px" direction="column" align="center" justify="center">
                    <Link href="#" aria-label="Whatsapp link">
                        <Icon iconId="aboutWhatsapp" width="60px" viewBox="-4 -3 37 30"/>
                    </Link>
                    <Link href="#" aria-label="Instagram link">
                        <Icon iconId="aboutInstagram" width="35px" viewBox="-2 -5 37 35" />
                    </Link>
                    <Link href="#" aria-label="Telegram link">
                        <Icon iconId="aboutTelegram" width="50px" viewBox="0 1 37 35" />
                    </Link>
                </FixedContact>
            </Container>
        </StyledContact>
    )
}

const StyledContact = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
    padding-left: 75px;
    padding-right: 75px;
    padding-bottom: 96px;
    gap: 20px;
`

const ContactWrapper = styled(FlexWrapper)`
    padding: 50px;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.form :
        theme.dark.color.background.form
    };
    box-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.main :
        theme.dark.shadow.main
    };
    max-width: 932px;
`

const FormTitle = styled.h3`
    display: flex;
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 136%;
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
`

const StyledForm = styled.form`
    max-width: 429px;
    min-width: 200px;
    width: 60%;
    display: flex;
`

const SubmitButton = styled(Button)`
    align-self: flex-start;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 136%;
`

const Field = styled.input.attrs((type) => ({
    type: type
}))`
    display: flex;
    width: 100%;
    min-width: 210px;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.input :
        theme.dark.color.background.input
    };
    border-radius: 9px;
    min-height: 36px;
    resize: none;
    border: none;
    &::placeholder {
        color: ${props => props.theme === 'light' ?
            theme.light.color.text.placeholder :
            theme.dark.color.text.placeholder
        };
        padding: 10px;
    }
`


const FormWrapper = styled(FlexWrapper)`
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    margin: 30px 0px;
`
const FixedContact = styled(FlexWrapper)`
    position: fixed;
    left: 0;
    top: 60%;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    border-radius: 0 25px 25px 0;
    border: 2px solid ${props => props.theme === 'light' ?
        theme.light.color.background.bannerBorder :
        theme.dark.color.background.bannerBorder 
    };
    
    border-left: none;
    z-index: 200;
`

const ContactTitleH4 = styled.h4`
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 136%;
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
`

const ContactDescription = styled.span`
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 136%;
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.placeholder :
        theme.dark.color.text.placeholder
    };
`

const SocialWrapper = styled(FlexWrapper)`
    margin-top: 65px;
`