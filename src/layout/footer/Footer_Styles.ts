import styled from 'styled-components'

import footerDark from '../../assets/images/wave-dark.svg'
import footerLight from '../../assets/images/wave-light.svg'
import { themeObj } from '../../common/const/themeObj'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Link } from '../../components/link/Link.styled'
import { font } from '../../styles/Font'

const Footer = styled.footer`
  height: 200px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  border-bottom: 1px solid;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.primary
      : themeObj.dark.color.background.primary};
`

const Name = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${font({ Fmax: 16, Fmin: 13, family: 'Inter, sans-serif', lineHeight: 1, weight: 700 })}

  color: ${props =>
    props.theme === 'light' ? themeObj.light.color.text.second : themeObj.dark.color.text.primary};
  outline: 2px solid
    ${props =>
      props.theme === 'light'
        ? themeObj.light.color.background.second
        : themeObj.dark.color.background.second};
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.second
      : themeObj.dark.color.background.second};
  ${Link} {
    color: ${props =>
      props.theme === 'light'
        ? themeObj.light.color.text.second
        : themeObj.dark.color.text.primary};
  }
`

const Copyrights = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${font({ Fmax: 11, Fmin: 10, family: 'Inter, sans-serif', lineHeight: 1, weight: 400 })}
  color: ${props =>
    props.theme === 'light' ? themeObj.light.color.text.second : themeObj.dark.color.text.primary};
  padding-top: 6px;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.second
      : themeObj.dark.color.background.second};
`

const BackgroundImgTop = styled(FlexWrapper)`
  background-image: url(${props => (props.theme === 'light' ? footerLight : footerDark)});
  background-size: contain;
  background-repeat: repeat-x;
  background-position: center bottom;
`

const BackgroundBottom = styled(FlexWrapper)`
  height: 70%;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.second
      : themeObj.dark.color.background.second};
`

export const S = {
  BackgroundBottom,
  BackgroundImgTop,
  Copyrights,
  Footer,
  Name,
}
