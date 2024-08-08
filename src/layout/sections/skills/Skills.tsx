import { useTranslation } from 'react-i18next'

import { skills } from '@/common/const/data/skills'
import { useAppContext } from '@/common/context/appContext'
import { SectionTitle } from '@/components/SectionTitle.styled'

import { SkillSet } from './SkillSet/SkillSet'
import { S } from './Skills_Styles'

const Skills = () => {
  const { theme } = useAppContext()
  const { t } = useTranslation()

  return (
    <S.Learning id={'skills'} theme={theme}>
      <S.LearningContainer align={'center'} direction={'column'} theme={theme}>
        <SectionTitle color={'white'} theme={theme}>
          {t('skills.title')}
        </SectionTitle>
        <S.LearningSkillContainer direction={'column'} theme={theme}>
          <S.LearningSkillsTitle>{t('skills.skill_set1')}</S.LearningSkillsTitle>
          <SkillSet slides={skills.filter(skill => skill.category === 'front')} />
        </S.LearningSkillContainer>
        <S.LearningSkillContainer direction={'column'} theme={theme}>
          <S.LearningSkillsTitle>{t('skills.skill_set2')}</S.LearningSkillsTitle>
          <SkillSet slides={skills.filter(skill => skill.category === 'other')} />
        </S.LearningSkillContainer>
      </S.LearningContainer>
    </S.Learning>
  )
}

export default Skills
