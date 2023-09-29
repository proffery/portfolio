import styled from "styled-components"
import aboutMap from "../../../assets/images/Map.webp"
import photo from "../../../assets/images/Photo2-my.webp"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Link } from "../../../components/link/Link.styled"
import { Icon } from "../../../components/icon/Icon"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"

export const About = () => {
    const theme = useContext(ThemeContext)
    return (
        <StyledAbout theme={theme} id="about">
            <StyledContainer theme={theme} direction="column" align="center" justify="center">
                <AboutMe theme={theme} direction="column" align="center" wrap="wrap" justify="center">
                    <StyledLinks align="center" >
                        <Link href="#" aria-label="Open Whatsapp group">
                            <Icon iconId="aboutWhatsapp" />
                        </Link>
                        <Link href="#" aria-label="Open Instagram account" >
                            <Icon iconId="aboutInstagram" width="30px"/>
                        </Link>
                        <Link href="#" aria-label="Open Telegram group" >
                            <Icon iconId="aboutTelegram" width="46px" viewBox="-4 -2 37 35" />
                        </Link>
                    </StyledLinks>
                    <FlexWrapper direction="column" align="flex-start" wrap="wrap" >
                        <StyledH2>I’m&nbsp;</StyledH2>
                        <StyledH2><Link href="#">Dmitry Shamko</Link></StyledH2>
                        <StyledList theme={theme}>
                            <li>I was born in Belarus</li>
                            <li>I’m 36 years old</li>
                            <li>I have started my interest in this field from 2022</li>
                            <li>I’m designer, video editor, web developer and ...</li>
                            <li>My phone number +989212073348</li>
                        </StyledList>
                    </FlexWrapper>
                </AboutMe>
            </StyledContainer>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
`

const StyledContainer = styled(Container)`
    position: relative;
    height: 70vh;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    background-image: url(${photo}), url(${aboutMap});
    background-repeat: no-repeat;
    background-position: bottom right, bottom center;
    background-size: contain;
    @media ${theme.media.mobile} {
        background-position: bottom right, center;
    }
`

const AboutMe = styled(FlexWrapper)`
    position: absolute;
    top: 90%;
    left: 10%;
    transform: translate(-10%, -90%);
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
    @media ${theme.media.tablet} {
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
        width: 90%;
    }
    
    @media ${theme.media.mobile} {
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
        padding-top: 30px;
        width: auto;
    }
`

const StyledLinks = styled(FlexWrapper)`
    align-self: flex-end;
    @media ${theme.media.mobile} {
        display: none;
    }
`

const StyledList = styled.ul`
    position: relative;
    font-size: 20px;
    font-weight: 400;
    line-height: 136%;

    li {
        display: flex;
        align-items: start;
        margin-left: 28px;
        @media ${theme.media.mobile} {
            margin-left: 18px;
        }
    }

    li::before {
        position: absolute;
        content: '';
        border-radius: 50% 50%;
        left: 0;
        width: 18px;
        height: 18px;
        margin-top: 3px;
        background-image: ${props => props.theme === 'light' ? theme.light.gradient.dot : theme.dark.gradient.dot};
        
        @media ${theme.media.mobile} {
            width: 10px;
            height: 10px;
        }
    }
    
    @media ${theme.media.mobile} {
        font-size: 11px;
    }
`

const StyledH2 = styled.h2`
    font-size: 60px;
    font-weight: 700;
    line-height: 136%;
    @media ${theme.media.mobile} {
        font-size: 32px;
    }
`