import styled from "styled-components"
import { theme } from "../../../styles/Theme.styled"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import decorationDots from "../../../assets/images/decorations-dots.svg"
import { Button } from "../../../components/button/Button.styled"
import { font } from "../../../styles/Font"

const Projects = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.primary :
        theme.dark.color.text.primary
    };
`
const ProjectsContainer = styled(Container)`
    background-image: url(${decorationDots});
    background-repeat: no-repeat;
    background-position: top left;
`
const ProjectWrapper = styled(FlexWrapper)`
    margin-top: 40px;
    max-height: 100vh;
    overflow-y: auto;
    gap: 38px;
    @media ${theme.media.mobile} {
        gap: 22px;
    }
`

const CategoryButton = styled(Button)`
    ${font({weight: 400, lineHeight: 1.36, Fmin: 12, Fmax: 20})}
    min-width: 160px;
    @media ${theme.media.tablet} {
        min-width: 110px;
    }
    @media ${theme.media.mobile} {
        min-width: 96px;
    }
`

export const S = {
    Projects,
    ProjectsContainer,
    ProjectWrapper,
    CategoryButton
}