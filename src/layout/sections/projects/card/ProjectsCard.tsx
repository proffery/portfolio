import { FlexWrapper } from "../../../../components/FlexWrapper"
import { useContext } from "react"
import { ThemeContext } from "../../../../context/ThemeContext"
import { S } from "./ProjectCard_Styles"

type ProjectsCardPropsTypes = {
    imageUrl: string,
    title: string,
    previewUrl: string,
    githubUrl: string
}

export const ProgectsCard: React.FC<ProjectsCardPropsTypes> = (props: ProjectsCardPropsTypes) => {
    const theme = useContext(ThemeContext)
    return (
        <S.ProjectCard theme={theme} backgroundImage={`url("${props.imageUrl}")`} direction="column" align="center" >
            <S.ProjectCardContent theme={theme} direction="column" justify="space-between" >
                <S.ProjectCardTitle theme={theme}>{props.title}</S.ProjectCardTitle>
                <FlexWrapper align="center" justify="center">
                    <S.ProjectCardLink href={props.githubUrl} target='_blank' theme={theme} type="button">Code</S.ProjectCardLink>
                    <S.ProjectCardLink href={props.previewUrl} target='_blank' theme={theme}>see preview</S.ProjectCardLink>
                </FlexWrapper>
            </S.ProjectCardContent>
        </S.ProjectCard>
    )
}