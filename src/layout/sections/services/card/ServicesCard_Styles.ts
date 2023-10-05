import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { theme } from "../../../../styles/Theme.styled"
import { font } from "../../../../styles/Font"
import { Button } from "../../../../components/button/Button.styled"

type ServiceCardPropsType = {
    isFlip: boolean
}

const ServicesCard = styled(FlexWrapper)<ServiceCardPropsType>`
    min-width: 334px;
    aspect-ratio: 3 / 4;
    width: 30%;
    padding: 45px 60px;
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.card :
        theme.dark.color.background.card
    };
    box-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.card :
        theme.dark.shadow.card
    };
    p {
        text-align: justify;
        transform:  ${props => props.isFlip ? 'rotateY(-180deg)' : 'rotateY(0deg)'};
        ${font({Fmin: 8, Fmax: 24})}
    }
    align-items: start;
    transition: all 0.6s;
    transform-style: preserve-3d;
    transform:  ${props => props.isFlip ? 'rotateY(-180deg)' : 'rotateY(0deg)'};

    @media ${theme.media.tablet} {
        min-width: 280px;
 
        padding: 38px 50px;
    }
    @media ${theme.media.mobile} {
        min-width: 156px;
     
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

const ServicesCardButton = styled(Button)<ServiceCardPropsType>`
    ${font({weight: 400, lineHeight: 1.96, Fmin: 8, Fmax: 16})}
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: transparent;
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.link :
        theme.dark.color.text.link
    };
    transform:  ${props => props.isFlip ? 'rotateY(-180deg)' : 'rotateY(0deg)'};
    svg {
        transform: ${props => props.isFlip ? 'rotateY(-180deg)' : 'rotateY(0deg)'};
    }
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
    ServicesCardButton
}