import { FlexWrapper } from "../../../../components/FlexWrapper"
import { useAppContext } from "../../../../common/context/appContext"
import { S } from "./ProjectCard_Styles"
import { Fade } from "react-awesome-reveal"

type ProjectsCardPropsTypes = {
    imageUrl: string,
    title: string,
    previewUrl: string,
    githubUrl: string
}

export const ProjectsCard = (props: ProjectsCardPropsTypes) => {
    const {theme} = useAppContext()

    return (
        <S.ProjectCard theme={theme} backgroundImage={`url("${props.imageUrl}")`} direction="column" align="center" >
            <S.ProjectCardContent theme={theme} direction="column" justify="space-between" >
                <Fade duration={500} cascade triggerOnce>
                    <S.ProjectCardTitle theme={theme}>{props.title}</S.ProjectCardTitle>
                <FlexWrapper align="center" justify="center" width="100%">
                        <S.ProjectCardLink href={props.githubUrl} target='_blank' theme={theme} type="button">Code</S.ProjectCardLink>
                        <S.ProjectCardLink href={props.previewUrl} target='_blank' theme={theme}>Demo</S.ProjectCardLink>
                </FlexWrapper>
                </Fade>
            </S.ProjectCardContent>
        </S.ProjectCard>
    )
}