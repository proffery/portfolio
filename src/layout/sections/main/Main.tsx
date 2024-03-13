import { Icon } from "../../../components/icon/Icon"
import photo from '../../../assets/images/Photo-my.webp'
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Link } from "../../../components/link/Link.styled"
import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { theme } from "../../../styles/Theme.styled"
import { S } from "./Main_Styles"
import Tilt from 'react-parallax-tilt'
import { Hinge } from "react-awesome-reveal"


export const Main: React.FC = () => {
    const [loopNumber, setLoopNumber] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const [jsIsShow, setJsIsShow] = useState(true)
    const toRotate = ['Web Developer', 'JS/TS Developer', 'React Developer']
    const themeName = useContext(ThemeContext)
    const period = 2000
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(() => {
        setTimeout(() => {setJsIsShow(false)}, 5000)
    }, [])
    
    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNumber % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNumber(loopNumber + 1)
            setDelta(500)
        }
    }

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
    
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    return (
        <S.Main id="main" theme={themeName}>
            <S.MainContainer theme={themeName}>
                <S.BannerLeft theme={themeName}></S.BannerLeft>
                <S.BannerRight theme={themeName} justify="center" >
                <Tilt tiltEnable={width < breakpoint ? false : true}>
                    <S.BannerWrapper theme={themeName} align="center" justify="center">
                        <FlexWrapper align="center" justify="center" width="47%">
                            <S.BannerPhoto theme={themeName} src={photo} alt="Photography" />
                        </FlexWrapper>
                        <S.BannerTitleWrapper direction="column" gap="20px" width="47%">
                            <FlexWrapper wrap="wrap">
                                <S.BannerTitleSecond theme={themeName}>I’m &nbsp;</S.BannerTitleSecond>
                                <S.BannerTitleSecond theme={themeName}>
                                    <Link href="#contact">Dmitry Shamko</Link>
                                </S.BannerTitleSecond>
                                <S.BannerTitleMain theme={themeName} aria-label="Web Developer">{text}</S.BannerTitleMain>
                            </FlexWrapper>
                            <S.BannerDescription>Draft is a revolutionary web app built to help you manage your business easily and save your money.</S.BannerDescription>
                            <S.BannerLinksWrapper align="center" justify="start" wrap="wrap">
                                <S.ProjectsLink href="#projects" type="button" color={theme.light.color.text.second}>See Projects
                                    <S.ArrowIconWrapper>
                                        <Icon viewBox="-8 -5 37 35" iconId="arrowRight" />
                                    </S.ArrowIconWrapper>
                                </S.ProjectsLink>
                                <S.ResumeLink href="#">Download Resume</S.ResumeLink>
                            </S.BannerLinksWrapper>
                        </S.BannerTitleWrapper>
                    </S.BannerWrapper>
                </Tilt>
                </S.BannerRight>
            </S.MainContainer>
            <S.MainContainer>
                <S.AppsLeft theme={themeName}></S.AppsLeft>
                <S.AppsRight theme={themeName} direction="column" justify="end">
                    <S.AppsWrapper justify="center" gap="12px" wrap="wrap">
                        {jsIsShow && 
                            <Hinge duration={2000} delay={3000} triggerOnce>
                                    <S.App theme={themeName}>
                                        <S.AppIconWrapper theme={themeName}>
                                            <Icon iconId="javaScript" height="100%" width="100%" viewBox="-26 -28 180 180" />
                                        </S.AppIconWrapper>
                                        <S.AppText>JavaScript</S.AppText>
                                    </S.App>
                            </Hinge>
                        }
                        <S.App theme={themeName}>
                            <S.AppIconWrapper theme={themeName}>
                                <Icon iconId="typeScript" height="100%" width="100%" viewBox="-26 -28 180 180" />
                            </S.AppIconWrapper>
                            <S.AppText>TypeScript</S.AppText>
                        </S.App>
                        <S.App theme={themeName}>
                            <S.AppIconWrapper theme={themeName}>
                                <Icon iconId="react" height="100%" width="100%" viewBox="-10 -12 150 150" />
                            </S.AppIconWrapper>
                            <S.AppText>React</S.AppText>
                        </S.App>
                        <S.App theme={themeName}>
                            <S.AppIconWrapper theme={themeName}>
                                <Icon iconId="redux" height="100%" width="100%" viewBox="-18 -11 165 165" />
                            </S.AppIconWrapper>
                            <S.AppText>Redux</S.AppText>
                        </S.App>
                        <S.App theme={themeName}>
                            <S.AppIconWrapper theme={themeName}>
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

