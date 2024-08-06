import { Icon } from "../../../components/icon/Icon"
import photo from '../../../assets/images/Photo-my.webp'
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Link } from "../../../components/link/Link.styled"
import React, { useEffect, useState } from "react"
import { themeObj } from "../../../common/const/themeObj"
import { S } from "./Main_Styles"
import Tilt from 'react-parallax-tilt'
import { Hinge } from "react-awesome-reveal"
import { useAppContext } from "../../../common/context/appContext";
import { extractNumberFromString } from "../../../common/utils/extractNumberFromString";
import { useTickText } from "../../../common/customHooks/useTickText";
import { mainBannerTick } from "../../../common/const/data/bannerTickArr";

export const Main = () => {
    const {width, theme} = useAppContext()
    const breakpoint = extractNumberFromString(themeObj.media.tablet)
    const text = useTickText(mainBannerTick)

    const [jsIsShow, setJsIsShow] = useState(true)

    useEffect(() => {
        setTimeout(() => {setJsIsShow(false)}, 5000)
    }, [])

    return (
        <S.Main id="main" theme={theme}>
            <S.MainContainer theme={theme}>
                <S.BannerLeft theme={theme}></S.BannerLeft>
                <S.BannerRight theme={theme} justify="center" >
                <Tilt perspective={4000} transitionSpeed={800} tiltEnable={width >= breakpoint}>
                    <S.BannerWrapper theme={theme} align="center" justify="center">
                        <FlexWrapper align="center" justify="center" width="47%">
                            <S.BannerPhoto theme={theme} src={photo} alt="Photography" />
                        </FlexWrapper>
                        <S.BannerTitleWrapper direction="column" width="47%">
                            <FlexWrapper direction="column" align="start" justify="center">
                                    <S.BannerTitleSecond theme={theme}>Hi, I'm
                                        <Link href="#contact">Dmitry Shamko</Link>
                                    </S.BannerTitleSecond>
                                <S.BannerTitleMain theme={theme} aria-label="Web Developer">{text}&nbsp;</S.BannerTitleMain>
                            </FlexWrapper>
                            <S.BannerDescription>
                                Draft is a revolutionary web app built to help you manage your business easily and save your money.
                            </S.BannerDescription>
                            <S.BannerLinksWrapper align="center" justify="start" wrap="wrap">
                                <S.ProjectsLink href="#projects" type="button" color={themeObj.light.color.text.second}>See Projects
                                    <S.ArrowIconWrapper>
                                        <Icon viewBox="-8 -5 37 35" iconId="arrowRight" />
                                    </S.ArrowIconWrapper>
                                </S.ProjectsLink>
                                <S.ResumeLink download
                                              href={theme === 'dark' ? './cv/cv-eng-dark.pdf': './cv/cv-eng-light.pdf'}
                                >Download Resume</S.ResumeLink>
                            </S.BannerLinksWrapper>
                        </S.BannerTitleWrapper>
                    </S.BannerWrapper>
                </Tilt>
                </S.BannerRight>
            </S.MainContainer>
            <S.MainContainer>
                <S.AppsLeft theme={theme}></S.AppsLeft>
                <S.AppsRight theme={theme} direction="column" justify="end">
                    <S.AppsWrapper justify="center" gap="12px" wrap="wrap">
                        {jsIsShow && 
                            <Hinge duration={2000} delay={3000} triggerOnce>
                                    <S.App theme={theme}>
                                        <S.AppIconWrapper theme={theme}>
                                            <Icon iconId="javaScript" height="100%" width="100%" viewBox="-26 -28 180 180" />
                                        </S.AppIconWrapper>
                                        <S.AppText>JavaScript</S.AppText>
                                    </S.App>
                            </Hinge>
                        }
                        <S.App theme={theme}>
                            <S.AppIconWrapper theme={theme}>
                                <Icon iconId="typeScript" height="100%" width="100%" viewBox="-26 -28 180 180" />
                            </S.AppIconWrapper>
                            <S.AppText>TypeScript</S.AppText>
                        </S.App>
                        <S.App theme={theme}>
                            <S.AppIconWrapper theme={theme}>
                                <Icon iconId="react" height="100%" width="100%" viewBox="-10 -12 150 150" />
                            </S.AppIconWrapper>
                            <S.AppText>React</S.AppText>
                        </S.App>
                        <S.App theme={theme}>
                            <S.AppIconWrapper theme={theme}>
                                <Icon iconId="redux" height="100%" width="100%" viewBox="-18 -11 165 165" />
                            </S.AppIconWrapper>
                            <S.AppText>Redux</S.AppText>
                        </S.App>
                        <S.App theme={theme}>
                            <S.AppIconWrapper theme={theme}>
                                <Icon iconId="styled" height="100%" width="100%" viewBox="2 -0 30 30" />
                            </S.AppIconWrapper>
                            <S.AppText>Styled Components</S.AppText>
                        </S.App>
                    </S.AppsWrapper>
                </S.AppsRight>
            </S.MainContainer>
        </S.Main>
    )
}

