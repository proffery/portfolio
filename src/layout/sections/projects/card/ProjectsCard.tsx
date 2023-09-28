import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { Link } from "../../../../components/link/Link.styled"
import { useContext } from "react"
import { ThemeContext } from "../../../../context/ThemeContext"
import { theme } from "../../../../styles/Theme.styled"

type ProjectsCardPropsType = {
    imageUrl: string,
    title: string,
    previewUrl: string,
    githubUrl: string
}

export const ProgectsCard = (props: ProjectsCardPropsType) => {
    const theme = useContext(ThemeContext)
    return (
        <ProjectCard theme={theme} backgroundImage={`url("${props.imageUrl}")`} direction="column" align="center" >
            <ProjectCardContent theme={theme} direction="column" width="100%" height="40%" justify="space-between" >
                <ProjectCardTitle theme={theme}>{props.title}</ProjectCardTitle>
                <FlexWrapper align="center" justify="center">
                    <CardLink href={props.githubUrl} target='_blank' theme={theme} type="button">Code</CardLink>
                    <CardLink href={props.previewUrl} target='_blank' theme={theme}>see preview</CardLink>
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
    box-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.card :
        theme.dark.shadow.card
    };
    @media ${theme.media.mobile} {
        border-radius: 0 0 16px 16px;
        padding: 16px;
    }
`

const ProjectCardTitle = styled.h3`
    color: ${props => props.theme === 'light' ?
        theme.light.color.text.link :
        theme.dark.color.text.primary
    };

    text-align: left;
    font-family: Kalameh, sans-serif;
    font-size: 20px;
    font-weight: 700;
    @media ${theme.media.mobile} {
        font-size: 12px;
    }
`
const CardLink = styled(Link)`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 148%;
    min-width: 110px;
    min-height: 30px;
    border-radius: 12px;
    @media ${theme.media.mobile} {
        font-size: 8px;
        min-width: 66px;
        min-height: 18px;
        border-radius: 7px;
    }    
`

const ProjectCard = styled(FlexWrapper)<ProjectCardPropsType>`
    background-image: ${props => props.backgroundImage};
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    border-radius: 30px;
    width: 270px;
    height: 394px;

    @media ${theme.media.mobile} {
        width: 163px;
        height: 238px;
        border-radius: 16px;
    }

    ${CardLink} {
        background-color: "transparent";
    }
    ${CardLink}[type="button"] {
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

