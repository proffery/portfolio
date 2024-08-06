import styled from 'styled-components'

type FlexWrapperPropsType = {
  align?: string
  direction?: string
  gap?: string
  height?: string
  justify?: string
  width?: string
  wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || 'none'};
  width: ${props => props.width || 'none'};
  height: ${props => props.height || 'none'};
`
