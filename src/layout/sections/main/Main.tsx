import { Icon } from "../../../components/icon/Icon"
import photo from '../../../assets/images/Photo.webp'
import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { DecorationCross } from "../../../components/decoration/DecorationCross"
import { DecorationZero } from "../../../components/decoration/DecorationZero"
import photoshop from '../../../assets/images/icon-photoshop.png'
import illustrator from '../../../assets/images/icon-llustrator.png'
import afterEffect from '../../../assets/images/icon-after-effects.png'
import figma from '../../../assets/images/icon-figma.png'
import { Link } from "../../../components/link/Link.styled"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"


export const Main = () => {
    const themeName = useContext(ThemeContext)
    return (
        <StyledMain id="main" theme={themeName}>
            <Container>
                <DecorationCross positionLeft="40%" 
                    positionTop="14%"
                    color={themeName === 'light' ? 
                            theme.light.color.background.second :
                            theme.dark.color.background.second
                        }
                 />
                <DecorationZero positionLeft="75%" 
                    positionTop="70%"
                    color={themeName === 'light' ? 
                            theme.light.color.background.second :
                            theme.dark.color.background.second
                        }
                />
                <MainBannerWrapper theme={themeName} align="center" wrap="wrap" justify="center" gap="10px" width="80%">
                    <FlexWrapper align="center" justify="center" width="52%">
                        <MainPhoto theme={themeName} src={photo} alt="Photography" />
                    </FlexWrapper>
                    <FlexWrapper direction="column" width="46%" gap="20px">
                        <FlexWrapper wrap="wrap">
                            <StyledH2 theme={themeName}>I’m &nbsp;
                                <Link href="#">Dmitry Shamko&nbsp;</Link>
                                <StyledH1 theme={themeName}>Web developer</StyledH1>
                            </StyledH2>
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
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
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

const StyledH1 = styled.h1`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 60px;
    line-height: 136%;
    font-style: normal;
    text-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.text :
        theme.dark.shadow.text
    };
`

const StyledH2 = styled.h2`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 60px;
    line-height: 136%;
    font-style: normal;
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

