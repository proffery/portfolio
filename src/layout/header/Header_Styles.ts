import styled from "styled-components"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Link } from "../../components/link/Link.styled"
import { theme } from "../../styles/Theme.styled"
import { ThemeChangeButton } from "./themeChangeButton/ThemeChangeButton"
import { Container } from "../../components/Container"

type StyledHeaderTypes = {
    scrolled: boolean
}

const Header = styled.header<StyledHeaderTypes>`
    height: 75px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99999;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
    box-shadow: ${props => props.scrolled && theme.light.shadow.main};
    transition: all ease-in .2s;
    @media ${theme.media.mobile} {
        height: 44px;
    }
`

const HeaderContainer = styled(Container)`
    padding: 0;
    height: 75px;
    @media ${theme.media.mobile} {
        height: 44px;
    }
`

const HeaderThemeChangeButton = styled(ThemeChangeButton)`
    display: inline-block;
    @media ${theme.media.mobile} {
        display: none;
    }
`

const Left = styled(FlexWrapper)<StyledHeaderTypes>`
    display: flex;
    position: relative;
    width: 10%;
    z-index: 0;
    background-color: ${props => props.theme === 'light' && props.scrolled ?
        theme.light.color.background.primary :
        props => props.theme === 'light' ? 
        theme.light.color.background.second :
        props => props.theme === 'dark' && props.scrolled ?
        theme.dark.color.background.primary :
        theme.dark.color.background.second
    };
    transition: all ease-in .2s;
    &::after {
        position: absolute;
        content: "";
        width: 300%;
        height: 100%;
        background-color: ${props => props.theme === 'light' && props.scrolled ?
            theme.light.color.background.primary :
            props => props.theme === 'light' ? 
            theme.light.color.background.second :
            props => props.theme === 'dark' && props.scrolled ?
            theme.dark.color.background.primary :
            theme.dark.color.background.second
        };

        @media ${theme.media.tablet} {
            width: 500%;
        }
    }
`

const Right = styled(FlexWrapper)`
    display: flex;
    
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
    transition: all ease-in .2s;
`

const TopButton = styled(Link)`
    display: none;
    position: fixed;
    height: 50px;
    left: 0;
    top: 90%;
    transform-origin: top left;
    transform: rotate(-90deg);
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    border-radius: 0 0 22px 22px;
    border: 2px solid ${props => props.theme === 'light' ?
        theme.light.color.background.bannerBorder :
        theme.dark.color.background.bannerBorder 
    };

    color: ${props => props.theme === 'light' ?
        theme.light.color.text.second :
        theme.dark.color.text.primary
    };
    z-index: -1;
    border-top: none;


    @media ${theme.media.tablet} {
        display: flex;
        height: 40px;
        min-width: 80px;
        border-radius: 0 0 18px 18px;
    }
    
    @media ${theme.media.mobile} {
        height: 30px;
        min-width: 70px;
        border-radius: 0 0 16px 16px;
    }
`

export const S = {
    Header,
    HeaderContainer,
    Left,
    Right,
    TopButton,
    HeaderThemeChangeButton
}