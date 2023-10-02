import { Icon } from "../../../components/icon/Icon"
import photo from '../../../assets/images/Photo-my.webp'
import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Link } from "../../../components/link/Link.styled"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"
import { link } from "fs"
import { font } from "../../../styles/Font"


export const Main = () => {
    const [loopNumber, setLoopNumber] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Web Developer', 'JS/TS Developer', 'React Developer']
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
            <BannerContainer theme={themeName}>
                <StyledBannerLeft theme={themeName}></StyledBannerLeft>
                <StyledBannerRight theme={themeName} justify="center" >
                    <MainBannerWrapper theme={themeName} align="center" justify="center" wrap="wrap" width="100%" gap="50px">
                        <FlexWrapper align="center" justify="center" width="47%">
                            <MainPhoto theme={themeName} src={photo} alt="Photography" />
                        </FlexWrapper>
                        <TitleWrapper direction="column" gap="20px" width="47%">
                            <FlexWrapper wrap="wrap">
                                <StyledTitleH2 theme={themeName}>I’m &nbsp;
                                    <Link href="#">Dmitry Shamko&nbsp;</Link>
                                </StyledTitleH2>
                                <StyledTitleH1 theme={themeName} aria-label="Web Developer">{text}&nbsp;</StyledTitleH1>
                            </FlexWrapper>
                            <StyledText>Draft is a revolutionary mobile app built to help you manage your business easily and save your money.</StyledText>
                            <ResumeLinksWrapper align="center" justify="start" wrap="wrap">
                                <StyledLinkButton href="#projects" type="button" color="white">See Projects
                                    <IconButtonWrapper>
                                        <Icon viewBox="-8 -5 37 35" iconId="arrowRight" />
                                    </IconButtonWrapper>
                                </StyledLinkButton>
                                <StyledResumeLink href="#">Download Resume</StyledResumeLink>
                            </ResumeLinksWrapper>
                        </TitleWrapper>
                    </MainBannerWrapper>
                </StyledBannerRight>
            </BannerContainer>
            <Container>
                <StyledAppsLeft theme={themeName}></StyledAppsLeft>
                <StyledAppsRight theme={themeName} direction="column" justify="end">
                    <AppsWrapper justify="center" gap="12px" wrap="wrap">
                        <MainApps theme={themeName}>
                            <MainAppsIconWrapper theme={themeName}>
                                <MainAppsIcon iconId="typeScript" height="100%" width="100%" viewBox="-26 -28 180 180" />
                            </MainAppsIconWrapper>
                            <AppText>TypeScript</AppText>
                        </MainApps>
                        <MainApps theme={themeName}>
                            <MainAppsIconWrapper theme={themeName}>
                                <MainAppsIcon iconId="react" height="100%" width="100%" viewBox="-10 -12 150 150" />
                            </MainAppsIconWrapper>
                            <AppText>React</AppText>
                        </MainApps>
                        <MainApps theme={themeName}>
                            <MainAppsIconWrapper theme={themeName}>
                                <MainAppsIcon iconId="styled" height="100%" width="100%" viewBox="2 -0 30 30" />
                            </MainAppsIconWrapper>
                            <AppText>Styled Components</AppText>
                        </MainApps>
                        <MainApps theme={themeName}>
                            <MainAppsIconWrapper theme={themeName}>
                                <MainAppsIcon iconId="git" height="100%" width="100%" viewBox="-18 -18 165 165" />
                            </MainAppsIconWrapper>
                            <AppText>Git</AppText>
                        </MainApps>
                    </AppsWrapper>
                </StyledAppsRight>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
    z-index: 0;
`

const BannerContainer = styled(Container)`
    height: 100%;
`

const MainPhoto = styled.img`
    display: flex;
    max-width: 400px;
    min-width: 188px;
    height: auto;
    border-radius: 50% 50%;
    border: 15px solid ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary 
    };
    object-fit: cover;
`
const ResumeLinksWrapper = styled(FlexWrapper)`
    gap: 26px;
    @media ${theme.media.mobile} {
        gap: 16px;
    }
`


const MainApps = styled.div`
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
        background-color: ${props => props.theme === 'light' ?
            theme.light.color.background.second :
            theme.dark.color.background.second
        };
        @media ${theme.media.tablet} {
            margin-bottom: 0;
            min-width: 270px;
            min-height: 152px;
        }
        
        @media ${theme.media.mobile} {
            margin-bottom: 0;
            min-width: 146px;
            min-height: 82px;
        }
    }
    @media ${theme.media.tablet} {
        margin-bottom: 0;
        min-width: 270px;
        min-height: 152px;
    }
    
    @media ${theme.media.mobile} {
        margin-bottom: 0;
        min-width: 146px;
        min-height: 82px;
    }
`
const AppText = styled.span`
    position: absolute;
    width: 100%;
    text-align: center;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -80%);
    color: ${theme.light.color.text.second};
    font-size: 20px;
    font-weight: 600;
    line-height: 80%;
    @media ${theme.media.tablet} {
        font-size: 34px;
    }
    
    @media ${theme.media.mobile} {
        font-size: 18px;
    }
