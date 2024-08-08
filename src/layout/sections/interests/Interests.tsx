import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { InterestsType, interestsEn, interestsRu } from '@/common/const/data/interests'
import { useAppContext } from '@/common/context/appContext'
import { Container } from '@/components/Container'
import { FlexWrapper } from '@/components/FlexWrapper'
import { SectionTitle } from '@/components/SectionTitle.styled'

import { S } from './Interests_Styles'
import { InterestsCard } from './card/InterestsCard'

export type WithFlip = {
  isFlip: boolean
}

const Interests = () => {
  const { theme } = useAppContext()

  const {
    i18n: { language },
    t,
  } = useTranslation()
  const interests = language === 'en' ? interestsEn : interestsRu

  const [interestsWithFlip, setInterestsWithFlip] = useState<Array<InterestsType[0] & WithFlip>>(
    interests.map(interest => ({ ...interest, isFlip: false }))
  )

  useEffect(() => {
    setInterestsWithFlip(interests.map(interest => ({ ...interest, isFlip: false })))
  }, [language])

  return (
    <S.Services id={'interests'} theme={theme}>
      <Container direction={'column'}>
        <SectionTitle theme={theme}>{t('interests.title')}</SectionTitle>
        <FlexWrapper align={'center'} justify={'center'} wrap={'wrap'}>
          {interestsWithFlip.map((interest, index) => (
            <InterestsCard
              cardIndex={index}
              interest={interest}
              interestsWithFlip={interestsWithFlip}
              key={interest.imageId}
              setInterestsWithFlip={setInterestsWithFlip}
            />
          ))}
        </FlexWrapper>
      </Container>
    </S.Services>
  )
}

export default Interests
