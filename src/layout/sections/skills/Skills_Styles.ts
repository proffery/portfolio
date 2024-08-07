import { themeObj } from '@/common/const/themeObj'
import { Theme } from '@/common/context/appContext'
import { Container } from '@/components/Container'
import { FlexWrapper } from '@/components/FlexWrapper'
import { font } from '@/styles/Font'
import styled from 'styled-components'

type StyledTheme = {
  theme: Theme
}

const Learning = styled.section<StyledTheme>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.primary
      : themeObj.dark.color.background.primary};
`
const LearningContainer = styled(Container)<StyledTheme>`
  position: relative;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.second
      : themeObj.dark.color.background.second};
  padding: 60px 0;
  @media ${themeObj.media.tablet} {
    width: 100vw;
  }
  @media ${themeObj.media.mobile} {
    padding: 27px 0;
  }
`
const LearningSkillContainer = styled(FlexWrapper)<StyledTheme>`
  width: 100%;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.second
      : themeObj.dark.color.background.second};
`
const LearningSkillsTitle = styled.h3<StyledTheme>`
  display: flex;
  padding: 0 30px 30px;
  ${font({ fMax: 22, fMin: 16, lineHeight: 1.36, weight: 700 })}
  color: ${props =>
    props.theme === 'light' ? themeObj.light.color.text.second : themeObj.dark.color.text.primary};
  @media ${themeObj.media.mobile} {
    padding-top: 0;
    margin-top: 10px;
  }
`

export const S = {
  Learning,
  LearningContainer,
  LearningSkillContainer,
  LearningSkillsTitle,
}