`

const AppsWrapper = styled(FlexWrapper)`
    bottom: 0;
    margin-right: auto;
`

const MainAppsIcon = styled(Icon)`
    display: flex;
`

const MainAppsIconWrapper = styled.div`
    position: absolute;
    border: 10px solid ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary 
    };
    border-radius: 50%;
    left: 50%;
    top: -50%;
    transform: translate(-50%, 10%);
    background-color: black;
    overflow: hidden;
    width: 75px;
    height: 75px;

    @media ${theme.media.tablet} {
        border: 16px solid ${props => props.theme === 'light' ?
            theme.light.color.background.primary :
            theme.dark.color.background.primary 
        };
        width: 125px;
        height: 125px;
    }
    
    @media ${theme.media.mobile} {
        border: 9px solid ${props => props.theme === 'light' ?
            theme.light.color.background.primary :
            theme.dark.color.background.primary 
        };
        width: 72px;
        height: 72px;
    }
`

const MainBannerWrapper = styled(FlexWrapper)`
    position: relative;
    margin-top: 100px;
    margin-bottom: 80px;
    padding: 40px 44px;
    min-height: 508px;
    left: -5%;
    background: ${props => props.theme === 'light' ?
        theme.light.gradient.banner :
        theme.dark.gradient.banner
    };
    backdrop-filter: blur(10px);
    border: 2px solid ${props => props.theme === 'light' ?
        theme.light.color.background.bannerBorder :
        theme.dark.color.background.bannerBorder 
    };
    border-radius: 200px 0;
    z-index: 999999;
    @media ${theme.media.mobile} {
        border-radius: 112px 0;
    }
`

const StyledLinkButton = styled(Link)`
    ${font({weight: 600, lineHeight: 1.5, Fmin: 8, Fmax: 15})}
    max-width: 200px;
    min-height: 54px;
    border-radius: 20px; 
    padding: 5px 30px;
    @media ${theme.media.mobile} {
        min-width: 112px;
        min-height: 30px;
        border-radius: 11px; 
        padding: 0px 10px;
    }
`
const StyledResumeLink = styled(Link)`
    ${font({weight: 600, lineHeight: 1.5, Fmin: 8, Fmax: 15})}
`

const IconButtonWrapper = styled(FlexWrapper)`
    height: 30px;
    width: 30px;
    align-items: center;
`

const StyledBannerLeft = styled(FlexWrapper)`
    position: relative;
    width: 10%;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    &::after {
        position: absolute;
        content: "";
        width: 300%;
        height: 100%;
        background-color: ${props => props.theme === 'light' ?
            theme.light.color.background.second :
            theme.dark.color.background.second
        };
        @media ${theme.media.tablet} {
            width: 500%;
        }
    }
`

const StyledAppsRight = styled(FlexWrapper)`
    width: 70%;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
    padding-left: 32px;
    z-index: 0;
    @media ${theme.media.tablet} {
        width: 100%;
        padding-left: 0px;
    }
    @media ${theme.media.mobile} {
        width: 100%;
    }
`
const StyledAppsLeft = styled(FlexWrapper)`
    width: 30%;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    @media ${theme.media.tablet} {
        width: 0;
    }
`
const StyledBannerRight = styled(FlexWrapper)`
    position: relative;
    width: 90%;
    z-index: 1;
    &::before {
        content: "+";
        position: absolute;
        top: 2%;
        left: 30%;
        transform: rotate(45deg) translate(-20%, -2%);
        height: 88px;
        width: 88px;
        ${font({weight: 600, lineHeight: 1.36, Fmin: 100, Fmax: 150})}
        color: ${props => props.theme === 'light' ?
            theme.light.color.background.second :
            theme.dark.color.background.second};
        z-index: 0;
        @media ${theme.media.tablet} {
            top: 10%;
            left: 80%;
            transform: rotate(45deg) translate(-80%, -10%);
        }
        @media ${theme.media.mobile} {
            top: 12%;
            left: 80%;
            transform: rotate(45deg) translate(-80%, -12%);
        }
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
        top: 90%;
        left: 95%;
        transform: translate( -95%, -90%);
        z-index: 1;
        @media ${theme.media.mobile} {
            height: 100px;
            width: 100px;
            border-width: 15px;
        }
    }
`

const StyledTitleH1 = styled.h1`
    ${font({weight: 700, lineHeight: 1.36, Fmin: 34, Fmax: 60})}
    text-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.text :
        theme.dark.shadow.text
    }
`

const StyledTitleH2 = styled.h2`
    ${font({weight: 700, lineHeight: 1.36, Fmin: 34, Fmax: 60})}
    text-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.text :
        theme.dark.shadow.text
    };
`

const StyledText = styled.p`
    ${font({weight: 400, lineHeight: 1.5, Fmin: 11, Fmax: 20})}
`
const TitleWrapper = styled(FlexWrapper)`
    min-width: 376px;
    @media ${theme.media.mobile} {
        min-width: 210px;
    }
`

