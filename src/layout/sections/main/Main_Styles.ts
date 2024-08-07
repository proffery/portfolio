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

const Main = styled.section<StyledTheme>`
  display: flex;
  height: fit-content;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.primary
      : themeObj.dark.color.background.primary};
  color: ${props =>
    props.theme === 'light' ? themeObj.light.color.text.primary : themeObj.dark.color.text.primary};
  z-index: 0;
  overflow-x: hidden;
  padding-top: 60px;
  @media ${themeObj.media.mobile} {
    padding-top: 10px;
  }
`

const MainContainer = styled(Container)`
  padding: 0;
  @media ${themeObj.media.tablet} {
    width: 100vw;
  }
`

const BannerWrapper = styled(FlexWrapper)<StyledTheme>`
  margin: 80px auto;
  position: relative;
  padding: 42px;
  min-height: 630px;
  max-width: 1400px;
  width: 90vw;
  min-width: 360px;
  left: 50%;
  flex-wrap: wrap;
  gap: 50px;
  transform: translateX(-50%);
  background: ${props =>
    props.theme === 'light' ? themeObj.light.gradient.banner : themeObj.dark.gradient.banner};
  backdrop-filter: blur(10px);
  border: 2px solid
    ${props =>
      props.theme === 'light'
        ? themeObj.light.color.background.bannerBorder
        : themeObj.dark.color.background.bannerBorder};
  border-radius: 200px 0;
  z-index: 999999;
  @media ${themeObj.media.mobile} {
    border-radius: 112px 0;
    width: 70vw;
  }
`

const BannerLeft = styled(FlexWrapper)<StyledTheme>`
  position: absolute;
  width: 9%;
  height: 100vh;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.second
      : themeObj.dark.color.background.second};
  &::after {
    position: absolute;
    content: '';
    width: 300%;
    max-width: 432px;
    height: 100%;
    background-color: ${props =>
      props.theme === 'light'
        ? themeObj.light.color.background.second
        : themeObj.dark.color.background.second};
    @media ${themeObj.media.tablet} {
      width: 555%;
    }
  }
`

const BannerRight = styled(FlexWrapper)<StyledTheme>`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 100vh;
  z-index: 1;
  @media ${themeObj.media.tablet} {
    height: 100vh;
  }
  &::before {
    content: '+';
    position: absolute;
    transform: rotate(45deg) translate(-20%, -1%);
    height: 88px;
    width: 88px;
    ${font({ fMax: 150, fMin: 100, lineHeight: 1.36, weight: 600 })}
    color: ${props =>
      props.theme === 'light'
        ? themeObj.light.color.background.second
        : themeObj.dark.color.background.second};
    z-index: 0;
    @media ${themeObj.media.tablet} {
      top: 7%;
      left: 80%;
      transform: rotate(45deg) translate(-80%, -10%);
    }
    @media ${themeObj.media.mobile} {
      top: 8%;
      left: 80%;
      transform: rotate(45deg) translate(-80%, -8%);
    }
  }

  &::after {
    content: '';
    position: absolute;
    height: 150px;
    width: 150px;
    border-radius: 50% 50%;
    border: 25px solid
      ${props =>
        props.theme === 'light'
          ? themeObj.light.color.background.second
          : themeObj.dark.color.background.second};
    top: 90%;
    left: 95%;
    transform: translate(-95%, -90%);
    z-index: -1;
    @media ${themeObj.media.mobile} {
      height: 100px;
      width: 100px;
      border-width: 15px;
    }
  }
`

const BannerPhoto = styled.img<StyledTheme>`
  display: flex;
  max-width: 400px;
  min-width: 250px;
  height: auto;
  border-radius: 50% 50%;
  border: 15px solid
    ${props =>
      props.theme === 'light'
        ? themeObj.light.color.background.primary
        : themeObj.dark.color.background.primary};
  object-fit: cover;
`

const BannerTitleMain = styled.h1<StyledTheme>`
  ${font({ fMax: 30, fMin: 20, lineHeight: 1.68, weight: 700 })}
  text-shadow: ${props =>
    props.theme === 'light' ? themeObj.light.shadow.text : themeObj.dark.shadow.text};
`

const BannerTitleSecond = styled.div<StyledTheme>`
  ${font({ fMax: 60, fMin: 28, family: 'Montserrat', lineHeight: 1, weight: 700 })}
  text-shadow: ${props =>
    props.theme === 'light' ? themeObj.light.shadow.text : themeObj.dark.shadow.text};
  text-align: end;
`
const BannerTitleWrapper = styled(FlexWrapper)`
  min-width: 376px;
  gap: 20px;
  @media ${themeObj.media.tablet} {
    gap: 15px;
  }
  @media ${themeObj.media.mobile} {
    min-width: 210px;
    gap: 10px;
  }
`

