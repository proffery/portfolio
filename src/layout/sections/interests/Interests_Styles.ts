import styled from 'styled-components'

import { themeObj } from '../../../common/const/themeObj'
import { Theme } from '../../../common/context/appContext'
import { FlexWrapper } from './../../../components/FlexWrapper'

type StyledTheme = {
  theme: Theme
}

const Services = styled.section<StyledTheme>`
  ${FlexWrapper} {
    gap: 30px;
    @media ${themeObj.media.tablet} {
      gap: 26px;
    }
    @media ${themeObj.media.mobile} {
      gap: 14px;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.primary
      : themeObj.dark.color.background.primary};
`

export const S = {
  Services,
}
