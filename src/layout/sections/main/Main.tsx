import { Icon } from "../../../components/icon/Icon"
import photo from '../../../assets/images/Photo-my.webp'
import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import photoshop from '../../../assets/images/icon-photoshop.png'
import illustrator from '../../../assets/images/icon-llustrator.png'
import afterEffect from '../../../assets/images/icon-after-effects.png'
import figma from '../../../assets/images/icon-figma.png'
import { Link } from "../../../components/link/Link.styled"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"


export const Main = () => {
    const [loopNumber, setLoopNumber] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000
    const themeName = useContext(ThemeContext)

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
        <StyledMain id="main" theme={themeName}>
            <Container>
                <MainBannerWrapper theme={themeName} align="center" wrap="wrap" justify="center" gap="10px" width="80%">
                    <FlexWrapper align="center" justify="center" width="52%">
                        <MainPhoto theme={themeName} src={photo} alt="Photography" />
                    </FlexWrapper>
                    <FlexWrapper direction="column" width="46%" gap="20px">
                        <FlexWrapper wrap="wrap">
                            <StyledTitleH2 theme={themeName}>I’m &nbsp;
                                <Link href="#">Dmitry Shamko&nbsp;</Link>
                            </StyledTitleH2>
                            <StyledTitleH1 theme={themeName} aria-label="Web Developer">{text}&nbsp;</StyledTitleH1>
                        </FlexWrapper>
                        <StyledText>Draft is a revolutionary mobile app built to help you manage your business easily and save your money.</StyledText>
                        <FlexWrapper align="center" justify="start" gap="28px" wrap="wrap">
                            <StyledLinkButton href="#projects" type="button" color="white" background="blue" borderRadius="20px" padding="5px 20px">See Projects
                                <Icon viewBox="-8 -5 37 35" iconId="arrowRight" />
                            </StyledLinkButton>
                            <Link href="#">Download Resume</Link>
                        </FlexWrapper>
                    </FlexWrapper>
                </MainBannerWrapper>
                <StyledLeft theme={themeName} width="30%"></StyledLeft>
                <StyledRight theme={themeName} width="70%" direction="column" justify="end" height="100%">
                    <FlexWrapper justify="center" wrap="wrap" gap="12px">
                        <MainApps theme={themeName}>
                            <MainAppsIcon theme={themeName} src={photoshop} alt="Photoshop icon"/>
                            <AppText>Photoshop</AppText>
                        </MainApps>
                        <MainApps theme={themeName}>
                            <MainAppsIcon theme={themeName} src={illustrator} alt="Illustrator icon"/>
                            <AppText>Illustrator</AppText>
                        </MainApps>
                        <MainApps theme={themeName}>
                            <MainAppsIcon theme={themeName} src={afterEffect} alt="After Effect icon"/>
                            <AppText>After Effects</AppText>
                        </MainApps>
                        <MainApps theme={themeName}>
                            <MainAppsIcon theme={themeName} src={figma} alt="Figma icon"/>
                            <AppText>Figma</AppText>
                        </MainApps>
                    </FlexWrapper>
                </StyledRight>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    height: 100vh;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
    padding: 0;
    &::before {
        content: "+";
        position: absolute;
        top: 15%;
        left: 40%;
        transform: rotate(45deg);
        font-size: 150px;
        font-weight: 600;
        color: ${props => props.theme === 'light' ?
            theme.light.color.background.second :
            theme.dark.color.background.second};
        z-index: 0;
    }

    &::after {
        content: "";
        position: absolute;
        height: 150px;
        width: 150px;
        border-radius: 50% 50%;
        border: 25px solid ${props => props.theme === 'light' ?
            theme.light.color.background.second :
            theme.dark.color.background.second};
        top: 80%;
        left: 80%;
        transform: translate( -80%, -80%);
        z-index: 0;
    }
`

const MainPhoto = styled.img`
    display: flex;
    max-width: 300px;
    min-width: 188px;
    height: auto;
    border-radius: 50% 50%;
    border: 15px solid ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary 
    };
    object-fit: cover;
`
const MainApps = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 160px;
    height: 90px;
    border-radius: 24px;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    justify-content: center;
    align-items: center;
`
const AppText = styled.span`
    position: relative;
    top: -30%;
    color: ${theme.light.color.text.second};
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 136%;
`

const MainAppsIcon = styled.img`
    position: relative;
    top: -35%;
    border: 10px solid ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary 
    };
    border-radius: 50% 50%;
`
const MainBannerWrapper = styled(FlexWrapper)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.theme === 'light' ?
        theme.light.gradient.banner :
        theme.dark.gradient.banner
    };
    backdrop-filter: blur(10px);
    border: 2px solid ${props => props.theme === 'light' ?
        theme.light.color.background.bannerBorder :
        theme.dark.color.background.bannerBorder 
    };
    border-radius: 150px 0;
    min-width: 300px;
    max-width: 1158px;
    min-height: 508px;
    padding: 30px;
    margin-top: 50px;
    z-index: 1;
`

const StyledLinkButton = styled(Link)`
    min-width: 200px;
`

const StyledLeft = styled(FlexWrapper)`
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
`

const StyledRight = styled(FlexWrapper)`
    padding-bottom: 80px;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
`

const StyledTitleH1 = styled.h1`
    font-weight: 700;
    font-size: 60px;
    line-height: 136%;
    text-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.text :
        theme.dark.shadow.text
    };
`

const StyledTitleH2 = styled.h2`
    font-weight: 700;
    font-size: 60px;
    line-height: 136%;
    text-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.text :
        theme.dark.shadow.text
    };
`

const StyledText = styled.p`
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`

