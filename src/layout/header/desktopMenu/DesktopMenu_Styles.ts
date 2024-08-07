import styled from 'styled-components'

import { themeObj } from '../../../common/const/themeObj'
import { font } from '../../../styles/Font'
import { ThemeChangeButton } from '../themeChangeButton/ThemeChangeButton'

const DesktopMenu = styled.nav`
  display: flex;
  width: 100%;
  justify-content: end;
  text-align: center;
  ul {
    display: flex;
    justify-content: end;
    list-style-type: none;
  }
  li {
    display: flex;
    margin-right: 35px;
    align-items: center;
    ${font({ fMax: 16, fMin: 12 })}
  }
  z-index: 999;
  @media ${themeObj.media.tablet} {
    li {
      margin-right: 15px;
    }
  }
`
const HeaderThemeChangeButton = styled(ThemeChangeButton)`
  display: inline-block;
  @media ${themeObj.media.mobile} {
    display: none;
  }
`

export const S = {
  DesktopMenu,
  HeaderThemeChangeButton,
}
