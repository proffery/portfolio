import { themeObj } from '@/common/const/themeObj'
import { Theme } from '@/common/context/appContext'
import { FlexWrapper } from '@/components/FlexWrapper'
import styled from 'styled-components'

type StyledTheme = {
  theme: Theme
}

const LearningCard = styled(FlexWrapper)<StyledTheme>`
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.primary
      : themeObj.dark.color.background.primary};

  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20px auto;
  width: 250px;
  height: 250px;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: lighter;
  letter-spacing: 2px;
  transition: 1s box-shadow;

  @keyframes clockwise {
    0% {
      top: -5px;
      left: 0;
    }
    12% {
      top: -2px;
      left: 2px;
    }
    25% {
      top: 0;
      left: 5px;
    }
    37% {
      top: 2px;
      left: 2px;
    }
    50% {
      top: 5px;
      left: 0;
    }
    62% {
      top: 2px;
      left: -2px;
    }
    75% {
      top: 0;
      left: -5px;
    }
    87% {
      top: -2px;
      left: -2px;
    }
    100% {
      top: -5px;
      left: 0;
    }
  }

  @keyframes counterclockwise {
    0% {
      top: -5px;
      right: 0;
    }
    12% {
      top: -2px;
      right: 2px;
    }
    25% {
      top: 0;
      right: 5px;
    }
    37% {
      top: 2px;
      right: 2px;
    }
    50% {
      top: 5px;
      right: 0;
    }
    62% {
      top: 2px;
      right: -2px;
    }
    75% {
      top: 0;
      right: -5px;
    }
    87% {
      top: -2px;
      right: -2px;
    }
    100% {
      top: -5px;
      right: 0;
    }
  }

  &:hover {
    box-shadow: 0 5px 35px 0px rgba(0, 0, 0, 0.1);
  }
  &:hover::before,
  &:hover::after {
    display: block;
    content: '';
    position: absolute;
    width: 250px;
    height: 250px;
    background: #fda8cf;
    border-radius: 20px;
    z-index: -1;
    animation: 1s clockwise infinite;
  }
  &:hover:after {
    background: #f3ce5e;
    animation: 2s counterclockwise infinite;
  }
`

export const S = {
  LearningCard,
}
