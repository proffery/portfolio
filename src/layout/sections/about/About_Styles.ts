import styled from "styled-components"
import { theme } from "../../../styles/Theme.styled"
import { Container } from "../../../components/Container"
import aboutMap from "../../../assets/images/Map.webp"
import photo from "../../../assets/images/Photo2-my.webp"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { font } from "../../../styles/Font"
import { Link } from "../../../components/link/Link.styled"

const About = styled.section`
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

const AboutContainer = styled(Container)`
    position: relative;
    height: 100vh;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    background-image: url(${photo}), url(${aboutMap});
    background-repeat: no-repeat;
    background-position: bottom right, bottom center;
    background-size: contain;
    @media ${theme.media.mobile} {
        height: 70vh;
    }
`

const AboutBanner = styled(FlexWrapper)`
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
    border-radius: 100px 0;
    min-width: 250px;
    padding: 30px;
    padding-top: 20px;
    @media ${theme.media.tablet} {
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
        width: auto;
    }
    
    @media ${theme.media.mobile} {
        padding-top: 10px;
        border-radius: 54px 0;
    }
`

const SocialLinksWrapper = styled(FlexWrapper)`
    align-self: flex-end;
    ${Link} {
        color: ${props => props.theme === 'light' ?
            theme.light.color.text.second :
            theme.dark.color.text.primary
        };
    }
`
const AboutBannerTitle = styled.h2`
    ${font({weight: 700, lineHeight: 1.36, Fmin: 32, Fmax: 60})}
`

const AboutBannerList = styled.ul`
    position: relative;
    ${font({weight: 400, lineHeight: 1.36, Fmin: 12, Fmax: 20})}
    li {
        display: flex;
        align-items: start;
        margin-left: 28px;
        
        @media ${theme.media.tablet} {
            margin-left: 18px;
        }
        
        @media ${theme.media.mobile} {
            margin-left: 14px;
        }
    }

    li::before {
        position: absolute;
        display: flex;
        align-self: center;
        content: '';
        border-radius: 50% 50%;
        left: 0;
        width: 18px;
        height: 18px;
        background-image: ${props => props.theme === 'light' ? theme.light.gradient.dot : theme.dark.gradient.dot};
        
        @media ${theme.media.tablet} {
            width: 14px;
            height: 14px;
        }
        
        @media ${theme.media.mobile} {
            align-self: flex-start;
            width: 10px;
            height: 10px;
            margin-top: 2px;
        }
    }
`



export const S = {
    About,
    AboutContainer,
    AboutBanner,
    SocialLinksWrapper,
    AboutBannerTitle,
    AboutBannerList
}