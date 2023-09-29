import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { Icon } from "../../../../components/icon/Icon"
import { Link } from "../../../../components/link/Link.styled"
import { useContext } from "react"
import { ThemeContext } from "../../../../context/ThemeContext"
import { theme } from "../../../../styles/Theme.styled"

type ServicesCardPropsType = {
    iconId: string,
    title: string,
    link: string
}

export const ServicesCard = (props: ServicesCardPropsType) => {
    const theme = useContext(ThemeContext)
    return (
        <StyledServicesCard theme={theme} direction="column" justify="space-between" align="start" width="30%">
            <IconWrapper>
                <Icon iconId={props.iconId} height="73px" width="73px" viewBox="0 0 70 70"/>
            </IconWrapper>
            <ServicesCardTitle theme={theme}>{props.title}</ServicesCardTitle>
            <StyledLink fontSize="16px" href={props.link} theme={theme}>View More<Icon iconId="arrowRight" width="20%"/></StyledLink>
        </StyledServicesCard>
    )
}

const StyledServicesCard = styled(FlexWrapper)`
    min-height: 402px;
    padding: 45px 60px;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.card :
        theme.dark.color.background.card
    };
    box-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.card :
        theme.dark.shadow.card
    };
    min-width: 334px;

    @media ${theme.media.tablet} {
        min-width: 280px;
        min-height: 336px;
        padding: 38px 50px;
    }
    @media ${theme.media.mobile} {
        min-width: 156px;
        min-height: 186px;
        padding: 20px 28px;
    }
`

const IconWrapper = styled(FlexWrapper)`
    height: 73px;
    width: 73px;
    @media ${theme.media.tablet} {
        width: 62px;
        height: 62px;
    }
    @media ${theme.media.mobile} {
        width: 34px;
        height: 34px;
        margin-bottom: 28px;
    }
`

const StyledLink = styled(Link)`
    font-size: 16px;
    font-weight: 400;
    line-height: 196%;
    justify-content: flex-start;
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.link :
        theme.dark.color.text.link
    };
    @media ${theme.media.tablet} {
        font-size: 13px;
    }
    @media ${theme.media.mobile} {
        font-size: 8px;
    }
`

const ServicesCardTitle = styled.h3`
    font-size: 32px;
    font-weight: 500;
    line-height: 125%;
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
    @media ${theme.media.tablet} {
        font-size: 26px;
    }
    @media ${theme.media.mobile} {
        font-size: 15px;
    }
`