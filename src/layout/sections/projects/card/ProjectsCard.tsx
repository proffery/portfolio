import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { Link } from "../../../../components/link/Link.styled"
import { useContext } from "react"
import { ThemeContext } from "../../../../context/ThemeContext"
import { theme } from "../../../../styles/Theme.styled"

type ProjectsCardPropsType = {
    imageUrl: string,
    title: string
}

export const ProgectsCard = (props: ProjectsCardPropsType) => {
    const theme = useContext(ThemeContext)
    return (
        <ProjectCard theme={theme} backgroundImage={`url("${props.imageUrl}")`} direction="column" align="center" height="394px" >
            <ProjectCardContent theme={theme} direction="column" width="100%" height="40%" justify="space-between" >
                <ProjectCardTitle theme={theme}>{props.title}</ProjectCardTitle>
                <FlexWrapper align="center" justify="center" gap="20px">
                    <Link theme={theme} type="button" borderRadius="12px" padding="6px 20px" fontSize="14px">Code</Link>
                    <Link theme={theme} fontSize="14px">see preview</Link>
                </FlexWrapper>
            </ProjectCardContent>
        </ProjectCard>
    )
}
type ProjectCardPropsType = {
    backgroundImage: string,
}

const ProjectCardContent = styled(FlexWrapper)`
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.card :
        theme.dark.color.background.card
    };
    position: relative;
    top: 100%;
    transform: translateY(-100%);
    border-radius: 0 0 30px 30px; 
    padding: 22px;
`

const ProjectCardTitle = styled.h3`
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.link :
        theme.dark.color.text.primary
    };
    text-align: left;
    font-size: 20px;
    font-weight: 700;
`

const ProjectCard = styled(FlexWrapper)<ProjectCardPropsType>`
    background-image: ${props => props.backgroundImage};
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    border-radius: 30px;
    width: 270px;
    ${Link} {
        color: ${props => props.theme === 'light' ?
            theme.light.color.text.link :
            theme.dark.color.text.placeholder
        };
        background-color: "transparent";
    }
    ${Link}[type="button"] {
        color: ${props => props.theme === 'light' ?
            theme.light.color.text.second :
            theme.dark.color.text.second
        };
        background-color: ${props => props.theme === 'light' ?
            theme.light.color.text.link :
            theme.dark.color.text.primary
        };
    }
    &:hover {
        ${ProjectCardContent} {
            background-color: ${props => props.theme === 'light' ?
                theme.light.color.background.second :
                theme.dark.color.background.second
            };
        }
        ${ProjectCardTitle} {
            color: ${props => props.theme === 'light' ?
                theme.light.color.text.second :
                theme.dark.color.text.primary
            };
        }
        ${FlexWrapper} ${Link} {
            color: ${props => props.theme === 'light' ?
                theme.light.color.text.second :
                theme.dark.color.text.primary
            }
        }
        ${FlexWrapper} ${Link}[type="button"] {
            color: ${props => props.theme === 'light' ?
                theme.light.color.text.second :
                theme.dark.color.text.primary
            };
            background-color: ${props => props.theme === 'light' ?
                theme.light.color.text.link :
                theme.dark.color.text.link
            };
        }
    }
`

