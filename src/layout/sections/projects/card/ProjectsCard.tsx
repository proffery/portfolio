import { Fade } from 'react-awesome-reveal'

import { useAppContext } from '@/common/context/appContext'
import { FlexWrapper } from '@/components/FlexWrapper'

import { S } from './ProjectCard_Styles'

type ProjectsCardPropsTypes = {
  githubUrl: string
  imageUrl: string
  previewUrl: string
  title: string
}

export const ProjectsCard = (props: ProjectsCardPropsTypes) => {
  const { theme } = useAppContext()

  return (
    <S.ProjectCard
      align={'center'}
      background_image={`url("${props.imageUrl}")`}
      direction={'column'}
      theme={theme}
    >
      <S.ProjectCardContent direction={'column'} justify={'space-between'} theme={theme}>
        <Fade cascade duration={500} triggerOnce>
          <S.ProjectCardTitle theme={theme}>{props.title}</S.ProjectCardTitle>
          <FlexWrapper align={'center'} justify={'center'} width={'100%'}>
            <S.ProjectCardLink
              href={props.githubUrl}
              target={'_blank'}
              theme={theme}
              type={'button'}
            >
              Code
            </S.ProjectCardLink>
            <S.ProjectCardLink href={props.previewUrl} target={'_blank'} theme={theme}>
              Demo
            </S.ProjectCardLink>
          </FlexWrapper>
        </Fade>
      </S.ProjectCardContent>
    </S.ProjectCard>
  )
}
