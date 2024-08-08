import { useEffect, useState } from 'react'
import { Hinge } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'
import Tilt from 'react-parallax-tilt'

import photoDark from '@/assets/photos/photo-dark.webp'
import photoLight from '@/assets/photos/photo-light.webp'
import { mainBannerTickEn, mainBannerTickRu } from '@/common/const/data/bannerTickArr'
import { themeObj } from '@/common/const/themeObj'
import { useAppContext } from '@/common/context/appContext'
import { useTickText } from '@/common/customHooks/useTickText'
import { useWidth } from '@/common/customHooks/useWidth'
import { extractNumberFromString } from '@/common/utils/extractNumberFromString'
import { FlexWrapper } from '@/components/FlexWrapper'
import { Icon } from '@/components/icon/Icon'
import { Link } from '@/components/link/Link.styled'

import { S } from './Main_Styles'

export const Main = () => {
  const { theme } = useAppContext()

  const {
    i18n: { language },
    t,
  } = useTranslation()

  const width = useWidth()
  const breakpoint = extractNumberFromString(themeObj.media.tablet)
  const text = useTickText(language === 'en' ? mainBannerTickEn : mainBannerTickRu)

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
              <FlexWrapper align={'center'} justify={'center'} width={'49%'}>
                <S.BannerPhoto
                  alt={'Photography'}
                  src={theme === 'light' ? photoLight : photoDark}
                  theme={theme}
                />
              </FlexWrapper>
              <S.BannerTitleWrapper direction={'column'} width={'47%'}>
                <FlexWrapper align={'start'} direction={'column'} justify={'center'}>
                  <S.BannerTitleSecond theme={theme}>
                    {t('main.title_hi')}
                    <Link href={'#contact'}>{t('main.title_name')}</Link>
                  </S.BannerTitleSecond>
                  <S.BannerTitleMain aria-label={'Web Developer'} theme={theme}>
                    {text}&nbsp;
                  </S.BannerTitleMain>
                </FlexWrapper>
                <S.BannerDescription>{t('main.title_description')}</S.BannerDescription>
                <S.BannerLinksWrapper align={'center'} justify={'start'} wrap={'wrap'}>
                  <S.ProjectsLink
                    color={themeObj.light.color.text.second}
                    href={'#projects'}
                    type={'button'}
                  >
                    {t('main.projects_button')}
                    <S.ArrowIconWrapper>
                      <Icon iconId={'arrowRight'} viewBox={'-8 -5 37 35'} />
                    </S.ArrowIconWrapper>
                  </S.ProjectsLink>
                  <S.ResumeLink
                    download
                    href={theme === 'dark' ? './cv/cv-eng-dark.pdf' : './cv/cv-eng-light.pdf'}
                  >
                    {t('main.download_button')}
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
