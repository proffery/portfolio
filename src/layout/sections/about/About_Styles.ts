import styled from "styled-components"
import { themeObj } from "../../../common/const/themeObj"
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
        themeObj.light.color.background.primary :
        themeObj.dark.color.background.primary
    };
    color: ${props => props.theme === 'light' ?
        themeObj.light.color.text.primary :
        themeObj.dark.color.text.primary
    };
`

const AboutContainer = styled(Container)`
    position: relative;
    height: 100vh;
    padding-top: 60px;
    background-color: ${props => props.theme === 'light' ?
        themeObj.light.color.background.second :
        themeObj.dark.color.background.second
    };
    background-image: url(${photo}), url(${aboutMap});
    background-repeat: no-repeat;
    background-position: bottom right, bottom center;
    background-size: contain;
    @media ${themeObj.media.mobile} {
        height: 70vh;
    }
`

const AboutBanner = styled(FlexWrapper)`
    position: absolute;
    top: 90%;
    left: 10%;
    transform: translate(-10%, -90%);
    background: ${props => props.theme === 'light' ?
            themeObj.light.gradient.banner :
            themeObj.dark.gradient.banner
    };
    backdrop-filter: blur(10px);
    border: 2px solid ${props => props.theme === 'light' ?
            themeObj.light.color.background.bannerBorder :
            themeObj.dark.color.background.bannerBorder
    };
    border-radius: 100px 0;
    min-width: 250px;
    padding: 20px 30px 30px;
    @media ${themeObj.media.tablet} {
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
        width: auto;
    }

    @media ${themeObj.media.mobile} {
        padding-top: 10px;
        border-radius: 54px 0;
    }
`

const SocialLinksWrapper = styled(FlexWrapper)`
    align-self: flex-end;
    ${Link} {
        color: ${props => props.theme === 'light' ?
            themeObj.light.color.text.second :
            themeObj.dark.color.text.primary
        };
    }
`
const AboutBannerTitle = styled.h2`
    white-space: nowrap;
    align-self: center;
    display: none;
    ${font({family:'Montserrat', weight: 700, lineHeight: 1.36, Fmin: 20, Fmax: 30})}
    @media ${themeObj.media.tablet} {
    display: flex;
}
`

const AboutBannerList = styled.ul`
    position: relative;
    ${font({weight: 400, lineHeight: 1.36, Fmin: 12, Fmax: 20})}
    li {
        display: flex;
        align-items: start;
        margin-left: 28px;
        
        @media ${themeObj.media.tablet} {
            margin-left: 18px;
        }
        
        @media ${themeObj.media.mobile} {
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
        background-image: ${props => props.theme === 'light' ? themeObj.light.gradient.dot : themeObj.dark.gradient.dot};
        
        @media ${themeObj.media.tablet} {
            width: 14px;
            height: 14px;
        }
        
        @media ${themeObj.media.mobile} {
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