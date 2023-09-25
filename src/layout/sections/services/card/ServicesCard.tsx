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
        <StyledServicesCard theme={theme} direction="column" justify="space-between" align="start" height="402px" width="30%">
            <Icon iconId={props.iconId} viewBox="0 0 70 70"/>
            <ServicesCardTitle theme={theme}>{props.title}</ServicesCardTitle>
            <StyledLink fontSize="16px" href={props.link} theme={theme}>View More<Icon iconId="arrowRight" width="30"/></StyledLink>
        </StyledServicesCard>
    )
}

const StyledServicesCard = styled(FlexWrapper)`
    padding: 45px 60px;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.card :
        theme.dark.color.background.card
    };
    box-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.card :
        theme.dark.shadow.card
    };
    max-width: 334px;
    min-width: 250px;
`

const StyledLink = styled(Link)`
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.link :
        theme.dark.color.text.link
    };
`

const ServicesCardTitle = styled.h3`
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 125%;
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
`