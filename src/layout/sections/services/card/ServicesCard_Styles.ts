import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { theme } from "../../../../styles/Theme.styled"
import { Link } from "../../../../components/link/Link.styled"
import { font } from "../../../../styles/Font"

const ServicesCard = styled(FlexWrapper)`
    min-width: 334px;
    min-height: 402px;
    width: 30%;
    padding: 45px 60px;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.card :
        theme.dark.color.background.card
    };
    box-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.card :
        theme.dark.shadow.card
    };

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

const ServicesCardIconWrapper = styled(FlexWrapper)`
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

const ServicesCardLink = styled(Link)`
    ${font({weight: 400, lineHeight: 1.96, Fmin: 8, Fmax: 16})}
    justify-content: flex-start;
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.link :
        theme.dark.color.text.link
    };
`

const ServicesCardTitle = styled.h3`
    ${font({weight: 500, lineHeight: 1.25, Fmin: 15, Fmax: 32})}
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
`

export const S = {
    ServicesCard,
    ServicesCardIconWrapper,
    ServicesCardTitle,
    ServicesCardLink
}