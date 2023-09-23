import styled from "styled-components"
import { Link } from "../../components/link/Link.styled"
import footerLight from "../../assets/images/wave-light.svg"
import footerDark from "../../assets/images/wave-dark.svg"
import { theme } from "../../styles/Theme.styled"
import { ThemeContext } from "../../context/ThemeContext"
import { useContext } from "react"
import { FlexWrapper } from "../../components/FlexWrapper"

export const Footer = () => {
    const theme = useContext(ThemeContext)
    return (
        <StyledFooter theme={theme}>
            <StyledBackgroundTop theme={theme} height="100%" width="100%"></StyledBackgroundTop>
            <StyledBackgroundBottom theme={theme} direction="column" height="50%" width="100%">
                <Name theme={theme}>Coded by&nbsp;<Link href="#" color="white" fontSize="16px">Dmitry Shamko</Link></Name>
                <Copyrights theme={theme}>All Rights Reserved 2023@</Copyrights>
            </StyledBackgroundBottom>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
`

const Name = styled.span`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: white;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
`

const Copyrights = styled.span`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: white;
    padding-top: 6px;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
`

const StyledBackgroundTop = styled(FlexWrapper)`
    background-image: url(${props => props.theme === 'light' ? footerLight : footerDark});
    background-size: contain;
    background-repeat: repeat-x;
    background-position: center bottom;
`

const StyledBackgroundBottom = styled(FlexWrapper)`
    height: 100%;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
`