import styled from "styled-components"
import { font } from "../../../styles/Font"
import { theme } from "../../../styles/Theme.styled"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Link } from "../../../components/link/Link.styled"
import { Container } from "../../../components/Container"

const Main = styled.section`
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
    overflow-x: hidden;
    padding-top: 60px;
    @media ${theme.media.mobile} {
        padding-top: 27px;
    }
`

const MainContainer = styled(Container)`
    padding: 0;
    height: 100%;
`

const BannerWrapper = styled(FlexWrapper)`
    margin: 80px auto;
    padding: 42px;
    min-height: 508px;
    width: 95%;
    left: 5%;
    flex-wrap: wrap;
    gap: 50px;
    transform: translateX(-5%);
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
        width: 60%;
    }
`

const BannerLeft = styled(FlexWrapper)`
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

const BannerRight = styled(FlexWrapper)`
    position: relative;
    width: 90%;
    z-index: 1;
    &::before {
        content: "+";
        position: absolute;
        top: 1%;
        left: 30%;
        transform: rotate(45deg) translate(-20%, -1%);
        height: 88px;
        width: 88px;
        ${font({ weight: 600, lineHeight: 1.36, Fmin: 100, Fmax: 150 })}
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
            top: 8%;
            left: 80%;
            transform: rotate(45deg) translate(-80%, -8%);
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
        z-index: -1;
        @media ${theme.media.mobile} {
            height: 100px;
            width: 100px;
            border-width: 15px;
        }
    }
`

const BannerPhoto = styled.img`
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

const BannerTitleMain = styled.h1`
    ${font({ weight: 700, lineHeight: 1.36, Fmin: 20, Fmax: 30})}
    text-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.text :
        theme.dark.shadow.text
    }
`

const BannerTitleSecond = styled.div`
    ${font({family:'Montserrat', weight: 700, lineHeight: 1.36, Fmin: 30, Fmax: 60})}
    text-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.text :
        theme.dark.shadow.text
    };
`
const BannerTitleWrapper = styled(FlexWrapper)`
    min-width: 376px;
    gap: 20px;
    @media ${theme.media.tablet} {
        gap: 15px;
    }
    @media ${theme.media.mobile} {
        min-width: 210px;
        gap: 10px;
    }
`

const BannerDescription = styled.p`
    ${font({ weight: 400, lineHeight: 1.5, Fmin: 11, Fmax: 20 })}
`

const BannerLinksWrapper = styled(FlexWrapper)`
    gap: 26px;
    @media ${theme.media.mobile} {
        gap: 16px;
    }
`
const ProjectsLink = styled(Link)`
    ${font({ weight: 600, lineHeight: 1.5, Fmin: 12, Fmax: 18 })}
    max-width: 200px;
    min-height: 54px;
    border-radius: 12px; 
    padding: 5px 30px;
    @media ${theme.media.tablet} {
        min-width: 132px;
        min-height: 40px;
        border-radius: 10px; 
        padding: 0px 10px;
    }
`
const ResumeLink = styled(Link)`
    ${font({ weight: 600, lineHeight: 1.5, Fmin: 12, Fmax: 18 })}
    @media ${theme.media.mobile} {
        margin-left: 10px;
    }
`

const ArrowIconWrapper = styled(FlexWrapper)`
    height: 30px;
    width: 30px;
    align-items: center;
`

const AppsLeft = styled(FlexWrapper)`
    width: 30%;
    z-index: 0;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    @media ${theme.media.tablet} {
        width: 0;
    }
`

const AppsRight = styled(FlexWrapper)`
    width: 70%;
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

const AppsWrapper = styled(FlexWrapper)`
    bottom: 0;
    margin-right: auto;
    z-index: 0;
`

const App = styled.div`
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
        outline: 1px solid ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
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

const AppIconWrapper = styled.div`
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

export const S = {
    Main,
    MainContainer,
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerPhoto,
    BannerTitleWrapper,
    BannerTitleMain,
    BannerTitleSecond,
    BannerDescription,
    BannerLinksWrapper,
    ProjectsLink,
    ResumeLink,
    ArrowIconWrapper,
    AppsLeft,
    AppsRight,
    AppsWrapper,
    App,
    AppIconWrapper,
    AppText
}
