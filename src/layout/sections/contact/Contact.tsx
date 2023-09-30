import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle.styled"
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
                <SectionTitle theme={theme}>Contact</SectionTitle>
                <ContactWrapper theme={theme} direction="column" width="100%" height="100%">
                    <FormWrapper theme={theme} align="start" height="100%">
                        <StyledForm>
                            <FlexWrapper direction="column" align="center" justify="center" width="100%" gap="30px">
                                <FormTitle theme={theme}>Get in touch</FormTitle>
                                <FlexWrapper gap="10px" width="100%">
                                    <Field theme={theme} type="text" aria-label="enter email" placeholder="E-mail" />
                                    <Field theme={theme} type="text" aria-label="enter phone number" placeholder="Phone"/>
                                </FlexWrapper>
                                <Field theme={theme} as={"textarea"} rows={8} aria-label="enter your message" placeholder="Message"/>
                                <SubmitButton 
                                    type="submit" 
                                    color="white" 
                                    hoverBackground="none"
                                >Send</SubmitButton>
                            </FlexWrapper>
                        </StyledForm>
                        <StyledContactWrapper direction="column" align="start" gap="30px" width="100%" height="100%">
                            <ContactIconWrapper theme={theme} align="center">
                                <IconWrapper>
                                    <Icon iconId="location" height="100%" width="100%" viewBox="94 405 47 47"/>
                                </IconWrapper>
                                <FlexWrapper direction="column">
                                    <ContactTitleH4 theme={theme}>Location</ContactTitleH4>
                                    <ContactDescription theme={theme}>Belarus</ContactDescription>
                                </FlexWrapper>
                            </ContactIconWrapper>
                            <ContactIconWrapper theme={theme} align="center">
                                <IconWrapper>
                                    <Icon iconId="phone" height="100%" width="100%" viewBox="-3 -6 34 34"/>
                                </IconWrapper>
                                <FlexWrapper direction="column">
                                    <ContactTitleH4 theme={theme}>Phone</ContactTitleH4>
                                    <ContactDescription theme={theme}>+375256979075</ContactDescription>
                                </FlexWrapper>
                            </ContactIconWrapper>
                            <ContactIconWrapper theme={theme} align="center">
                                <IconWrapper>
                                    <Icon iconId="email" height="100%" width="100%" viewBox="-3 -4 31 31"/>
                                </IconWrapper>
                                <FlexWrapper direction="column">
                                    <ContactTitleH4 theme={theme}>Email</ContactTitleH4>
                                    <ContactDescription theme={theme}>proffery@gmail.com</ContactDescription>
                                </FlexWrapper>
                            </ContactIconWrapper>
                        </StyledContactWrapper>
                    </FormWrapper>
                </ContactWrapper>
                <SocialWrapper>
                    <Link href="#" aria-label="Instagram account link">
                        <Icon iconId="instagramColor" height="34px" viewBox="0 0 50 50"/>
                    </Link>
                    <Link href="#" aria-label="Whatsapp group link">
                        <Icon iconId="whatsappColor" height="34px" viewBox="0 0 50 50"/>
                    </Link>
                    <Link href="#" aria-label="Telegram group link">
                        <Icon iconId="telegramColor" height="30px" viewBox="0 -1 50 50"/>
                    </Link>
                </SocialWrapper>
                <FixedContact theme={theme} height="200px" direction="column" align="center" justify="center">
                    <Link href="#" aria-label="Whatsapp group link">
                        <Icon iconId="aboutWhatsapp" height="50px" width="50px" viewBox="-1 1 30 30"/>
                    </Link>
                    <Link href="#" aria-label="Instagram account link">
                        <Icon iconId="aboutInstagram" height="50px" width="50px" viewBox="-9 -13 50 50" />
                    </Link>
                    <Link href="#" aria-label="Telegram group link">
                        <Icon iconId="aboutTelegram" height="50px" width="50px" viewBox="-1 -4 37 37" />
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
    gap: 20px;
`

const ContactWrapper = styled(FlexWrapper)`
    padding: 53px 82px;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.form :
        theme.dark.color.background.form
    };
    box-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.main :
        theme.dark.shadow.main
    };
    max-width: 932px;
    min-width: 300px;
    @media ${theme.media.tablet} {
        box-shadow: none;
        padding: 0;
    }
