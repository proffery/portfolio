import styled from 'styled-components'

import { themeObj } from '../../../../common/const/themeObj'
import { Theme } from '../../../../common/context/appContext'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { Button } from '../../../../components/button/Button.styled'
import { font } from '../../../../styles/Font'

type InterestsCardProps = {
  isFlip: boolean
}

type StyledTheme = {
  theme: Theme
}

const ServicesCard = styled(FlexWrapper)<InterestsCardProps & StyledTheme>`
  min-width: 320px;
  aspect-ratio: 3 / 4;
  width: 30%;
  padding: 0 45px;
  border-radius: 20px;
  cursor: pointer;
  color: ${props =>
    props.theme === 'light' ? themeObj.light.color.text.primary : themeObj.dark.color.text.primary};
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.card
      : themeObj.dark.color.background.card};
  box-shadow: ${props =>
    props.theme === 'light' ? themeObj.light.shadow.card : themeObj.dark.shadow.card};
  align-items: start;
  justify-content: space-around;
  transition: all 0.6s;
  transform-style: preserve-3d;
  transform: ${props => (props.isFlip ? 'rotateY(-180deg)' : 'rotateY(0deg)')};
  p {
    ${font({ fMax: 24, fMin: 14 })}
    text-align: justify;
    transform: ${props => (props.isFlip ? 'rotateY(-180deg)' : 'rotateY(0deg)')};
  }

  @media ${themeObj.media.tablet} {
    padding: 0 35px;
  }
`

const ServicesCardIconWrapper = styled(FlexWrapper)`
  height: 173px;
  width: 173px;
  align-self: center;
  @media ${themeObj.media.tablet} {
    width: 162px;
    height: 162px;
  }
  @media ${themeObj.media.mobile} {
    width: 154px;
    height: 154px;
  }
`

const ServicesCardButton = styled(Button)<InterestsCardProps>`
  ${font({ fMax: 16, fMin: 10, lineHeight: 1.96, weight: 400 })}
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  color: ${props =>
    props.theme === 'light' ? themeObj.light.color.text.link : themeObj.dark.color.text.link};
  transform: ${props => (props.isFlip ? 'rotateY(-180deg)' : 'rotateY(0deg)')};
  svg {
    transform: ${props => (props.isFlip ? 'rotateY(-180deg)' : 'rotateY(0deg)')};
  }
`

const ServicesCardTitle = styled.h3<StyledTheme>`
  ${font({ fMax: 32, fMin: 15, lineHeight: 1.25, weight: 500 })}
  color: ${props =>
    props.theme === 'light' ? themeObj.light.color.text.primary : themeObj.dark.color.text.primary};
`

export const S = {
  ServicesCard,
  ServicesCardButton,
  ServicesCardIconWrapper,
  ServicesCardTitle,
}
