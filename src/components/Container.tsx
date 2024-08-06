import styled from 'styled-components'

import { themeObj } from '../common/const/themeObj'
import { FlexWrapper } from './FlexWrapper'

export const Container = styled(FlexWrapper)`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  max-width: 1440px;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 0 0 60px 0;
  @media ${themeObj.media.mobile} {
    padding: 27px 0;
  }
  @media ${themeObj.media.mobile} {
    background-position:
      bottom right,
      center;
  }
`
