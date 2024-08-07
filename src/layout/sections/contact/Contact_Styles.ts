import { themeObj } from '@/common/const/themeObj'
import { Theme } from '@/common/context/appContext'
import { FlexWrapper } from '@/components/FlexWrapper'
import { Button } from '@/components/button/Button.styled'
import { Link } from '@/components/link/Link.styled'
import { font } from '@/styles/Font'
import styled from 'styled-components'

type StyledTheme = {
  theme: Theme
}

const Contact = styled.section<StyledTheme>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.primary
      : themeObj.dark.color.background.primary};
  gap: 20px;
  @media ${themeObj.media.mobile} {
    padding-top: 60px 0;
  }
`

const ContactWrapper = styled(FlexWrapper)<StyledTheme>`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 53px 82px;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.form
      : themeObj.dark.color.background.form};
  box-shadow: ${props =>
    props.theme === 'light' ? themeObj.light.shadow.main : themeObj.dark.shadow.main};
  max-width: 932px;
  min-width: 300px;
  @media ${themeObj.media.tablet} {
    box-shadow: none;
    padding: 0;
  }
`

const ContactFormWrapper = styled(FlexWrapper)`
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  @media ${themeObj.media.tablet} {
    gap: 0;
  }
`

const ContactForm = styled.form<StyledTheme>`
  display: flex;
  align-items: center;
  min-width: 200px;
  width: 58%;
  textarea {
    width: 100%;
    height: 152px;
    padding: 10px 18px;
    &::placeholder {
      padding: 0;
    }
    &:focus {
      padding: 10px 18px;
    }
    @media ${themeObj.media.mobile} {
      height: 92px;
    }
  }
  @media ${themeObj.media.tablet} {
    box-shadow: ${props =>
      props.theme === 'light' ? themeObj.light.shadow.main : themeObj.dark.shadow.main};
    padding: 53px 82px;
    width: 100%;
  }
  @media ${themeObj.media.mobile} {
    padding: 32px 50px;
  }
`

const ContactFormTitle = styled.h3<StyledTheme>`
  display: flex;
  align-self: flex-start;
  ${font({ fMax: 36, fMin: 22, lineHeight: 1.36, weight: 500 })}

  color: ${props =>
    props.theme === 'light' ? themeObj.light.color.text.primary : themeObj.dark.color.text.primary};
`

const ContactFormField = styled.input<StyledTheme>`
  display: flex;
  width: 50%;
  ${font({ fMax: 13, fMin: 10, lineHeight: 1.36, weight: 400 })}

  padding: 0 18px;
  color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.text.placeholder
      : themeObj.dark.color.text.placeholder};
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.input
      : themeObj.dark.color.background.input};
  border-radius: 9px;
  height: 36px;
  border: none;

  &::placeholder {
    color: ${props =>
      props.theme === 'light'
        ? themeObj.light.color.text.placeholder
        : themeObj.dark.color.text.placeholder};
  }

  &:focus-visible {
    outline: 1px solid
      ${props =>
        props.theme === 'light'
          ? themeObj.light.color.text.placeholder
          : themeObj.dark.color.text.placeholder};
  }

  @media ${themeObj.media.mobile} {
    height: 28px;
    border-radius: 6px;
  }
`
const ContactFormTextarea = styled.textarea<StyledTheme>`
  display: flex;
  width: 50%;
  ${font({ fMax: 13, fMin: 10, lineHeight: 1.36, weight: 400 })}

  padding: 0 18px;
  color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.text.placeholder
      : themeObj.dark.color.text.placeholder};
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.input
      : themeObj.dark.color.background.input};
  border-radius: 9px;
  height: 36px;
  resize: none;
  border: none;

  &::placeholder {
    color: ${props =>
      props.theme === 'light'
        ? themeObj.light.color.text.placeholder
        : themeObj.dark.color.text.placeholder};
  }

  &:focus-visible {
    outline: 1px solid
      ${props =>
        props.theme === 'light'
          ? themeObj.light.color.text.placeholder
          : themeObj.dark.color.text.placeholder};
  }

  @media ${themeObj.media.mobile} {
    height: 22px;
    border-radius: 6px;
  }
