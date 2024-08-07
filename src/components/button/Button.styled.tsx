import { themeObj } from '@/common/const/themeObj'
import styled from 'styled-components'

type ButtonPropsType = {
  background?: string
  border_color?: string
  border_radius?: string
  border_style?: string
  border_width?: string
  color?: string
  hover_background?: string
  hover_color?: string
  hover_shadow?: string
  min_width?: string
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
  border-radius: ${props => props.border_radius || '100px'};
  padding: ${props => props.padding || '0px'};
  border-color: ${props =>
    props.border_color ||
    (props =>
      props.theme === 'light'
        ? themeObj.light.color.background.second
        : themeObj.dark.color.background.second)};
  border-width: ${props => props.border_width || '0px'};
  border-style: ${props => props.border_style || 'none'};
  min-width: ${props => props.min_width || '100px'};
  cursor: pointer;
  transition: all ease-in 0.2s;
  &:hover {
    box-shadow: ${props =>
      props.hover_shadow ||
      (props =>
        props.theme === 'light' ? themeObj.light.shadow.card : themeObj.dark.shadow.card)};
    background-color: ${props =>
      props.hover_background ||
      (props =>
        props.theme === 'light'
          ? themeObj.light.color.background.second
          : themeObj.dark.color.background.second)};
    color: ${props =>
      props.hover_color ||
      (props =>
        props.theme === 'light'
          ? themeObj.light.color.text.primary
          : themeObj.dark.color.text.primary)};
  }
`
