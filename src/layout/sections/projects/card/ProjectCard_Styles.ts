import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { theme } from "../../../../styles/Theme.styled"
import { font } from "../../../../styles/Font"
import { Link } from "../../../../components/link/Link.styled"

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
    height: 40%;
    width: 100%;
    border-radius: 0 0 30px 30px; 
    padding: 22px 32px;
    box-shadow: ${props => props.theme === 'light' ?
        theme.light.shadow.card :
        theme.dark.shadow.card
    };
    transition: height ease-in .5s;

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
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: left;
    ${font({family: 'Kalameh, sans-serif', weight: 700, lineHeight: 1.36 ,Fmin: 12, Fmax: 20})}
    `
const ProjectCardLink = styled(Link)`
    ${font({weight: 700, lineHeight: 1.48, Fmin: 8, Fmax: 14})}
    max-width: 100px;
    width: 50%;
    max-height: 30px;
    aspect-ratio: 11 / 3;
    width: 50%;
    border-radius: 10px;
    @media ${theme.media.mobile} {
        border-radius: 7px;
    }    
`

const ProjectCard = styled(FlexWrapper)<ProjectCardPropsType>`
    background-image: ${props => props.backgroundImage};
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    border-radius: 30px;
    max-width: 270px;
    /* min-width: 163;
    min-height: 238px; */
    width: 30%;
    aspect-ratio: 9 / 14;
    flex-grow: 1;
    margin-bottom: 10px;
    z-index: 0;
    @media ${theme.media.mobile} {
        border-radius: 16px;
        min-width: 163px;
    }

    ${ProjectCardLink} {
        background-color: "transparent";
    }
    ${ProjectCardLink}[type="button"] {
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
            height: 45%;
        }
        ${ProjectCardTitle} {
            color: ${props => props.theme === 'light' ?
                theme.light.color.text.second :
                theme.dark.color.text.primary
            };
            display: inline-block;
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

export const S = {
    ProjectCard,
    ProjectCardContent,
    ProjectCardTitle,
    ProjectCardLink
}