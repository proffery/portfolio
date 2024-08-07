import photo from '@/assets/images/Photo2-my.webp'
import aboutMap from '@/assets/images/map.svg'
import { themeObj } from '@/common/const/themeObj'
import { Theme } from '@/common/context/appContext'
import { Container } from '@/components/Container'
import { FlexWrapper } from '@/components/FlexWrapper'
import { Link } from '@/components/link/Link.styled'
import { font } from '@/styles/Font'
import styled from 'styled-components'

type StyledTheme = {
  theme: Theme
}

const About = styled.section<StyledTheme>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.primary
      : themeObj.dark.color.background.primary};
  color: ${props =>
    props.theme === 'light' ? themeObj.light.color.text.primary : themeObj.dark.color.text.primary};
`

const AboutContainer = styled(Container)<StyledTheme>`
  position: relative;
  height: 100vh;
  padding-top: 60px;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.second
      : themeObj.dark.color.background.second};
  background-image: url(${photo}), url(${aboutMap});
  background-repeat: no-repeat;
  background-position:
    bottom right,
    center;
  background-size: contain, cover;
  @media ${themeObj.media.tablet} {
    width: 100vw;
  }

  @media ${themeObj.media.mobile} {
    height: 70vh;
  }
`

const AboutBanner = styled(FlexWrapper)<StyledTheme>`
  position: absolute;
  top: 90%;
  left: 10%;
  transform: translate(-10%, -90%);
  background: ${props =>
    props.theme === 'light' ? themeObj.light.gradient.banner : themeObj.dark.gradient.banner};
  backdrop-filter: blur(10px);
  border: 2px solid
    ${props =>
      props.theme === 'light'
        ? themeObj.light.color.background.bannerBorder
        : themeObj.dark.color.background.bannerBorder};
  border-radius: 100px 0;
  min-width: 250px;
  padding: 20px 30px 30px;
  @media ${themeObj.media.tablet} {
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    width: auto;
  }

  @media ${themeObj.media.mobile} {
    padding-top: 10px;
    border-radius: 54px 0;
  }
`

const SocialLinksWrapper = styled(FlexWrapper)<StyledTheme>`
  align-self: flex-end;
  ${Link} {
    color: ${props =>
      props.theme === 'light'
        ? themeObj.light.color.text.second
        : themeObj.dark.color.text.primary};
  }
`
const AboutBannerTitle = styled.h2`
  white-space: nowrap;
  align-self: center;
  display: none;
  ${font({ fMax: 30, fMin: 20, family: 'Montserrat', lineHeight: 1.36, weight: 700 })}
  @media ${themeObj.media.tablet} {
    display: flex;
  }
`

const AboutBannerList = styled.ul<StyledTheme>`
  position: relative;
  ${font({ fMax: 20, fMin: 12, lineHeight: 1.36, weight: 400 })}
  li {
    display: flex;
    align-items: start;
    margin-left: 28px;

    @media ${themeObj.media.tablet} {
      margin-left: 18px;
    }

    @media ${themeObj.media.mobile} {
      margin-left: 14px;
    }
  }

  li::before {
    position: absolute;
    display: flex;
    align-self: center;
    content: '';
    border-radius: 50% 50%;
    left: 0;
    width: 18px;
    height: 18px;
    background-image: ${props =>
      props.theme === 'light' ? themeObj.light.gradient.dot : themeObj.dark.gradient.dot};

    @media ${themeObj.media.tablet} {
      width: 14px;
      height: 14px;
    }

    @media ${themeObj.media.mobile} {
      align-self: flex-start;
      width: 10px;
      height: 10px;
      margin-top: 2px;
    }
  }
`

export const S = {
  About,
  AboutBanner,
  AboutBannerList,
  AboutBannerTitle,
  AboutContainer,
  SocialLinksWrapper,
}
