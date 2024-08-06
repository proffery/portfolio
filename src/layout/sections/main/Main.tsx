import { useEffect, useState } from 'react'
import { Hinge } from 'react-awesome-reveal'
import Tilt from 'react-parallax-tilt'

import { Icon } from '@/components/icon/Icon'

import photo from '../../../assets/images/Photo-my.webp'
import { mainBannerTick } from '../../../common/const/data/bannerTickArr'
import { themeObj } from '../../../common/const/themeObj'
import { useAppContext } from '../../../common/context/appContext'
import { useTickText } from '../../../common/customHooks/useTickText'
import { extractNumberFromString } from '../../../common/utils/extractNumberFromString'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Link } from '../../../components/link/Link.styled'
import { S } from './Main_Styles'

export const Main = () => {
  const { theme, width } = useAppContext()
  const breakpoint = extractNumberFromString(themeObj.media.tablet)
  const text = useTickText(mainBannerTick)

  const [jsIsShow, setJsIsShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setJsIsShow(false)
    }, 5000)
  }, [])

  return (
    <S.Main id={'main'} theme={theme}>
      <S.MainContainer>
        <S.BannerLeft theme={theme}></S.BannerLeft>
        <S.BannerRight justify={'center'} theme={theme}>
          <Tilt perspective={4000} tiltEnable={width >= breakpoint} transitionSpeed={800}>
            <S.BannerWrapper align={'center'} justify={'center'} theme={theme}>
              <FlexWrapper align={'center'} justify={'center'} width={'47%'}>
                <S.BannerPhoto alt={'Photography'} src={photo} theme={theme} />
              </FlexWrapper>
              <S.BannerTitleWrapper direction={'column'} width={'47%'}>
                <FlexWrapper align={'start'} direction={'column'} justify={'center'}>
                  <S.BannerTitleSecond theme={theme}>
                    Hi, I&apos;m
                    <Link href={'#contact'}>Dmitry Shamko</Link>
                  </S.BannerTitleSecond>
                  <S.BannerTitleMain aria-label={'Web Developer'} theme={theme}>
                    {text}&nbsp;
                  </S.BannerTitleMain>
                </FlexWrapper>
                <S.BannerDescription>
                  Draft is a revolutionary web app built to help you manage your business easily and
                  save your money.
                </S.BannerDescription>
                <S.BannerLinksWrapper align={'center'} justify={'start'} wrap={'wrap'}>
                  <S.ProjectsLink
                    color={themeObj.light.color.text.second}
                    href={'#projects'}
                    type={'button'}
                  >
                    See Projects
                    <S.ArrowIconWrapper>
                      <Icon iconId={'arrowRight'} viewBox={'-8 -5 37 35'} />
                    </S.ArrowIconWrapper>
                  </S.ProjectsLink>
                  <S.ResumeLink
                    download
                    href={theme === 'dark' ? './cv/cv-eng-dark.pdf' : './cv/cv-eng-light.pdf'}
                  >
                    Download Resume
                  </S.ResumeLink>
                </S.BannerLinksWrapper>
              </S.BannerTitleWrapper>
            </S.BannerWrapper>
          </Tilt>
        </S.BannerRight>
      </S.MainContainer>
      <S.MainContainer>
        <S.AppsLeft theme={theme}></S.AppsLeft>
        <S.AppsRight direction={'column'} justify={'end'}>
          <S.AppsWrapper gap={'12px'} justify={'center'} wrap={'wrap'}>
            {jsIsShow && (
              <Hinge delay={3000} duration={2000} triggerOnce>
                <S.App theme={theme}>
                  <S.AppIconWrapper theme={theme}>
                    <Icon
                      height={'100%'}
                      iconId={'javaScript'}
                      viewBox={'-26 -28 180 180'}
                      width={'100%'}
                    />
                  </S.AppIconWrapper>
                  <S.AppText>JavaScript</S.AppText>
                </S.App>
              </Hinge>
            )}
            <S.App theme={theme}>
              <S.AppIconWrapper theme={theme}>
                <Icon
                  height={'100%'}
                  iconId={'typeScript'}
                  viewBox={'-26 -28 180 180'}
                  width={'100%'}
                />
              </S.AppIconWrapper>
              <S.AppText>TypeScript</S.AppText>
            </S.App>
            <S.App theme={theme}>
              <S.AppIconWrapper theme={theme}>
                <Icon height={'100%'} iconId={'react'} viewBox={'-10 -12 150 150'} width={'100%'} />
              </S.AppIconWrapper>
              <S.AppText>React</S.AppText>
            </S.App>
            <S.App theme={theme}>
              <S.AppIconWrapper theme={theme}>
                <Icon height={'100%'} iconId={'redux'} viewBox={'-18 -11 165 165'} width={'100%'} />
              </S.AppIconWrapper>
              <S.AppText>Redux</S.AppText>
            </S.App>
            <S.App theme={theme}>
              <S.AppIconWrapper theme={theme}>
                <Icon height={'100%'} iconId={'styled'} viewBox={'2 -0 30 30'} width={'100%'} />
              </S.AppIconWrapper>
              <S.AppText>Styled Components</S.AppText>
            </S.App>
          </S.AppsWrapper>
        </S.AppsRight>
      </S.MainContainer>
    </S.Main>
  )
}
