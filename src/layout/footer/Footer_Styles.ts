import styled from "styled-components"
import { theme } from "../../styles/Theme.styled"
import { font } from "../../styles/Font"
import { FlexWrapper } from "../../components/FlexWrapper"
import footerLight from "../../assets/images/wave-light.svg"
import footerDark from "../../assets/images/wave-dark.svg"
import { Link } from "../../components/link/Link.styled"

const Footer = styled.footer`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    border-bottom: 1px solid;
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
    ${font({family: 'Inter, sans-serif', weight: 700, lineHeight: 1, Fmin: 13, Fmax: 16})}
    
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.second :
        theme.dark.color.text.primary
    };
    outline: 1px solid ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
    ${Link} {
        color: ${props => props.theme === 'light' ?
            theme.light.color.text.second :
            theme.dark.color.text.primary
        };
    }
`

const Copyrights = styled.span`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    ${font({family: 'Inter, sans-serif', weight: 400, lineHeight: 1, Fmin: 8, Fmax: 11})}
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.second :
        theme.dark.color.text.primary
    };
    padding-top: 6px;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
`

const BackgroundImgTop = styled(FlexWrapper)`
    background-image: url(${props => props.theme === 'light' ? footerLight : footerDark});
    background-size: contain;
    background-repeat: repeat-x;
    background-position: center bottom;
`

const BackgroundBottom = styled(FlexWrapper)`
    height: 70%;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.second :
        theme.dark.color.background.second
    };
`

export const S = {
    Footer,
    Name,
    Copyrights,
    BackgroundImgTop,
    BackgroundBottom
}