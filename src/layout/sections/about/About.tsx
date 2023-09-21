import styled from "styled-components"
import aboutMap from "../../../assets/images/Map.webp"
import photo from "../../../assets/images/Photo2.webp"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Link } from "../../../components/link/Link.styled"
import { Icon } from "../../../components/icon/Icon"
import { DecorationDot } from "../../../components/decoration/DecorationDot"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"

export const About = () => {
    const theme = useContext(ThemeContext)
    return (
        <StyledAbout theme={theme} id="about">
            <Container direction="column" align="center" justify="center">
                <Photo src={photo} alt="Photography" />
                <StyledAboutMe theme={theme} direction="column" align="center" wrap="wrap" justify="center">
                <StyledLinks align="center" >
                    <Link href="#">
                        <Icon iconId="aboutWhatsapp" />
                    </Link>
                    <Link href="#">
                        <Icon iconId="aboutInstagram" width="30px"/>
                    </Link>
                    <Link href="#">
                        <Icon iconId="aboutTelegram" width="46px" viewBox="-4 -2 37 35" />
                    </Link>
                </StyledLinks>
                <FlexWrapper direction="column" align="flex-start" wrap="wrap">
                    <h2>I’m&nbsp;</h2>
                    <h2><Link href="#">Dmitry Shamko</Link></h2>
                    <StyledList>
                        <li>I was born in Belarus</li>
                        <li>I’m 36 years old</li>
                        <li>I have started my interest in this field from 2022</li>
                        <li>I’m designer, video editor, web developer and ...</li>
                        <li>My phone number +989212073348</li>
                    </StyledList>
                </FlexWrapper>
                </StyledAboutMe>
            </Container>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
    height: 100vh;
    background-image: url(${aboutMap});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    overflow: hidden;
`

const Photo = styled.img`
    position: relative;
    height: 80%;
    top: 30%;
    left: 70%;
    transform: translateX(-70%);
    filter: grayscale(70%)
`

const StyledAboutMe = styled(FlexWrapper)`
    position: relative;
    top: -15%;
    left: -20%;
    background: ${props => props.theme === 'light' ?
        theme.light.gradient.banner :
        theme.dark.gradient.banner
    };
    backdrop-filter: blur(10px);
    border: 2px solid ${props => props.theme === 'light' ?
        theme.light.color.background.bannerBorder :
        theme.dark.color.background.bannerBorder 
    };
    border-radius: 75px 0;
    min-width: 250px;
    padding: 30px;
    padding-top: 10px;
    margin-left: 30px;
`

const StyledLinks = styled(FlexWrapper)`
    align-self: flex-end;
`

const StyledList = styled.ul`
    padding-left: 20px;
    li::marker {
        font-size: 25px;
        color: rgba(33, 87, 242, 1);
    }
`