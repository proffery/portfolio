import { themeObj } from '@/common/const/themeObj'
import styled from 'styled-components'

type ButtonPropsType = {
  background?: string
  borderColor?: string
  borderRadius?: string
  borderStyle?: string
  borderWidth?: string
  color?: string
  hoverBackground?: string
  hoverColor?: string
  hoverShadow?: string
  minWidth?: string
  padding?: string
  theme: string
}

export const Button = styled.button<ButtonPropsType>`
  background-color: ${props =>
    props.background ||
    (props =>
      props.theme === 'light'
        ? themeObj.light.color.background.primary
        : themeObj.dark.color.background.primary)};
  color: ${props =>
    props.color ||
    (props =>
      props.theme === 'light'
        ? themeObj.light.color.text.primary
        : themeObj.dark.color.text.primary)};
  border-radius: ${props => props.borderRadius || '100px'};
  padding: ${props => props.padding || '0px'};
  border-color: ${props =>
    props.borderColor ||
    (props =>
      props.theme === 'light'
        ? themeObj.light.color.background.second
        : themeObj.dark.color.background.second)};
  border-width: ${props => props.borderWidth || '0px'};
  border-style: ${props => props.borderStyle || 'none'};
  min-width: ${props => props.minWidth || '100px'};
  cursor: pointer;
  transition: all ease-in 0.2s;
  &:hover {
    box-shadow: ${props =>
      props.hoverShadow ||
      (props =>
        props.theme === 'light' ? themeObj.light.shadow.card : themeObj.dark.shadow.card)};
    background-color: ${props =>
      props.hoverBackground ||
      (props =>
        props.theme === 'light'
          ? themeObj.light.color.background.second
          : themeObj.dark.color.background.second)};
    color: ${props =>
      props.hoverColor ||
      (props =>
        props.theme === 'light'
          ? themeObj.light.color.text.primary
          : themeObj.dark.color.text.primary)};
  }
`
