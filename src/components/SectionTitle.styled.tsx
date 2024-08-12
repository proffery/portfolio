import { themeObj } from '@/common/const/themeObj'
import { font } from '@/styles/Font'
import styled from 'styled-components'

type SectionTitleTypes = {
  color?: string
  theme: string
}

export const SectionTitle = styled.h2<SectionTitleTypes>`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
  color: ${props =>
    props.color ||
    (props =>
      props.theme === 'light'
        ? themeObj.light.color.text.primary
        : themeObj.dark.color.text.primary)};
  ${font({ fMax: 32, fMin: 20, lineHeight: 1.36, weight: 600 })}
  &::before {
    position: absolute;
    content: '';
    border-radius: 50% 50%;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: ${props =>
      props.theme === 'light' ? themeObj.light.gradient.dot : themeObj.dark.gradient.dot};
    @media ${themeObj.media.tablet} {
      width: 16px;
      height: 16px;
    }

    @media ${themeObj.media.mobile} {
      width: 12px;
      height: 12px;
    }
  }
`
