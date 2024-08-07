import { themeObj } from '@/common/const/themeObj'
import { Theme } from '@/common/context/appContext'
import { Container } from '@/components/Container'
import { FlexWrapper } from '@/components/FlexWrapper'
import { Link } from '@/components/link/Link.styled'
import styled from 'styled-components'

type StyledHeader = {
  scrolled: string
  theme: Theme
}

type StyledTheme = {
  theme: Theme
}

const Header = styled.header<StyledHeader>`
  height: 75px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99999;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.primary
      : themeObj.dark.color.background.primary};
  color: ${props =>
    props.theme === 'light' ? themeObj.light.color.text.primary : themeObj.dark.color.text.primary};
  box-shadow: ${props => props.scrolled === 'true' && themeObj.light.shadow.main};
  @media ${themeObj.media.mobile} {
    height: 44px;
  }
`

const HeaderContainer = styled(Container)`
  padding: 0;
  height: 75px;
  @media ${themeObj.media.mobile} {
    height: 44px;
  }
`

const Left = styled(FlexWrapper)<StyledHeader>`
  display: flex;
  position: relative;
  width: 10%;
  z-index: 0;
  background-color: ${props =>
    props.theme === 'light' && props.scrolled
      ? themeObj.light.color.background.primary
      : props =>
          props.theme === 'light'
            ? themeObj.light.color.background.second
            : props =>
                props.theme === 'dark' && props.scrolled
                  ? themeObj.dark.color.background.primary
                  : themeObj.dark.color.background.second};
  &::after {
    position: absolute;
    content: '';
    width: 300%;
    height: 100%;
    background-color: ${props =>
      props.theme === 'light' && props.scrolled === 'true'
        ? themeObj.light.color.background.primary
        : props =>
            props.theme === 'light'
              ? themeObj.light.color.background.second
              : props =>
                  props.theme === 'dark' && props.scrolled === 'true'
                    ? themeObj.dark.color.background.primary
                    : themeObj.dark.color.background.second};

    @media ${themeObj.media.tablet} {
      width: 500%;
    }
  }
`

const Right = styled(FlexWrapper)<StyledTheme>`
  display: flex;
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.primary
      : themeObj.dark.color.background.primary};
`

const TopButton = styled(Link)`
  display: none;
  position: fixed;
  height: 50px;
  left: 0;
  top: 90%;
  transform-origin: top left;
  transform: rotate(-90deg);
  background-color: ${props =>
    props.theme === 'light'
      ? themeObj.light.color.background.second
      : themeObj.dark.color.background.second};
  border-radius: 0 0 22px 22px;
  border: 2px solid
    ${props =>
      props.theme === 'light'
        ? themeObj.light.color.background.bannerBorder
        : themeObj.dark.color.background.bannerBorder};

  color: ${props =>
    props.theme === 'light' ? themeObj.light.color.text.second : themeObj.dark.color.text.primary};
  z-index: -1;
  border-top: none;

  @media ${themeObj.media.tablet} {
    display: flex;
    height: 40px;
    min-width: 80px;
    border-radius: 0 0 18px 18px;
  }

  @media ${themeObj.media.mobile} {
    height: 30px;
    min-width: 70px;
    border-radius: 0 0 16px 16px;
  }
`

export const S = {
  Header,
  HeaderContainer,
  Left,
  Right,
  TopButton,
}
