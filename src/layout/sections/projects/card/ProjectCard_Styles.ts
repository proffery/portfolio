import styled from 'styled-components'

import { themeObj } from '../../../../common/const/themeObj'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { Link } from '../../../../components/link/Link.styled'
import { font } from '../../../../styles/Font'

type ProjectCardPropsType = {
  backgroundImage: string
}

const ProjectCardContent = styled(FlexWrapper)`
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.card
      : themeObj.dark.color.background.card};
  position: relative;
  top: 100%;
  transform: translateY(-100%);
  height: 40%;
  width: 100%;
  border-radius: 0 0 20px 20px;
  padding: 22px 32px;
  box-shadow: ${props =>
    props.theme === 'light' ? themeObj.light.shadow.card : themeObj.dark.shadow.card};
  transition: height ease-in 0.5s;
  outline: 1px solid
    ${props =>
      props.theme === 'light'
        ? themeObj.light.color.background.primary
        : themeObj.dark.color.background.primary};

  @media ${themeObj.media.mobile} {
    border-radius: 0 0 16px 16px;
    padding: 16px;
  }
`

const ProjectCardTitle = styled.h3`
  color: ${props =>
    props.theme === 'light' ? themeObj.light.color.text.link : themeObj.dark.color.text.primary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;
  ${font({ Fmax: 20, Fmin: 14, lineHeight: 1.36, weight: 700 })}
`
const ProjectCardLink = styled(Link)`
  ${font({ Fmax: 14, Fmin: 12, lineHeight: 1.48, weight: 700 })}
  max-width: 100px;
  width: 50%;
  max-height: 30px;
  aspect-ratio: 11 / 3;
  width: 50%;
  border-radius: 10px;
  @media ${themeObj.media.mobile} {
    border-radius: 7px;
  }
`

const ProjectCard = styled(FlexWrapper)<ProjectCardPropsType>`
  background-image: ${props => props.backgroundImage};
  position: relative;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  border-radius: 20px;
  max-width: 270px;
  width: 30%;
  aspect-ratio: 9 / 14;
  flex-grow: 1;
  margin-bottom: 10px;
  @media ${themeObj.media.mobile} {
    border-radius: 16px;
    min-width: 163px;
  }

  ${ProjectCardLink} {
    background-color: transparent;
  }
  ${ProjectCardLink}[type="button"] {
    color: ${props =>
      props.theme === 'light' ? themeObj.light.color.text.second : themeObj.dark.color.text.second};
    background-color: ${props =>
      props.theme === 'light' ? themeObj.light.color.text.link : themeObj.dark.color.text.primary};
  }
  &:hover {
    ${ProjectCardContent} {
      background-color: ${props =>
        props.theme === 'light'
          ? themeObj.light.color.background.second
          : themeObj.dark.color.background.second};
      height: 45%;
    }
    ${ProjectCardTitle} {
      color: ${props =>
        props.theme === 'light'
          ? themeObj.light.color.text.second
          : themeObj.dark.color.text.primary};
      display: inline-block;
    }
    ${FlexWrapper} ${Link} {
      color: ${props =>
        props.theme === 'light'
          ? themeObj.light.color.text.second
          : themeObj.dark.color.text.primary};
    }
    ${FlexWrapper} ${Link}[type="button"] {
      color: ${props =>
        props.theme === 'light'
          ? themeObj.light.color.text.second
          : themeObj.dark.color.text.primary};
      background-color: ${props =>
        props.theme === 'light' ? themeObj.light.color.text.link : themeObj.dark.color.text.link};
    }
  }
`

export const S = {
  ProjectCard,
  ProjectCardContent,
  ProjectCardLink,
  ProjectCardTitle,
}
