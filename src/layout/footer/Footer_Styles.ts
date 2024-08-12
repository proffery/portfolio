import { themeObj } from '@/common/const/themeObj'
import { Theme } from '@/common/context/appContext'
import { FlexWrapper } from '@/components/FlexWrapper'
import { Link } from '@/components/link/Link.styled'
import { font } from '@/styles/Font'
import styled from 'styled-components'

type StyledTheme = {
  theme: Theme
}

const Footer = styled.footer<StyledTheme>`
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

const Name = styled.span<StyledTheme>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${font({ fMax: 16, fMin: 13, family: 'Inter, sans-serif', lineHeight: 1, weight: 700 })}

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

const Copyrights = styled.span<StyledTheme>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${font({ fMax: 11, fMin: 10, family: 'Inter, sans-serif', lineHeight: 1, weight: 400 })}
  color: ${props =>
    props.theme === 'light' ? themeObj.light.color.text.second : themeObj.dark.color.text.primary};
  padding-top: 6px;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.second
      : themeObj.dark.color.background.second};
`

const BackgroundImgTop = styled(FlexWrapper)<StyledTheme>`
  background-image: url(${props =>
    props.theme === 'light' ? './images/wave-light.svg' : './images/wave-dark.svg'});
  background-size: contain;
  background-repeat: repeat-x;
  background-position: center bottom;
`

const BackgroundBottom = styled(FlexWrapper)<StyledTheme>`
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
