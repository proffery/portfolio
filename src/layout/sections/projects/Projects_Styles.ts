import styled from 'styled-components'

import decorationDots from '../../../assets/images/decorations-dots.svg'
import { themeObj } from '../../../common/const/themeObj'
import { Theme } from '../../../common/context/appContext'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Button } from '../../../components/button/Button.styled'
import { font } from '../../../styles/Font'

type StyledTheme = {
  theme: Theme
}

const Projects = styled.section<StyledTheme>`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.primary
      : themeObj.dark.color.background.primary};
  color: ${props =>
    props.theme === 'light' ? themeObj.light.color.text.primary : themeObj.dark.color.text.primary};
`
const ProjectsContainer = styled(Container)<StyledTheme>`
  background-image: url(${decorationDots});
  background-repeat: no-repeat;
  background-position: top left;
  position: relative;
  &::before {
    content: '+';
    position: absolute;
    top: 120%;
    left: 50%;
    transform: rotate(45deg) translate(-50%, -110%);
    opacity: 0.3;
    ${font({ fMax: 550, fMin: 350, lineHeight: 1.36, weight: 600 })}
    color: ${props =>
      props.theme === 'light'
        ? themeObj.light.color.background.second
        : themeObj.dark.color.background.second};
    @media ${themeObj.media.tablet} {
      opacity: 0;
    }
  }
`
const ProjectWrapper = styled(FlexWrapper)`
  margin-top: 40px;
  max-height: 100vh;
  overflow-y: auto;
  gap: 38px;
  padding: 0 38px;
  @media ${themeObj.media.mobile} {
    gap: 22px;
    padding: 0 22px;
  }
`

const CategoryButton = styled(Button)`
  ${font({ fMax: 20, fMin: 12, lineHeight: 1.36, weight: 400 })}
  min-width: 160px;
  @media ${themeObj.media.tablet} {
    min-width: 110px;
  }
  @media ${themeObj.media.mobile} {
    min-width: 96px;
  }
`

export const S = {
  CategoryButton,
  ProjectWrapper,
  Projects,
  ProjectsContainer,
}