`

const ContactFormSubmitButton = styled(Button)`
  width: 118px;
  height: 44px;
  border-radius: 9px;
  background-color: ${props =>
    props.theme === 'light' ? themeObj.light.color.text.link : themeObj.dark.color.text.link};
  ${font({ fMax: 16, fMin: 10, lineHeight: 1.36, weight: 500 })}

  @media ${themeObj.media.tablet} {
    min-width: 92px;
    width: 92px;
    height: 36px;
    border-radius: 5.5px;
  }

  @media ${themeObj.media.mobile} {
    min-width: 72px;
    width: 72px;
    height: 26px;
  }
`

const ContactsAddsWrapper = styled(FlexWrapper)<StyledTheme>`
  width: 28%;
  @media ${themeObj.media.tablet} {
    box-shadow: ${props =>
      props.theme === 'light' ? themeObj.light.shadow.main : themeObj.dark.shadow.main};
    padding: 50px;
    width: 100%;
  }
`

const ContactsAddWrapper = styled(FlexWrapper)<StyledTheme>`
  color: ${props =>
    props.theme === 'light' ? themeObj.light.color.text.link : themeObj.dark.color.text.link};
`

const AddTitle = styled.h4<StyledTheme>`
  font-size: 16px;
  font-weight: 500;
  line-height: 136%;
  color: ${props =>
    props.theme === 'light' ? themeObj.light.color.text.primary : themeObj.dark.color.text.primary};

  @media ${themeObj.media.tablet} {
    font-size: 30px;
  }

  @media ${themeObj.media.mobile} {
    font-size: 18px;
  }
`

const AddIconWrapper = styled(FlexWrapper)`
  height: 38px;
  width: 38px;
  @media ${themeObj.media.tablet} {
    width: 72px;
    height: 72px;
  }
  @media ${themeObj.media.mobile} {
    width: 44px;
    height: 44px;
  }
`

const AddDescription = styled.span<StyledTheme>`
  font-size: 12px;
  font-weight: 400;
  line-height: 136%;
  color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.text.placeholder
      : themeObj.dark.color.text.placeholder};
  @media ${themeObj.media.tablet} {
    font-size: 23px;
  }
  @media ${themeObj.media.mobile} {
    font-size: 14px;
  }
`

const SocialIconsWrapper = styled(FlexWrapper)<StyledTheme>`
  ${Link} {
    color: ${props =>
      props.theme === 'light'
        ? themeObj.light.color.background.primary
        : themeObj.dark.color.background.primary};
  }
  margin-top: 65px;
  @media ${themeObj.media.tablet} {
    margin-top: 43px;
  }
  @media ${themeObj.media.mobile} {
    margin-top: 75px;
  }
`

const FixedSocialIconsWrapper = styled(FlexWrapper)<StyledTheme>`
  height: 200px;
  position: fixed;
  left: 0;
  top: 70%;
  ${Link} {
    color: ${props =>
      props.theme === 'light'
        ? themeObj.light.color.text.second
        : themeObj.dark.color.text.primary};
  }
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.second
      : themeObj.dark.color.background.second};
  border-radius: 0 25px 25px 0;
  border: 2px solid
    ${props =>
      props.theme === 'light'
        ? themeObj.light.color.background.bannerBorder
        : themeObj.dark.color.background.bannerBorder};
  border-left: none;
  z-index: 200;
  @media ${themeObj.media.tablet} {
    display: none;
  }
`

export const S = {
  AddDescription,
  AddIconWrapper,
  AddTitle,
  Contact,
  ContactForm,
  ContactFormField,
  ContactFormSubmitButton,
  ContactFormTextarea,
  ContactFormTitle,
  ContactFormWrapper,
  ContactWrapper,
  ContactsAddWrapper,
  ContactsAddsWrapper,
  FixedSocialIconsWrapper,
  SocialIconsWrapper,
}