const BannerDescription = styled.p`
  ${font({ fMax: 20, fMin: 11, lineHeight: 1.5, weight: 400 })}
`

const BannerLinksWrapper = styled(FlexWrapper)`
  gap: 26px;
  @media ${themeObj.media.mobile} {
    gap: 16px;
  }
`
const ProjectsLink = styled(Link)`
  ${font({ fMax: 18, fMin: 12, lineHeight: 1.5, weight: 600 })}
  max-width: 200px;
  min-height: 54px;
  border-radius: 12px;
  padding: 5px 30px;
  @media ${themeObj.media.tablet} {
    min-width: 132px;
    min-height: 40px;
    border-radius: 10px;
    padding: 0px 10px;
  }
`
const ResumeLink = styled(Link)`
  ${font({ fMax: 18, fMin: 12, lineHeight: 1.5, weight: 600 })}
  @media ${themeObj.media.mobile} {
    margin-left: 10px;
  }
`

const ArrowIconWrapper = styled(FlexWrapper)`
  height: 30px;
  width: 30px;
  align-items: center;
`

const AppsLeft = styled(FlexWrapper)<StyledTheme>`
  width: 30%;
  z-index: 0;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.second
      : themeObj.dark.color.background.second};
  @media ${themeObj.media.tablet} {
    width: 0;
  }
`

const AppsRight = styled(FlexWrapper)`
  width: 70%;
  padding-left: 32px;
  z-index: 0;
  @media ${themeObj.media.tablet} {
    width: 100%;
    padding-left: 0px;
  }
  @media ${themeObj.media.mobile} {
    width: 100%;
  }
`

const AppsWrapper = styled(FlexWrapper)`
  bottom: 0;
  margin-right: auto;
  z-index: 0;
`

const App = styled.div<StyledTheme>`
  position: relative;
  min-width: 160px;
  min-height: 90px;
  margin: 80px 0;
  &::before {
    position: absolute;
    content: '';
    display: flex;
    flex-direction: column;
    min-width: 160px;
    min-height: 90px;
    border-radius: 24px;
    outline: 1px solid
      ${props =>
        props.theme === 'light'
          ? themeObj.light.color.background.primary
          : themeObj.dark.color.background.primary};
    background-color: ${props =>
      props.theme === 'light'
        ? themeObj.light.color.background.second
        : themeObj.dark.color.background.second};

    @media ${themeObj.media.tablet} {
      margin-bottom: 0;
      min-width: 270px;
      min-height: 152px;
    }

    @media ${themeObj.media.mobile} {
      margin-bottom: 0;
      min-width: 146px;
      min-height: 82px;
    }
  }
  @media ${themeObj.media.tablet} {
    margin-bottom: 0;
    min-width: 270px;
    min-height: 152px;
  }

  @media ${themeObj.media.mobile} {
    margin-bottom: 0;
    min-width: 146px;
    min-height: 82px;
  }
`

const AppIconWrapper = styled.div<StyledTheme>`
  position: absolute;
  border: 10px solid
    ${props =>
      props.theme === 'light'
        ? themeObj.light.color.background.primary
        : themeObj.dark.color.background.primary};
  border-radius: 50%;
  left: 50%;
  top: -50%;
  transform: translate(-50%, 10%);
  background-color: black;
  overflow: hidden;
  width: 75px;
  height: 75px;

  @media ${themeObj.media.tablet} {
    border: 16px solid
      ${props =>
        props.theme === 'light'
          ? themeObj.light.color.background.primary
          : themeObj.dark.color.background.primary};
    width: 125px;
    height: 125px;
  }

  @media ${themeObj.media.mobile} {
    border: 9px solid
      ${props =>
        props.theme === 'light'
          ? themeObj.light.color.background.primary
          : themeObj.dark.color.background.primary};
    width: 72px;
    height: 72px;
  }
`

const AppText = styled.span`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -80%);
  color: ${themeObj.light.color.text.second};
  font-size: 20px;
  font-weight: 600;
  line-height: 80%;
  @media ${themeObj.media.tablet} {
    font-size: 34px;
  }

  @media ${themeObj.media.mobile} {
    font-size: 18px;
  }
`

export const S = {
  App,
  AppIconWrapper,
  AppText,
  AppsLeft,
  AppsRight,
  AppsWrapper,
  ArrowIconWrapper,
  BannerDescription,
  BannerLeft,
  BannerLinksWrapper,
  BannerPhoto,
  BannerRight,
  BannerTitleMain,
  BannerTitleSecond,
  BannerTitleWrapper,
  BannerWrapper,
  Main,
  MainContainer,
  ProjectsLink,
  ResumeLink,
}
