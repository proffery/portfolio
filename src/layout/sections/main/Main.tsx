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
    const theme = useContext(ThemeContext)
    return (
        <StyledMain theme={theme}>
            <Container>
                <DecorationCross positionLeft="40%" positionTop="2%" />
                <DecorationZero positionLeft="75%" positionTop="40%" />
                <MainBannerWrapper align="center" wrap="wrap" justify="center" gap="10px" width="80%">
                    <FlexWrapper align="center" justify="center" width="52%">
                        <MainPhoto src={photo} alt="Photography" />
                    </FlexWrapper>
                    <FlexWrapper direction="column" width="46%" gap="30px">
                        <FlexWrapper wrap="wrap">
                            <StyledH2>I’m &nbsp;
                                <Link href="#">Dmitry Shamko,&nbsp;</Link>
                                <StyledH1>Web developer</StyledH1>
                            </StyledH2>
                        </FlexWrapper>
                        <p>Draft is a revolutionary mobile app built to help you manage your business easily and save your money.</p>
                        <FlexWrapper align="center" justify="start" gap="28px">
                            <Link type="button" color="white" background="blue" borderRadius="20px" padding="5px 20px">See Projects
                                <Icon viewBox="-8 -5 37 35" iconId="arrowRight" />
                            </Link>
                            <Link href="#">Download Resume</Link>
                        </FlexWrapper>
                    </FlexWrapper>
                </MainBannerWrapper>
                <StyledLeft theme={theme} width="30%"></StyledLeft>
                <StyledRight width="70%" direction="column" justify="end" height="100%">
                    <FlexWrapper justify="center" wrap="wrap" gap="12px">
                        <MainApps>
                            <MainAppsIcon src={photoshop} />
                        </MainApps>
                        <MainApps>
                            <MainAppsIcon src={illustrator} />
                        </MainApps>
                        <MainApps>
                            <MainAppsIcon src={afterEffect} />
                        </MainApps>
                        <MainApps>
                            <MainAppsIcon src={figma} />
                        </MainApps>
                    </FlexWrapper>
                </StyledRight>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled(FlexWrapper)`
    height: 100vh;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
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
    border: 15px solid white;
    object-fit: cover;
`
const MainApps = styled.div`
    display: flex;
    min-width: 160px;
    height: 90px;
    border-radius: 24px;
    background-color: bisque;
    justify-content: center;
    align-items: center;
`
const MainAppsIcon = styled.img`
    position: relative;
    top: -50%;
    border: 10px solid white;
    border-radius: 50% 50%;
`
const MainBannerWrapper = styled(FlexWrapper)`
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -25%);
    background-color: lightblue;
    border-radius: 150px 0;
    min-width: 300px;
    max-width: 1158px;
    min-height: 508px;
    padding: 30px;
    margin-top: 50px;
    z-index: 1;
`
const StyledLeft = styled(FlexWrapper)`
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
`

const StyledRight = styled(FlexWrapper)`
    padding-bottom: 80px;
`

const StyledH1 = styled.h1`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 60px;
`

const StyledH2 = styled.h2`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 60px;
`

