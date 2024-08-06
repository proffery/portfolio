import React from 'react'

import { useAppContext } from '../../../../common/context/appContext'
import { Icon } from '../../../../components/icon/Icon'
import { S } from './SkillsCard_Styles'

type LearningCardPropsTypes = {
  imageId: string
  title: string
  viewBox?: string
}

export const SkillsCard = (props: LearningCardPropsTypes) => {
  const { theme } = useAppContext()

  return (
    <S.LearningCard align={'end'} justify={'center'} theme={theme}>
      <Icon height={'70%'} iconId={props.imageId} viewBox={props.viewBox} width={'70%'} />
    </S.LearningCard>
  )
}
