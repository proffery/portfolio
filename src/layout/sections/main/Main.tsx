import { Icon } from "../../../components/icon/Icon"
import photo from '../../../assets/images/Photo-my.webp'
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Link } from "../../../components/link/Link.styled"
import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"
import { S } from "./Main_Styles"

export const Main: React.FC = () => {
    const [loopNumber, setLoopNumber] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const toRotate = ['Web Developer', 'JS/TS Developer', 'React Developer']
    const themeName = useContext(ThemeContext)
    const period = 2000

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

    return (
        <S.Main id="main" theme={themeName}>
            <Container theme={themeName}>
                <S.BannerLeft theme={themeName}></S.BannerLeft>
                <S.BannerRight theme={themeName} justify="center" >
                    <S.BannerWrapper theme={themeName} align="center" justify="center" wrap="wrap" width="100%" gap="50px">
                        <FlexWrapper align="center" justify="center" width="47%">
                            <S.BannerPhoto theme={themeName} src={photo} alt="Photography" />
                        </FlexWrapper>
                        <S.BannerTitleWrapper direction="column" gap="20px" width="47%">
                            <FlexWrapper wrap="wrap">
                                <S.BannerTitleSecond theme={themeName}>I’m &nbsp;</S.BannerTitleSecond>
                                <S.BannerTitleSecond theme={themeName}>
                                    <Link href="#">Dmitry Shamko&nbsp;</Link>
                                </S.BannerTitleSecond>
                                <S.BannerTitleMain theme={themeName} aria-label="Web Developer">{text}&nbsp;</S.BannerTitleMain>
                            </FlexWrapper>
                            <S.BannerDescription>Draft is a revolutionary mobile app built to help you manage your business easily and save your money.</S.BannerDescription>
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
                </S.BannerRight>
            </Container>
            <Container>
                <S.AppsLeft theme={themeName}></S.AppsLeft>
                <S.AppsRight theme={themeName} direction="column" justify="end">
                    <S.AppsWrapper justify="center" gap="12px" wrap="wrap">
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
                                <Icon iconId="styled" height="100%" width="100%" viewBox="2 -0 30 30" />
                            </S.AppIconWrapper>
                            <S.AppText>Styled Components</S.AppText>
                        </S.App>
                        <S.App theme={themeName}>
                            <S.AppIconWrapper theme={themeName}>
                                <Icon iconId="git" height="100%" width="100%" viewBox="-18 -18 165 165" />
                            </S.AppIconWrapper>
                            <S.AppText>Git</S.AppText>
                        </S.App>
                    </S.AppsWrapper>
                </S.AppsRight>
            </Container>
        </S.Main>
    )
}