`

const FormTitle = styled.h3`
    display: flex;
    align-self: flex-start;
    font-size: 36px;
    font-weight: 500;
    line-height: 136%;
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };

    @media ${theme.media.mobile} {
        font-size: 22px;
    }
`

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    min-width: 200px;
    width: 58%;
    textarea {
        width: 100%;
        height: 152px;
        padding: 10px 18px;
        &::placeholder {
            padding: 0px;
        }
        &:focus {
            padding: 10px 18px;
        }
        @media ${theme.media.mobile} {
            height: 92px;
        }
    }
    @media ${theme.media.tablet} {
        box-shadow: ${props => props.theme === 'light' ?
            theme.light.shadow.main :
            theme.dark.shadow.main
        };
        padding: 53px 82px;
        width: 100%;
    }
    @media ${theme.media.mobile} {
        padding: 32px 50px;
    }
`

const StyledContactWrapper = styled(FlexWrapper)`
    width: 28%;
    @media ${theme.media.tablet} {
        box-shadow: ${props => props.theme === 'light' ?
            theme.light.shadow.main :
            theme.dark.shadow.main
        };
        padding: 50px;
        width: 100%;
    }
`

const SubmitButton = styled(Button)`
    width: 118px;
    height: 44px;
    border-radius: 9px;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.text.link :
        theme.dark.color.text.link
    };
    align-self: flex-start;
    font-size: 16px;
    font-weight: 500;
    line-height: 136%;
    
    @media ${theme.media.mobile} {
        font-size: 10px;
        min-width: 72px;
        width: 72px;
        height: 26px;
        border-radius: 5.5px;
    }
`

const Field = styled.input.attrs((type) => ({
    type: type
}))`
    display: flex;
    width: 50%;
    font-size: 13px;
    font-weight: 400;
    line-height: 136%;
    padding: 0 18px;
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.placeholder :
        theme.dark.color.text.placeholder
    };
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.input :
        theme.dark.color.background.input
    };
    border-radius: 9px;
    height: 36px;
    resize: none;
    border: none;
    &::placeholder {
        color: ${props => props.theme === 'light' ?
            theme.light.color.text.placeholder :
            theme.dark.color.text.placeholder
        };

        @media ${theme.media.mobile} {
            font-size: 7px;
        }
    }
    
    &:focus-visible {
        outline: 1px solid ${props => props.theme === 'light' ?
            theme.light.color.text.placeholder :
            theme.dark.color.text.placeholder
        };
    }
    @media ${theme.media.mobile} {
        height: 22px;
        border-radius: 5.5px;
        font-size: 7px ;
    }
`

const ContactIconWrapper = styled(FlexWrapper)`
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.link :
        theme.dark.color.text.link
    };
`

const FormWrapper = styled(FlexWrapper)`
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    @media ${theme.media.tablet} {
        gap: 0;
    }
`
const FixedContact = styled(FlexWrapper)`
    position: fixed;
    left: 0;
    top: 70%;
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
    opacity: 0.8;
    @media ${theme.media.tablet} {
        display: none;
    }
`

const ContactTitleH4 = styled.h4`
    font-size: 16px;
    font-weight: 500;
    line-height: 136%;
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
    @media ${theme.media.tablet} {
        font-size: 30px;
    }
    @media ${theme.media.mobile} {
        font-size: 18px;
    }
`

const ContactDescription = styled.span`
    font-size: 12px;
    font-weight: 400;
    line-height: 136%;
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.placeholder :
        theme.dark.color.text.placeholder
    };
    @media ${theme.media.tablet} {
        font-size: 23px;
    }
    @media ${theme.media.mobile} {
        font-size: 14px;
    }
`

const SocialWrapper = styled(FlexWrapper)`
    margin-top: 65px;
    @media ${theme.media.tablet} {
        margin-top: 43px;
    }
    @media ${theme.media.mobile} {
        margin-top: 75px;
    }
`

const IconWrapper = styled(FlexWrapper)`
    height: 38px;
    width: 38px;
    @media ${theme.media.tablet} {
        width: 72px;
        height: 72px;
    }
    @media ${theme.media.mobile} {
        width: 44px;
        height: 44px;
    }
`