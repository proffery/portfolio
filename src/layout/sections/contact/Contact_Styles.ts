import styled from "styled-components"
import { theme } from "../../../styles/Theme.styled"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { font } from "../../../styles/Font"
import { Button } from "../../../components/button/Button.styled"
import { Link } from "../../../components/link/Link.styled"
import { Icon } from "../../../components/icon/Icon"

const Contact = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
    gap: 20px;
    padding: 60px 0 0 0;
    @media ${theme.media.mobile} {
        padding-top: 60px 0;
    }
`

const ContactWrapper = styled(FlexWrapper)`
    height: 100%;
    width: 100%;
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

const ContactFormWrapper = styled(FlexWrapper)`
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    @media ${theme.media.tablet} {
        gap: 0;
    }
`

const ContactForm = styled.form`
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

const ContactFormTitle = styled.h3`
    display: flex;
    align-self: flex-start;
    ${font({weight: 500, lineHeight: 1.36, Fmin: 22, Fmax: 36})}

    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
`

const ContactFormField = styled.input.attrs((type) => ({
    type: type
}))`
    display: flex;
    width: 50%;
    ${font({weight: 400, lineHeight: 1.36, Fmin: 7, Fmax: 13})}

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
    }
`

const ContactFormSubmitButton = styled(Button)`
    width: 118px;
    height: 44px;
    border-radius: 9px;
    align-self: flex-start;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.text.link :
        theme.dark.color.text.link
    };
    ${font({weight: 500, lineHeight: 1.36, Fmin: 10, Fmax: 16})}

    @media ${theme.media.tablet} {
        min-width: 92px;
        width: 92px;
        height: 36px;
        border-radius: 5.5px;
    }
    
    @media ${theme.media.mobile} {
        min-width: 72px;
        width: 72px;
        height: 26px;
        border-radius: 5.5px;
    }
`

const ContactsAddsWrapper = styled(FlexWrapper)`
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


const ContactsAddWrapper = styled(FlexWrapper)`
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.link :
        theme.dark.color.text.link
    };
`


const AddTitle = styled.h4`
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

const AddIconWrapper = styled(FlexWrapper)`
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

const AddDescription = styled.span`
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

const SocialIconsWrapper = styled(FlexWrapper)`
    ${Link} :hover {
        transition: transform .2s ease-in;
        transform: scale(1.05);
    }
    margin-top: 65px;
    @media ${theme.media.tablet} {
        margin-top: 43px;
    }
    @media ${theme.media.mobile} {
        margin-top: 75px;
    }
    `


const FixedSocialIconsWrapper = styled(FlexWrapper)`
        height: 200px;
        position: fixed;
        left: 0;
        top: 70%;
    ${Link} {
        color: ${props => props.theme === 'light' ?
            theme.light.color.text.second :
            theme.dark.color.text.primary
        };
    }
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
        @media ${theme.media.tablet} {
            display: none;
        }
    `

export const S = {
    Contact,
    ContactWrapper,
    ContactFormWrapper,
    ContactForm,
    ContactFormTitle,
    ContactFormField,
    ContactFormSubmitButton,
    ContactsAddsWrapper,
    ContactsAddWrapper,
    AddIconWrapper,
    AddTitle,
    AddDescription,
    SocialIconsWrapper,
    FixedSocialIconsWrapper
}