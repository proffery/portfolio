import { skills } from '@/common/const/data/skills'
import { useAppContext } from '@/common/context/appContext'
import { SectionTitle } from '@/components/SectionTitle.styled'

import { SkillSet } from './SkillSet/SkillSet'
import { S } from './Skills_Styles'

export const Skills = () => {
  const { theme } = useAppContext()

  return (
    <S.Learning id={'skills'} theme={theme}>
      <S.LearningContainer align={'center'} direction={'column'} theme={theme}>
        <SectionTitle color={'white'} theme={theme}>
          Skills
        </SectionTitle>
        <S.LearningSkillContainer direction={'column'} theme={theme}>
          <S.LearningSkillsTitle>Front-end:</S.LearningSkillsTitle>
          <SkillSet slides={skills.filter(skill => skill.category === 'front')} />
        </S.LearningSkillContainer>
        <S.LearningSkillContainer direction={'column'} theme={theme}>
          <S.LearningSkillsTitle>Other:</S.LearningSkillsTitle>
          <SkillSet slides={skills.filter(skill => skill.category === 'other')} />
        </S.LearningSkillContainer>
      </S.LearningContainer>
    </S.Learning>
  )
}
