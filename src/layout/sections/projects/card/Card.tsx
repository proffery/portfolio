import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { Link } from "../../../../components/link/Link.styled"

type CardPropsType = {
    imageUrl: string,
    title: string
}

export const Card = (props: CardPropsType) => {
    return (
        <ProjectCard backgroundImage={`url("${props.imageUrl}")`} direction="column" align="center" width="270px" height="394px" >
            <ProjectCardContent direction="column" width="100%" height="40%" justify="space-between" >
                <ProjectCardTitle>{props.title}</ProjectCardTitle>
                <FlexWrapper align="center" justify="center" gap="20px">
                    <Link type="button" color="white" background="blue" borderRadius="12px" padding="3px 20px" fontSize="14px">Code</Link>
                    <Link color="blue" fontSize="14px">see preview</Link>
                </FlexWrapper>
            </ProjectCardContent>
        </ProjectCard>
    )
}
type ProjectCardPropsType = {
    backgroundImage: string
}

const ProjectCard = styled(FlexWrapper)<ProjectCardPropsType>`
    background-image: ${props => props.backgroundImage};
    border-radius: 30px;
`

const ProjectCardContent = styled(FlexWrapper)`
    background-color: white;
    position: relative;
    top: 100%;
    transform: translateY(-100%);
    border-radius: 0 0 30px 30px; 
    padding: 22px;
    &:hover {
        color: white;
        background-color: aqua;
    }
`

const ProjectCardTitle = styled.h3`
    color: blue;
    text-align: left;
    font-size: 20px;
    font-weight: 700;
    &:hover {
        color: white;
        background-color: aqua;
    }
`