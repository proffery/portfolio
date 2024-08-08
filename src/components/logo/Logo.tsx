import { useTranslation } from 'react-i18next'

import { themeObj } from '@/common/const/themeObj'
import styled from 'styled-components'

type LogoPropsType = {
  color: 'gray' | 'white'
}
export const Logo = (props: LogoPropsType) => {
  const { t } = useTranslation()

  return (
    <StyledLogoLink aria-label={'Logotype main page link'} href={'#'}>
      <StyledLogoText color={props.color}>&nbsp;{t('app_logo')}&nbsp;</StyledLogoText>
    </StyledLogoLink>
  )
}

const StyledLogoLink = styled.a`
  display: flex;
  align-items: center;
  z-index: 1;
`

const StyledLogoText = styled.span`
  font-family: Caveat, sans-serif;
  font-weight: 700;
  font-size: 40px;
  white-space: nowrap;
  color: ${props =>
    props.color === 'gray' ? themeObj.light.color.text.primary : themeObj.light.color.text.second};
  @media ${themeObj.media.mobile} {
    font-size: 26px;
  }
`
